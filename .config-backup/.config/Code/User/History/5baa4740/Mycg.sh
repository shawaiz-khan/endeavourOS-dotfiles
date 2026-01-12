#!/bin/bash

playerctl -p spotify status >/dev/null 2>&1 || exit 0

status=$(playerctl -p spotify status)
artist=$(playerctl -p spotify metadata artist)
title=$(playerctl -p spotify metadata title)

[ -z "$artist" ] && [ -z "$title" ] && exit 0

# Combine title and artist
text="${title} - ${artist}"

# Escape JSON safely for Waybar
json_escape() {
  python3 -c "import json,sys; print(json.dumps(sys.stdin.read()), end='')" <<<"$1"
}

text=$(json_escape "$text")
status=$(json_escape "$status")

# Print single-line JSON (no trailing newline)
printf '{"text":%s,"class":%s,"alt":%s}' "$text" "$status" "$status"
