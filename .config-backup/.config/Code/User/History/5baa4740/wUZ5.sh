#!/bin/bash

playerctl -p spotify status >/dev/null 2>&1 || exit 0

status=$(playerctl -p spotify status)
artist=$(playerctl -p spotify metadata artist)
title=$(playerctl -p spotify metadata title)

[ -z "$artist" ] && [ -z "$title" ] && exit 0

printf '{"text":"%s - %s","class":"%s","alt":"%s"}\n' \
  "$title" "$artist" "$status" "$status"