#!/bin/bash

# number_of_updates=$(checkupdates | wc -l)
number_of_updates=5

# If no updates, exit quietly
[ "$number_of_updates" -eq 0 ] && exit 0

printf '{"text":"%s %s updates","alt":"updates","class":"updates"}\n' \ "$icon" "$number_of_updates"