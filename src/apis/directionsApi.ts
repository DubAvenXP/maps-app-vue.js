import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZHViYXZlbnhwIiwiYSI6ImNsMHpvMTFqZTA5YXYzYm10ZDE1YnE3NXIifQ.YS3rWwCcJ8ED3IFCaWCifw',
    }
});

export default directionsApi;