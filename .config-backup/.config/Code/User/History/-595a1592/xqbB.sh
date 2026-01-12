#!/bin/bash
CARD=1
HEADPHONE_PIN="Ext Right"  # matches your HP Out pin

prev_state=""

while true; do
    # Check if headphones are physically plugged in
    HEADPHONE_STATUS=$(grep -i "HP Out at $HEADPHONE_PIN" /proc/asound/card${CARD}/codec#* | grep -c "Jack: connected")

    if [ "$HEADPHONE_STATUS" -ge 1 ] && [ "$prev_state" != "plugged" ]; then
        # Headphones plugged in → mute speakers, unmute headphones
        amixer -c $CARD set Speaker mute >/dev/null
        amixer -c $CARD set Headphone unmute >/dev/null
        echo "Headphones plugged in → switched output"
        prev_state="plugged"

    elif [ "$HEADPHONE_STATUS" -eq 0 ] && [ "$prev_state" != "unplugged" ]; then
        # Headphones unplugged → mute headphones, unmute speakers
        amixer -c $CARD set Headphone mute >/dev/null
        amixer -c $CARD set Speaker unmute >/dev/null
        echo "Headphones unplugged → switched output"
        prev_state="unplugged"
    fi

    sleep 0.2
done