import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiZHViYXZlbnhwIiwiYSI6ImNsMHpvMTFqZTA5YXYzYm10ZDE1YnE3NXIifQ.YS3rWwCcJ8ED3IFCaWCifw';

if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    throw new Error("Geolocation is not supported by your browser");
}

createApp(App).use(store).use(router).mount("#app");
