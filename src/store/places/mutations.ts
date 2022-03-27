import { Feature } from "@/interfaces/places";
import { MutationTree } from "vuex";
import { PlacesState } from "./state";

const mutation: MutationTree<PlacesState> = {
    setLngLat(state: PlacesState, { lng, lat }: { lng: number; lat: number }) {
        state.userLocation = [lng, lat];
    },
    setIsLoadingPlaces(state: PlacesState) {
        state.isLoadingPlaces = true;
    },
    setPlaces(state: PlacesState, places: Feature[]) {
        state.places = places;
        state.isLoadingPlaces = false;
    },
};

export default mutation;
