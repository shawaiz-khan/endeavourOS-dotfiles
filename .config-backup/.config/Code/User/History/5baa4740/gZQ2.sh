#!/bin/bash

# Exit immediately if Spotify is not running
playerctl -p spotify status >/dev/null 2>&1 || exit 0

status=$(playerctl -p spotify status)
artist=$(playerctl -p spotify metadata artist)
title=$(playerctl -p spotify metadata title)

case "$status" in
  Playing) icon="" ;;
  Paused)  icon="󰏥" ;;
  *) exit 0 ;;
esac

echo "{\"text\":\"$icon $artist - $title\",\"alt\":\"spotify\",\"class\":\"$status\"}"