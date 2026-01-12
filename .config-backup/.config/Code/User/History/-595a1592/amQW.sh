#!/bin/bash
# Continuous headphone detection

while true; do
    HEADPHONE_STATUS=$(amixer -c 1 get Headphone | grep -o "\[on\]")

    if [ "$HEADPHONE_STATUS" = "[on]" ]; then
        amixer -c 1 set Speaker mute
        amixer -c 1 set Headphone unmute
        amixer -c 1 set Headphone 87
    else
        amixer -c 1 set Headphone mute
        amixer -c 1 set Speaker unmute
        amixer -c 1 set Headphone 87
    fi

    sleep 1
done

