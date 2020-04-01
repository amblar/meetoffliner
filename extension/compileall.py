from os import path
import os, shutil
from os.path import basename
from zipfile import ZipFile

cwd = os.getcwd();
if(path.exists(cwd + "/dist") == False):
    os.mkdir(cwd + "/dist")
if(path.isdir(cwd + "/dist") == False):
    os.remove(cwd + "/dist")
    os.mkdir(cwd + "/dist")

if(path.isdir(cwd + "/tmp") == False):
    os.mkdir(cwd + "/tmp")
identifier = str(input("Meetoffliner version: "))
for d in os.listdir(cwd):
    if(path.isdir("./" + d) and d != "dist" and d != "tmp"):
        shutil.copytree(cwd + "/" + d, cwd + "/tmp/" + "Meetoffliner-" + identifier + "-" + d)
        with ZipFile(cwd + "/dist/" + "Meetoffliner-" + identifier + "-" + d + ".zip", "w") as zipObj:
            for dname, subdirst, files in os.walk(cwd + "/tmp/" + "Meetoffliner-" + identifier + "-" + d):
                for f in files:
                    filePath = path.join(dname, f)
                    if("Icon" in basename(filePath)):
                        zipObj.write(filePath, "img/" + basename(filePath))
                    else:
                        zipObj.write(filePath, basename(filePath))
shutil.rmtree(cwd + "/tmp")
