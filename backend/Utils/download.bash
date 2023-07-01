#!/bin/bash
URL=$1

PHONE_LOCATION=/run/user/1000/9c489d89_4d67_43cc_a5dc_a5b4f1594787/primary/Waitlist/

DOWNLOAD() {
if [ $(command -v spotdl) ]
then
    echo $(spotdl --audio slider-kz youtube-music youtube --bitrate 256k $URL)

elif [ $(command -v python -m spotdl) ]
then 
    echo $(python -m spotdl --audio slider-kz youtube-music youtube --bitrate 256k $URL)
else 
            echo "spotdl is not installed on your system"
            exit 1
fi

}
if [ $URL ]
    then
        if [ -d $PHONE_LOCATION ]
        then
            cd $PHONE_LOCATION
        fi
DOWNLOAD
fi