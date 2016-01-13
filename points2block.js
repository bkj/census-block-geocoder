var turf  = require('turf');
var    u  = require('underscore');
var data  = require('./data/example-block-geojson.json');
var query = require('./data/example-queries.json');

function make_point(lng, lat) {
    return {
        "type"     : "Feature",
        "geometry" : {
        "type"     : "Point",
            "coordinates": [lng, lat]
        }        
    }
}

function intersect(point, features) {
    return u.filter(features, function(f) {
        return turf.inside(point, f)
    })    
}

for(i = 0; i < query.length; i++) {
    pt = make_point(Number(query[i][0]), Number(query[i][1]))
    console.log(JSON.stringify(intersect(pt, data['features'])))
}