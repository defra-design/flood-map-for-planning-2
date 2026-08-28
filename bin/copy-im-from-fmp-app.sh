#!/bin/bash
# Copies the built map from fmp-app to the prototype
# This will only work if you have 1st checked out fmp-app
# and have run npm run build-map-only
# in the fmp-app folder
rm -r .tmp/public/javascripts/interactive-map
cp -r ../fmp-app/server/public/build-map/ .tmp/public/javascripts/interactive-map/
git add -f .tmp/public/javascripts/interactive-map
git status