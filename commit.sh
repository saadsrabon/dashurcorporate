#!/bin/bash

# Check if a comment is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <comment>"
  exit 1
fi

# Add all changes to the staging area
git add .

# Commit changes with the provided comment
git commit -m "$(date '+%Y-%m-%d %H:%M:%S') - $1"

# Push changes to the remote repository
git push