from django.shortcuts import render
from tests.models import Test
from users.models import User
import json
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
        return render(request, 'account.html', {'name': name, 'names': names, 'dates': dates, 'durations': durations})


def testroom(request, name):
    if User.objects.filter(firstName=name).exists():
        testL = User.objects.get(firstName=name).regTests
        testInfos = []
        for i in testL:
            testInfo = {
                'name': str(Test.objects.get(tid=i).name).strip(),
                'tid': str(Test.objects.get(tid=i).tid).strip(),
                'status': int(Test.objects.get(tid=i).status),
                'duration': int(Test.objects.get(tid=i).duration),
                'testSet': json.dumps(Test.objects.get(tid=i).content),
            }
            testInfos.append(json.dumps(testInfo))

        return render(request, 'TestRoom.html', {'name': name, 'testInfos': json.dumps({k: v for k, v in enumerate(testInfos)})})
