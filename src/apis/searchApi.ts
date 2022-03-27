import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZHViYXZlbnhwIiwiYSI6ImNsMHpvMTFqZTA5YXYzYm10ZDE1YnE3NXIifQ.YS3rWwCcJ8ED3IFCaWCifw',
        country: 'gt'
    }
});

export default searchApi;