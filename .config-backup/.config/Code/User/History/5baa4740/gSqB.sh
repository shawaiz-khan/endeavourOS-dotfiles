#!/bin/bash

playerctl -p spotify status >/dev/null 2>&1 || exit 0

status=$(playerctl -p spotify status)
artist=$(playerctl -p spotify metadata artist)
title=$(playerctl -p spotify metadata title)

[ -z "$artist" ] && [ -z "$title" ] && exit 0

# Escape JSON properly using python3
json_escape() {
  python3 -c "import json,sys; print(json.dumps(sys.stdin.read()))" <<<"$1"
}

title=$(json_escape "$title")
artist=$(json_escape "$artist")
status=$(json_escape "$status")

# Print JSON
echo "{\"text\":${title} - ${artist},\"class\":${status},\"alt\":${status}}"