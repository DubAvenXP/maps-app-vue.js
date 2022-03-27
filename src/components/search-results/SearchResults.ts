import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
    name: "SearchResults",
    setup() {
        const { places, isLoadingPlaces, userLocation } = usePlacesStore();
        const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore();

        const activePlace = ref("");

        watch(places, (newplaces) => {
            activePlace.value = "";
            setPlaceMarkers(newplaces);
        });

        return {
            places,
            isLoadingPlaces,
            activePlace,

            onPlaceClicked: (place: Feature) => {
                activePlace.value = place.id;
                const [lng, lat] = place.center;
                
                map.value?.flyTo({
                    zoom: 14,
                    center: [lng, lat],
                });
            },
            getRouteDirections: (place: Feature) => {
                
                const [lng, lat] = place.center;
                
                if (!userLocation.value) return; 
                
                const [startLng, startLat] = userLocation.value;
                const start: [number, number] = [startLng, startLat];
                const end: [number, number] = [lng, lat];

                getRouteBetweenPoints(start, end);
            }
        };
    },
});
