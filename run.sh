#!/bin/bash

aqi="$(cd /home/pibridge/Desktop/AQI-Hue-Lights && node main.js)"
date_str="$(date +'%m.%d.%Y %H:%M')"
echo "AQI is $aqi at $date_str" >> /home/pibridge/Documents/aqi-log.txt

