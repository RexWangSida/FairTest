from django.shortcuts import render
from tests.models import Test
from users.models import User
# Create your views here.


def index(request):
    return render(request, 'index.html')


def login(request):
    return render(request, 'login.html')


def account(request, name, uid):
    if User.objects.filter(uid=uid).exists():
        testL = User.objects.get(uid=uid).regTests
        names = []
        dates = []
        durations = []
        for i in testL:
            names.append(str(Test.objects.get(tid=i).name).strip())
            dates.append(str(Test.objects.get(tid=i).date))
            durations.append(str(Test.objects.get(tid=i).duration))
        return render(request, 'account.html', {'name': name, 'names': names, 'dates': dates, 'durations': durations, 'uid': uid})


def testroom(request, name, uid):

    return render(request, 'TestRoom.html', {'name': name, 'uid':uid})
