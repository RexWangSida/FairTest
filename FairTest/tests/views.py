from django.shortcuts import render
from tests.models import Test
from users.models import User
import json
from django.utils.safestring import SafeString
from django.http import HttpResponse
# Create your views here.

def getTest(request):
    name = request.POST.get('name')
    if User.objects.filter(firstName=name).exists():
        testL = User.objects.get(firstName=name).regTests
        testInfos = {}
        questionSet = {}
        indexi = 0
        for i in testL:
            testInfo = {
                'name': str(Test.objects.get(tid=i).name).strip(),
                'tid': str(Test.objects.get(tid=i).tid).strip(),
                'status': int(Test.objects.get(tid=i).status),
                'duration': int(Test.objects.get(tid=i).duration),
                'questionSet': {}
            }
            questions = Test.objects.get(tid=i).question_set.all()
            indexj = 0
            for question in questions:
                testInfo['questionSet'][str(indexj)] = {}
                testInfo['questionSet'][str(
                    indexj)]['title'] = question.question
                testInfo['questionSet'][str(indexj)]['choices'] = {
                    '0': question.A,
                    '1': question.B,
                    '2': question.C,
                    '3': question.D
                }
                testInfo['questionSet'][str(indexj)]['ans'] = None
                indexj += 1
            testInfos[str(indexi)] = testInfo
            indexi += 1
        return HttpResponse(json.dumps({"testInfos": testInfos}), content_type="application/json")
    return HttpResponse(json.dumps({"msg": "It is not a post request"}), content_type="application/json")


def updateTest(request):
    testResult = json.loads(request.POST.get('msg'))
    return HttpResponse(json.dumps({"msg": "Test result updated"}), content_type="application/json")
