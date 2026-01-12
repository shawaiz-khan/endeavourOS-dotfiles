#!/bin/bash

CARD=46
SINK=$(pactl list short sinks | grep "$CARD" | awk '{print $2}')

while true; do
    # Check if headphones are available
    HEADPHONE_STATUS=$(pactl list cards | grep "Headphones" | grep -c "available")

    if [ "$HEADPHONE_STATUS" -eq 1 ]; then
        # Headphones plugged in
        pactl set-sink-port "$SINK" "headphones"
    else
        # Headphones unplugged, use speakers
        pactl set-sink-port "$SINK" "speaker"
    fi

    sleep 1
done