#!/bin/bash
CARD=1

while true; do
    # Read Auto-Mute Mode status
    HEADPHONE_STATUS=$(amixer -c $CARD get "Auto-Mute Mode" | grep -o "\[Enabled\]")

    if [ "$HEADPHONE_STATUS" = "[Enabled]" ]; then
        # Headphones likely plugged
        amixer -c $CARD set Speaker mute
        amixer -c $CARD set Headphone unmute
        echo "Headphones plugged in → switched output"
    else
        # Headphones likely unplugged
        amixer -c $CARD set Headphone mute
        amixer -c $CARD set Speaker unmute
        echo "Headphones unplugged → switched output"
    fi

    sleep 0.2
done