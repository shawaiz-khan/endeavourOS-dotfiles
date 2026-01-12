#!/bin/bash

# If Spotify is not running, say nothing
playerctl -p spotify status >/dev/null 2>&1 || exit 0

status=$(playerctl -p spotify status)
artist=$(playerctl -p spotify metadata artist)
title=$(playerctl -p spotify metadata title)

# Nothing meaningful, nothing to say
[ -z "$artist" ] && [ -z "$title" ] && exit 0

case "$status" in
  Playing) icon="" ;;
  Paused)  icon="󰏥" ;;
  *) exit 0 ;;
esac

printf '{"text":"%s %s - %s","alt":"spotify","class":"%s"}\n' \"$icon"  "$artist" "$title" "$status"