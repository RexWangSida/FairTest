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
                print(User.objects.get(email = email).firstName)
                with open('face_roc/TEMP.csv','w+') as file:
                    file.write(f'{email}')
                return HttpResponse(json.dumps({'name':User.objects.get(email = email).firstName}), content_type="application/json")
        return HttpResponse(json.dumps({'msg':'The email you entered is not registered with us!'}), content_type="application/json")
    return render(request, 'login.html')
