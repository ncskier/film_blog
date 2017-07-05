#!/bin/bash
# Creates a new post

# Get Name
name=$1

# Get Date
date=`date +%Y-%m-%d`

# Create Filename
filename=_posts/$date-$name.md

# Create Post File
touch $filename

# Add Front Matter to Post
echo "---"                                    >> $filename
echo "layout: post"                           >> $filename
echo "title: \"\""                            >> $filename
echo "author: \"\""                           >> $filename
echo "tags: # [thoughts/trailers/wows]"       >> $filename
echo "  - "                                   >> $filename
echo                                          >> $filename
echo "# (required) [image] preview type"      >> $filename
echo "# imageSrc: \"\""                       >> $filename
echo "# imageAlt: \"\""                       >> $filename
echo "# (optional)"                           >> $filename
echo "# previewAlign:  # [bottom/middle/top]" >> $filename
echo                                          >> $filename
echo "# (required) [trailer] preview type"    >> $filename
echo "# youtubeId: \"\""                      >> $filename
echo "---"                                    >> $filename
