#!/bin/bash
# Enable Auto-Mute and unmute headphones
amixer -c 1 set 'Auto-Mute Mode' 'Enabled'
amixer -c 1 set Headphone unmute
amixer -c 1 set Headphone 87
amixer -c 1 set Speaker mute