<template>
    
    <map-view></map-view>
    <search-bar></search-bar>
    <my-location-btn></my-location-btn>
    <trip-details></trip-details>
</template>

<script lang="ts">
import { usePlacesStore } from "@/composables";
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
    name: "HomeView",
    components: {
        MapView: defineAsyncComponent(
            () => import("@/components/mapview/MapView.vue")
        ),
        MyLocationBtn: defineAsyncComponent(
            () => import("@/components/my-location-btn/MyLocationBtn.vue")
        ),
        SearchBar: defineAsyncComponent(
            () => import("@/components/search-bar/SearchBar.vue")
        ),
        TripDetails: defineAsyncComponent(
            () => import("@/components/trip-details/TripDetails.vue")
        ),
    },
    setup() {
        usePlacesStore();
        return {};
    },
});
</script>
