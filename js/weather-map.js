"use strict";

mapboxgl.accessToken = MAPBOX_API_TOKEN;
var map = new mapboxgl.Map({
    container: "geoMap", // container ID
    style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y', // style URL
    center: [-98.489615, 29.426827], // starting position
    zoom: 9, // starting zoom
    pitch: 85,
    bearing: 80,
});

//convert API data/time response to JS Date Object
// new date (second ^ 1000)

$.get('https://api.openweathermap.org/data/2.5/onecall', {
    appid: Weather_App_ID,
    lat: 29.4252,
    lon: -98.4916,
    units: 'imperial',
    exclude: 'minutely,hourly',
}).done(function weatherData(data) {
    console.log(data);

    for (var i = 0; i < data.daily.length - 3; i++) {
        var weekDay = new Date(data.daily[i].dt * 1000);
        var theFirstCardData = "<ul>" + "<h3>" + (new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(weekDay)) + "</h3>"; //curtesy of Albert//
        theFirstCardData += "<div>" + '<img src="http://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '@2x.png"/>' + '</div>'
        theFirstCardData += "<div>" + data.daily[i].temp.max + "°F" + "/" + data.daily[i].temp.min + "°F " + "</div>";
        theFirstCardData += "<li>" + "Description: " + " " + data.daily[i].weather[0].description + "</li>";
        theFirstCardData += "<li>" + "Humidity: " + data.daily[i].humidity + "</li>";
        theFirstCardData += "<li>" + "Wind: " + data.daily[i].wind_speed + "</li>";
        theFirstCardData += "<li>" + "Pressure: " + data.daily[i].pressure + "</li>" + "</ul>";
        console.log(theFirstCardData)
        $('.card').append(theFirstCardData)
    };

}).fail(function (error) {
    console.log(error);
});


// Add the control to the map.
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);


const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.489615, 29.426827])
    .addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br/>Latitude: ${lngLat.lat}`;
}

marker.on('dragend', onDragEnd);



//////////


map.on('load', () => {
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });
// add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

// add a sky layer that will show when the map is highly pitched
    map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 15
        }
    });
});


map.on('load', () => {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>San Antonio River Walk</strong>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-98.48792286156943, 29.4234345261592]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Nice Ocean Waves</strong><link href=https://www.youtube.com/watch?v=V-_O7nl0Ii0>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-2.6329059652983346, 53.45002466235414]
                    }
                },

            ]
        }
    });
// Add a layer showing the places.
    map.addLayer({
        'id': 'places',
        'type': 'circle',
        'source': 'places',
        'paint': {
            'circle-color': '#4264fb',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });

// Create a popup, but don't add it to the map yet.
    const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'places', (e) => {
// Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

// Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

// Populate the popup and set its coordinates
// based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });

    map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
});

map.on('load', () => {
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

    map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            'sky-opacity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                0,
                5,
                0.3,
                8,
                1
            ],
// set up the sky layer for atmospheric scattering
            'sky-type': 'atmosphere',
// explicitly set the position of the sun rather than allowing the sun to be attached to the main light source
            'sky-atmosphere-sun': getSunPosition(),
// set the intensity of the sun as a light source (0-100 with higher values corresponding to brighter skies)
            'sky-atmosphere-sun-intensity': 5
        }
    });
});

// update the `sky-atmosphere-sun` paint property with the position of the sun based on the selected time
// the position of the sun is calculated using the SunCalc library
function updateSunPosition(sunPos) {
    map.setPaintProperty('sky', 'sky-atmosphere-sun', sunPos);
}

// Get list of SunCalc's default sun positions
// for the current time and location
const sunPositions = SunCalc.getTimes(
    Date.now(),
    map.getCenter().lat,
    map.getCenter().lng
);
// set up event listeners for the buttons to update
// the position of the sun for times of the day
const sunTimeLabels = document.querySelectorAll(
    '#inputs input',
    '#getlocal'
);
for (const label of sunTimeLabels) {
    label.addEventListener('click', () => {
        const sunPos =
            label.id === 'getlocal'
                ? getSunPosition(new Date())
                : getSunPosition(sunPositions[label.id]);
        updateSunPosition(sunPos);
    });
}

function getSunPosition(date) {
    const center = map.getCenter();
    const sunPos = SunCalc.getPosition(
        date || Date.now(),
        center.lat,
        center.lng
    );
    const sunAzimuth = 180 + (sunPos.azimuth * 180) / Math.PI;
    const sunAltitude = 90 - (sunPos.altitude * 180) / Math.PI;
    return [sunAzimuth, sunAltitude];
}
