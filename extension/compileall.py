from os import path
import os
from zipfile import ZipFile

cwd = os.getcwd();
if(path.exists(cwd + "/dist") == False):
    os.mkdir(cwd + "/dist")
if(path.isdir(cwd + "/dist") == False):
    os.remove(cwd + "/dist")
    os.mkdir(cwd + "/dist")

for d in os.listdir(cwd):
    if(path.isdir(cwd + "/" + d) and d != "dist"):
        with ZipFile(cwd + "/dist/" + d + ".zip", "w") as zipObj:
            for dname, subdirst, files in os.walk(cwd + "/" + d):
                for f in files:
                    filePath = path.join(dname, f)
                    zipObj.write(filePath)
