#!/bin/bash
URL=$1
LOCATION=/home/oub/Music/Music-Waitlist/

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
        if [ -d $LOCATION ]
        then
            cd $LOCATION
        fi
DOWNLOAD
fi