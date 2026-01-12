#!/bin/bash

CARD="alsa_card.pci-0000_07_00.6"

while true; do
    # Check headphone jack via ALSA
    HEADPHONE_JACK=$(cat /proc/asound/card1/codec#* | grep -i "HP Out" | grep -c "Plugged")

    if [ "$HEADPHONE_JACK" -ge 1 ]; then
        # Headphones plugged in
        pactl set-card-profile "$CARD" "HiFi (Headphones, Mic1, Mic2)"
    else
        # Headphones unplugged
        pactl set-card-profile "$CARD" "HiFi (Mic1, Mic2, Speaker)"
    fi

    sleep 1
done
