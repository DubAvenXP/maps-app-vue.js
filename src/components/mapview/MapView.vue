<script lang="ts" src="./MapView" />

<template>
    <div
        v-if="!isUserLocationReady"
        class="loading-map d-flex justify-content-center align-items-center"
    >
        <div class="text-center">
            <h3>Espere por favor</h3>
            <span>Localizando...</span>
        </div>
    </div>
    <div v-show="isUserLocationReady" ref="mapElement" class="map-container"></div>
</template>

<style scoped>
.loading-map {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 99999;
}
.map-container {
    position: fixed;
    height: 100vh;
    width: 100vw;
}
</style>
