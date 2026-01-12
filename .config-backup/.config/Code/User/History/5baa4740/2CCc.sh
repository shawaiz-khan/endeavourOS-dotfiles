#!/bin/bash

playerctl -p spotify status >/dev/null 2>&1 || exit 0

status=$(playerctl -p spotify status)
artist=$(playerctl -p spotify metadata artist)
title=$(playerctl -p spotify metadata title)

[ -z "$artist" ] && [ -z "$title" ] && exit 0

# Escape JSON special characters
escape_json() {
  printf '%s' "$1" | python3 -c 'import json,sys; print(json.dumps(sys.stdin.read()))'
}

title=$(escape_json "$title")
artist=$(escape_json "$artist")
status=$(escape_json "$status")

printf '{"text":%s - %s,"class":%s,"alt":%s}\n' "$title" "$artist" "$status" "$status"