#!/bin/bash
CARD="alsa_card.pci-0000_07_00.6"
PROFILE=$(pactl list cards | grep "Active Profile" | awk -F": " '{print $2}')

if [[ "$PROFILE" == "HiFi (Mic1, Mic2, Speaker)" ]]; then
    pactl set-card-profile $CARD "HiFi (Headphones, Mic1, Mic2)"
    echo "Switched to Headphones"
else
    pactl set-card-profile $CARD "HiFi (Mic1, Mic2, Speaker)"
    echo "Switched to Speakers"
fi
