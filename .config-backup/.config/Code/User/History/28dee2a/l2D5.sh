#!/bin/bash

number_of_updates=$(checkupdates | wc -l)

echo "$number_of_updates"