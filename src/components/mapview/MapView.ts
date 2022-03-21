import { usePlacesStore } from "@/composables";
import Mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
    name: "MapView",
    setup() {
        const mapElement = ref<HTMLDivElement>();
        const { isUserLocationReady, userLocation } = usePlacesStore();

        const initMap = async () => {
            if (!mapElement.value) throw new Error("Map element not found");
            if (!userLocation.value) throw new Error("User location not found");

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: "mapbox://styles/mapbox/dark-v10", // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            });

            //Popup
            const popup = new Mapboxgl.Popup({
                offset: [0, -45],
            })
            .setLngLat(userLocation.value)
            .setHTML(`
                <h4>Estas aquí</h4>
                <p>San José Pinula</p>
                <p>${userLocation.value}</p>
            `)

            //Marker
            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(popup)
                .addTo(map);

            //Set to vuex

        };

        onMounted(() => {
            if (isUserLocationReady.value) return initMap();
        });

        watch( isUserLocationReady, () => {
            if (isUserLocationReady.value) initMap();
        })


        return {
            isUserLocationReady,
            mapElement,
        };
    },
});
