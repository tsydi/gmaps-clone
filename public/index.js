mapboxgl.accessToken = 'pk.eyJ1IjoidHN5ZHlraCIsImEiOiJja3FtZXJkOWMwOGZmMnZxYnhwOHp5dHg4In0.F0ZBw-i5wf8RqOKqJecrQQ'
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});

function successLocation() {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 10
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessTokenN
    });

    map.addControl(directions, 'top-left');
}

