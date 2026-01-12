#!/bin/bash

CARD="alsa_card.pci-0000_07_00.6"

while true; do
    HEADPHONE_JACK=$(cat /proc/asound/card1/codec#* | grep -i "HP Out" | grep -c "Plugged")

    if [ "$HEADPHONE_JACK" -ge 1 ]; then
        echo "Headphones plugged in — switching profile"
        pactl set-card-profile "$CARD" "HiFi (Headphones, Mic1, Mic2)"
    else
        echo "Headphones unplugged — switching to speaker"
        pactl set-card-profile "$CARD" "HiFi (Mic1, Mic2, Speaker)"
    fi

    sleep 1
done
