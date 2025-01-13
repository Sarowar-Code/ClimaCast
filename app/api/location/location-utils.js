const data = [
    {
        location: "Niagara Falls",
        latitude: 43.0962,
        longitude: -79.0377,
    },
    {
        location: "Burj Khalifa",
        latitude: 25.1972,
        longitude: 55.2744,
    },
    {
        location: "Machu Picchu",
        latitude: -13.1631,
        longitude: -72.545,
    },
    {
        location: "Eiffel Tower",
        latitude: 48.8584,
        longitude: 2.2945,
    },
    {
        location: "Great Wall of China",
        latitude: 40.4319,
        longitude: 116.5704,
    },
    {
        location: "Sydney Opera House",
        latitude: -33.8568,
        longitude: 151.2153,
    },
    {
        location: "Mount Everest",
        latitude: 27.9881,
        longitude: 86.925,
    },
    {
        location: "Statue of Liberty",
        latitude: 40.6892,
        longitude: -74.0445,
    },
    {
        location: "Colosseum",
        latitude: 41.8902,
        longitude: 12.4922,
    },
    {
        location: "Taj Mahal",
        latitude: 27.1751,
        longitude: 78.0421,
    },
];

function getLocations() {
    return data;
}

function getLocationByName(location) {
    if (!location) return null;

    const found = data.find(
        (loc) => loc.location.toLowerCase() === location.toLowerCase()
    );

    return found || {}; //ensure that its not returning undefined
}

export { getLocationByName, getLocations };
