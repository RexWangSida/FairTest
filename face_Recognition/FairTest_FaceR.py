import cv2
import numpy as np
import face_recognition
import os
from datetime import datetime
from threading import Semaphore
import time
import threading
#Find the specific student picture
def imgloc_one(email_stu):
    path = 'ImagesAttendence'
    myList = os.listdir(path)
    print(myList)
    for cl in myList:
        if os.path.splitext(cl)[0]==email_stu:
            Tester_img=cv2.imread(f'{path}/{cl}')
    return Tester_img
#Encode the face of student
def encoding(Tester_img):
    Tester_img=cv2.cvtColor(Tester_img, cv2.COLOR_BGR2RGB)
    Tester_img_enc= face_recognition.face_encodings(Tester_img)[0]
    return Tester_img_enc
#Real time camera Face_recognization

def Cam_recog(cap,Tester_img_encode,Tester_email,control1,Control2):
    start_time=0
    warn=0
    while Control2 and warn<6:
        success,img = cap.read()
        #img = captureScreen()
        imgS = cv2.resize(img,(0,0),None,0.25,0.25)
        imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)
    
        facesCurFrame = face_recognition.face_locations(imgS)
        encodesCurFrame = face_recognition.face_encodings(imgS,facesCurFrame)
        #print(facesCurFrame)
        if (len(facesCurFrame)>1 or len(facesCurFrame)==0) and control1==False :
            print("testhere")
            start_time= time.perf_counter()
            control1=True
        if control1==True:
            end_time=time.perf_counter()
            gap_time=float(end_time-start_time)
            print(gap_time)
            #print(gap_time)
            if gap_time>15:
                Control2=False
                control1=False
                print("Test failed")
        for encodeFace,faceLoc in zip(encodesCurFrame,facesCurFrame):
            matches = face_recognition.compare_faces([Tester_img_encode],encodeFace)
            faceDis = face_recognition.face_distance([Tester_img_encode],encodeFace)
            #print(faceDis)
            #matchIndex = np.argmin(faceDis)
            if matches[0]==False or float(faceDis[0])>0.6:
                name = 'UNKNOWN'
                y3,x4,y4,x3 = faceLoc
                y3, x4, y4, x3 = y3*4,x4*4,y4*4,x3*4
                cv2.rectangle(img,(x3,y3),(x4,y4),(0,0,255),2)
                cv2.rectangle(img,(x3,y4-35),(x4,y4),(255,0,0),cv2.FILLED)
                cv2.putText(img,name+' Warning',(x3+6,y4-6),cv2.FONT_HERSHEY_COMPLEX,1,(255,255,255),2)
                if control1==False:
                    control1=True
                    start_time= time.perf_counter()

            if float(faceDis[0])<0.5:
                name = Tester_email
                #print(name)
                y1,x2,y2,x1 = faceLoc
                y1, x2, y2, x1 = y1*4,x2*4,y2*4,x1*4
                cv2.rectangle(img,(x1,y1),(x2,y2),(0,255,0),2)
                cv2.rectangle(img,(x1,y2-35),(x2,y2),(0,255,0),cv2.FILLED)
                cv2.putText(img,name,(x1+6,y2-6),cv2.FONT_HERSHEY_COMPLEX,1,(255,255,255),2)
                #attendence_check(name,'start time')
                if control1==True and len(facesCurFrame)==1:
                    control1=False
                    if gap_time>5 and gap_time<15:
                        warn+=1
            
        cv2.putText(img,'The Warning chance left '+str(5-warn),(50,50),cv2.FONT_HERSHEY_COMPLEX,1,(0,0,255),2)
        cv2.imshow('Webcam',img)
        cv2.waitKey(1)
#Attence log.csv build 
def attendence_Scheck(name,message):
    with open('Attendance.csv','r+') as f:
        myDataList = f.readlines()
        nameList = []
        for line in myDataList:
            entry = line.split(',')
            nameList.append(entry[0])
        if name not in nameList:
            now = datetime.now()
            dtString = now.strftime('%H:%M:%S')
            f.writelines(f'\n{name},{message},{dtString}')



if __name__ == '__main__':
    images = []
    classNames = []
    Tester_email="Grace Liu"
    Tester_img=imgloc_one('Grace Liu')
    Tester_img_encode=encoding(Tester_img)
    print("Encode complete")
    cap = cv2.VideoCapture(0)
    a=Semaphore(1)
    gap_time=0
    control1=False
    Control2=True
    Cam_recog(cap,Tester_img_encode,Tester_email,control1,Control2)


        
