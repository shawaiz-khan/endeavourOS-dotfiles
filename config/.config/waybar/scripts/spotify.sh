#!/bin/bash

# Exit if Spotify not running
playerctl -p spotify status >/dev/null 2>&1 || exit 0

# Get metadata
status=$(playerctl -p spotify status)
artist=$(playerctl -p spotify metadata artist)
title=$(playerctl -p spotify metadata title)

# Exit if nothing to show
[ -z "$artist" ] && [ -z "$title" ] && exit 0

# Combine title and artist
text="${title} - ${artist}"

# Use jq to safely generate JSON
jq -n \
  --arg text "$text" \
  --arg class "$status" \
  --arg alt "$status" \
  '{text: $text, class: $class, alt: $alt}' \
  | tr -d '\n'