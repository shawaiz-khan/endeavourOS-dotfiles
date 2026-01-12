#!/bin/bash

number_of_updates=$(checkupdates | wc -l)

# If no updates, exit quietly
[ "$number_of_updates" -eq 0 ] && exit 0

printf '{"text":"%s updates","alt":"updates","class":"updates"}\n' "$number_of_updates"
