#!/bin/sh
# Battery alert script using upower
# Run via systemd user timer (~/.config/systemd/user/battery-alert.timer)

# Notification thresholds
WARNING_LEVEL=20
CRITICAL_LEVEL=5

# Notification temp files
FULL_FILE=/tmp/batteryfull
EMPTY_FILE=/tmp/batteryempty
CRITICAL_FILE=/tmp/batterycritical

# Get battery path (assumes a single battery, adjust if multiple)
BATTERY=$(upower -e | grep 'battery')

# Get battery percentage (rounded)
BATTERY_LEVEL=$(upower -i "$BATTERY" | awk '/percentage:/ {gsub("%",""); print int($2)}')
# Get state: charging/discharging/fully-charged
BATTERY_STATE=$(upower -i "$BATTERY" | awk '/state:/ {print $2}')

# Reset notifications if battery state changes
if [ "$BATTERY_STATE" = "discharging" ] && [ -f $FULL_FILE ]; then
    rm $FULL_FILE
elif [ "$BATTERY_STATE" != "discharging" ] && [ -f $EMPTY_FILE ]; then
    rm $EMPTY_FILE
fi

# Notifications
if [ "$BATTERY_LEVEL" -ge 100 ] && [ "$BATTERY_STATE" = "fully-charged" ] && [ ! -f $FULL_FILE ]; then
    notify-send "Battery Charged" "Battery is fully charged." -i "battery" -r 9991
    touch $FULL_FILE
elif [ "$BATTERY_LEVEL" -le $WARNING_LEVEL ] && [ "$BATTERY_STATE" = "discharging" ] && [ ! -f $EMPTY_FILE ]; then
    notify-send "Low Battery" "${BATTERY_LEVEL}% of battery remaining." -u critical -i "battery-alert" -r 9991
    touch $EMPTY_FILE
elif [ "$BATTERY_LEVEL" -le $CRITICAL_LEVEL ] && [ "$BATTERY_STATE" = "discharging" ] && [ ! -f $CRITICAL_FILE ]; then
    notify-send "Battery Critical" "The computer will shutdown soon." -u critical -i "battery-alert" -r 9991
    touch $CRITICAL_FILE
fi