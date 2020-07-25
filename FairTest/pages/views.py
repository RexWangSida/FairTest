from django.shortcuts import render
from tests.models import Test
from users.models import User
# Create your views here.
def index(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'login.html')


def account(request, name):
    if User.objects.filter(firstName=name).exists():
        testL = User.objects.get(firstName=name).regTests
        names = []
        dates = []
        durations = []
        for i in testL:
            names.append(str(Test.objects.get(tid=i).name).strip())
            dates.append(str(Test.objects.get(tid=i).date))
            durations.append(str(Test.objects.get(tid=i).duration))
        return render(request,'account.html', {'name': name, 'names':names, 'dates':dates, 'durations':durations})

def testroom(request, name):
    return render(request, 'TestRoom.html', {'name':name})
