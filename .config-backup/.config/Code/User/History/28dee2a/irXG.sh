#!/bin/bash
# checkupdates.sh test version

# number_of_updates=$(checkupdates | wc -l)
# number_of_updates=5

icon=""
printf '{"text":"%s  %s","alt":"updates","class":"updates"}\n' "$icon" "$number_of_updates"