#!/bin/bash

# Exit if Spotify is not running
playerctl -p spotify status >/dev/null 2>&1 || exit 0

# Get metadata
status=$(playerctl -p spotify status)
artist=$(playerctl -p spotify metadata artist)
title=$(playerctl -p spotify metadata title)

# Exit if nothing to show
[ -z "$artist" ] && [ -z "$title" ] && exit 0

# Combine title and artist
text="${title} - ${artist}"

# Escape JSON safely using Python
json_escape() {
    python3 -c "import json,sys; print(json.dumps(sys.stdin.read()), end='')" <<<"$1"
}

text=$(json_escape "$text")
status=$(json_escape "$status")

# Print JSON in a single line for Waybar
printf '{"text":%s,"class":%s,"alt":%s}' "$text" "$status" "$status"