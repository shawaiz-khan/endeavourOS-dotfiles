#!/bin/bash

# Exit if Spotify not running
playerctl -p spotify status >/dev/null 2>&1 || exit 0

# Get metadata
status=$(playerctl -p spotify status)
artist=$(playerctl -p spotify metadata artist)
title=$(playerctl -p spotify metadata title)

# Exit if nothing to show
[ -z "$artist" ] && [ -z "$title" ] && exit 0

# Escape JSON special characters manually
escape_json() {
    local str="$1"
    str="${str//\\/\\\\}"   # escape backslashes
    str="${str//\"/\\\"}"   # escape quotes
    str="${str//$'\n'/\\n}" # escape newlines
    printf '%s' "$str"
}

text="$(escape_json "$title") - $(escape_json "$artist")"

# Print JSON for Waybar
# Class is unquoted so format-icons work
printf '{"text":"%s","class":%s,"alt":"%s"}' "$text" "$status" "$status"