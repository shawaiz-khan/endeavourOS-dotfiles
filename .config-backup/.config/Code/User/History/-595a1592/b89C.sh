#!/bin/bash

CARD="0"  # Usually card 0 is your Realtek
PIN="0x04211020"

while true; do
    STATE=$(cat /proc/asound/card${CARD}/codec#* | grep -A1 "$PIN" | grep -i "Jack" | grep -o "present\|absent")
    
    if [[ "$STATE" == "present" ]]; then
        amixer set Master mute
    else
        amixer set Master unmute
    fi
    sleep 1
done
