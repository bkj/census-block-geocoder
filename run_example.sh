#!/bin/bash

./shp2geojson.sh data/cb_2014_36_bg_500k/cb_2014_36_bg_500k.shp
#python sample_query_points.py # Already run for example
node points2block.js
 
