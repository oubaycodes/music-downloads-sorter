#!/bin/bash

if [ $(command -v python) ]
then 
# application
    echo $(npm i) 
    if [ ! $(command -v spotdl) ] || [ ! $(command -v python -m spotdl) ]  
    then
    echo $(python -m pip install spotdl)
    exit 0
    fi
else
echo "python is needed for instalation"
exit 1
fi