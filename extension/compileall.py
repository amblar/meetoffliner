from os import path
import os
import shutil
from os.path import basename
from zipfile import ZipFile

cwd = os.getcwd()
if not path.exists(cwd + "/dist"):
    os.mkdir(cwd + "/dist")
if not path.isdir(cwd + "/dist"):
    os.remove(cwd + "/dist")
    os.mkdir(cwd + "/dist")

if not path.isdir(cwd + "/tmp"):
    os.mkdir(cwd + "/tmp")
identifier = input("Version: ")
for d in os.listdir(cwd):
    if(path.isdir("./" + d) and d != "dist" and d != "tmp"):
        shutil.copytree(cwd + "/" + d, cwd + "/tmp/" +
                        "Meetoffliner-" + identifier + "-" + d)
        with ZipFile(cwd + "/dist/" + "Meetoffliner-" + identifier + "-" + d + ".zip", "w") as zipObj:
            for dname, subdirst, files in os.walk(cwd + "/tmp/" + "Meetoffliner-" + identifier + "-" + d):
                for f in files:
                    filePath = path.join(dname, f)
                    if("Icon" in basename(filePath)):
                        zipObj.write(filePath, "img/" + basename(filePath))
                    else:
                        zipObj.write(filePath, basename(filePath))
shutil.rmtree(cwd + "/tmp")
