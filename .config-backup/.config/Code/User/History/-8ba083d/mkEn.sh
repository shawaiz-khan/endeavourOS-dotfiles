#!/usr/bin/env bash

if swaync-client -D | grep -q true; then
  echo "󰂛"
else
  echo "1"
fi