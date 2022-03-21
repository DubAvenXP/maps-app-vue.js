import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { StateInterface } from '@/store/index';


export const usePlacesStore = () => {
    
    const store = useStore<StateInterface>();

    onMounted(() => {
        if (!store.getters['places/isUserLocationReady']) {
            store.dispatch('places/getInitialLocation');
        }
    })

    return {
        isLoading: computed(() => store.state.places.isLoading),
        userLocation: computed(() => store.state.places.userLocation),
        isUserLocationReady: computed(() => store.getters['places/isUserLocationReady']),
    };
};