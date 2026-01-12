#!/bin/bash

# Exit if Spotify not running
playerctl -p spotify status >/dev/null 2>&1 || exit 0

# Get metadata
status=$(playerctl -p spotify status)
artist=$(playerctl -p spotify metadata artist)
title=$(playerctl -p spotify metadata title)

# Exit if nothing to show
[ -z "$artist" ] && [ -z "$title" ] && exit 0

# Escape quotes, backslashes, newlines for JSON
escape_json() {
    printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g; s/$/\\n/' | tr -d '\n'
}

text="$(escape_json "$title") - $(escape_json "$artist")"

# Output JSON for Waybar: class unquoted, no newline
printf '{"text":"%s","class":%s,"alt":"%s"}' "$text" "$status" "$status"
