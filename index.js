mapboxgl.accessToken = 'pk.eyJ1IjoiYmlyYXRzayIsImEiOiJjanFyeXBrMDIwczZpNDJsdWtnZDM0cXRjIn0.r6QA7nJ2sMOf65fXY26rag';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/biratsk/cjqtcghvt10tw2sqw4a5273jy',
    center: [85.32299,27.69755],
    zoom: 11.6
});

map.on('load', function () {
    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3459986, 27.7280115]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Gongabu Chowk</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3147282, 27.7351393 ]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area</strong>",
                        "icon": "parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.2894756, 27.7155613]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3010574, 27.7144168 ]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3212726, 27.7195393]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Xavier International College Parking</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3373615, 27.7140065]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Deerwalk Services Parking Area</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3426876, 27.7117833]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.35048, 27.7065175]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [ 85.3134004, 27.7140154]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Garden Of Dreams Parking</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3153074, 27.7140653]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.2897599, 27.7059917]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area Ason</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3126433, 27.7077164]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>BKT Bus Stop</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3224696, 27.7068925]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3231864, 27.704962]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3233373, 27.7044675]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3234204, 27.7031768]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.324495, 27.7020882]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Ranjana Parking</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3105236, 27.7041478]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Nepal Complex Parking</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3107921, 27.7040976]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3121087, 27.7024043]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>KFA Parking</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3378537, 27.6957864]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [ 85.3356988, 27.6892446]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Patan Square</strong>",
                        "icon": "parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3159193, 27.6821287]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Parking Area</strong>",
                        "icon":"parking"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3461118, 27.6768799]
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });

     // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });
});

  map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
}));

  map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken
}), 'top-left');

var stores={
"type": "FeatureCollection",
"generator": "overpass-ide",
"copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
"timestamp": "2018-11-13T09:17:02Z",
};





