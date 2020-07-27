from django.shortcuts import render, HttpResponse
import json
from .models import User
import csv
# Create your views here.
def loginAuth(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        if User.objects.filter(email=email).exists():
            if User.objects.get(email = email).password == password:
                with open('TEMP.csv','w+') as file:
                    writer=csv.writer(file)
                    file.write(f'{email}')
                return HttpResponse(json.dumps({'val':0, 'name':User.objects.get(email = email).firstName, 'uid':User.objects.get(email = email).uid}), content_type="application/json")
            return HttpResponse(json.dumps({'val':1, 'msg':'The password you entered does not match our record! Please try again!'}), content_type="application/json")
        return HttpResponse(json.dumps({'val': 1, 'msg':'The email you entered is not registered with us!'}), content_type="application/json")
    return render(request, 'login.html')
