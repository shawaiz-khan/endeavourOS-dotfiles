#!/bin/bash

CARD="alsa_card.pci-0000_07_00.6"

# Get the current active profile (ignoring 'off')
PROFILE=$(pactl list cards | grep "Active Profile" | tail -n1 | awk -F": " '{print $2}')

if [[ "$PROFILE" == "HiFi (Mic1, Mic2, Speaker)" ]]; then
    # Switch to Headphones
    pactl set-card-profile $CARD "HiFi (Headphones, Mic1, Mic2)"

    # Activate headphone sink and move streams
    SINK=$(pactl list short sinks | grep Headphones | awk '{print $2}')
    pactl set-default-sink "$SINK"
    for stream in $(pactl list short sink-inputs | awk '{print $1}'); do
        pactl move-sink-input $stream "$SINK"
    done

    echo "Switched to Headphones"

else
    # Switch to Speakers
    pactl set-card-profile $CARD "HiFi (Mic1, Mic2, Speaker)"

    # Activate speaker sink and move streams
    SINK=$(pactl list short sinks | grep Speaker | awk '{print $2}')
    pactl set-default-sink "$SINK"
    for stream in $(pactl list short sink-inputs | awk '{print $1}'); do
        pactl move-sink-input $stream "$SINK"
    done

    echo "Switched to Speakers"
fi
