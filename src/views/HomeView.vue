<template>
    <map-view></map-view>
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
    },
    setup() {
        usePlacesStore();
        return {};
    },
});
</script>
