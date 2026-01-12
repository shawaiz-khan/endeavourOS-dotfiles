#!/usr/bin/env bash

if swaync-client -D | grep -q true; then
  echo "1"
else
  echo ""
fi