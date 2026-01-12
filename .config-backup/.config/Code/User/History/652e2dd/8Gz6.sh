#!/bin/sh
# Battery alert script using upower for Hyprland/Wayland

# Thresholds
WARNING_LEVEL=20
CRITICAL_LEVEL=5

# Get the battery path (assumes a single battery)
BATTERY=$(upower -e | grep 'battery')

# Get battery percentage
BATTERY_LEVEL=$(upower -i "$BATTERY" | awk '/percentage:/ {gsub("%",""); print int($2)}')
# Get battery state: charging/discharging/fully-charged
BATTERY_STATE=$(upower -i "$BATTERY" | awk '/state:/ {print $2}')

# Notifications
if [ "$BATTERY_LEVEL" -ge 100 ] && [ "$BATTERY_STATE" = "fully-charged" ]; then
    notify-send "Battery Charged" "Battery is fully charged." -i "battery" -r 9991
elif [ "$BATTERY_LEVEL" -le $CRITICAL_LEVEL ] && [ "$BATTERY_STATE" = "discharging" ]; then
    notify-send "Battery Critical" "Battery is critical (${BATTERY_LEVEL}%). Plug in now!" -u critical -i "battery-alert" -r 9991
elif [ "$BATTERY_LEVEL" -le $WARNING_LEVEL ] && [ "$BATTERY_STATE" = "discharging" ]; then
    notify-send "Low Battery" "Battery is low (${BATTERY_LEVEL}%)." -u normal -i "battery-alert" -r 9991
fi