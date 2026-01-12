#!/bin/bash

LOW=20
CRITICAL=10
BATTERY=$(upower -e | grep BAT)

upower --monitor-detail | while read -r line; do
  if [[ "$line" == *"percentage"* || "$line" == *"state"* ]]; then
    PERCENT=$(upower -i "$BATTERY" | awk '/percentage/ {print int($2)}')
    STATE=$(upower -i "$BATTERY" | awk '/state/ {print $2}')

    if [[ "$STATE" == "discharging" ]]; then
      if [[ "$PERCENT" -le "$CRITICAL" ]]; then
        notify-send -u critical "Battery Critical" "$PERCENT% remaining"
      elif [[ "$PERCENT" -le "$LOW" ]]; then
        notify-send -u normal "Battery Low" "$PERCENT% remaining"
      fi
    fi
  fi
done
