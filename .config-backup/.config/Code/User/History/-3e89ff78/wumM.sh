#!/bin/bash

# Automatically mute/unmute speakers based on headphone status
HEADPHONE_STATUS=$(amixer -c 1 get Headphone | grep -o "\[on\]")

if [ "$HEADPHONE_STATUS" = "[on]" ]; then
    # Headphones plugged in
    amixer -c 1 set Speaker mute
    amixer -c 1 set Headphone unmute
    amixer -c 1 set Headphone 87
else
    # Headphones removed
    amixer -c 1 set Speaker unmute
fi
