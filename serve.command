#!/bin/sh

here="`dirname \"$0\"`"
echo "cd-ing to $here"
cd "$here" || exit 1

open http://localhost:4001

rvm use 2.2.5
bundler install
jekyll serve --baseurl "" --port 4001
