#!/bin/bash

number_of_updates=$(checkupdates | wc -l)

# If no updates, exit quietly
[ "$number_of_updates" -eq 0 ] && exit 0

icon=""

printf '{"text":"%s %s updates","alt":"updates","class":"updates"}\n' \ "$icon" "$number_of_updates"