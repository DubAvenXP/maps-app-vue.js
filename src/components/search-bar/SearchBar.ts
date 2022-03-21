import { usePlacesStore } from '@/composables';
import { defineAsyncComponent, defineComponent, ref, computed } from 'vue';

export default defineComponent({
    name: 'SearchBar',
    components: {
        SearchResults: defineAsyncComponent(() => import('./../search-results/SearchResults.vue'))
    },
    setup() {
        const debouncedValue = ref('');
        const debounceTimeout = ref();
        const { searchPlacesByTerm } = usePlacesStore();

        return {
            searchTerm: computed({
                get() {
                    return debouncedValue.value;
                },
                set(val: string) {
                    
                    if (debounceTimeout.value) clearTimeout(debounceTimeout.value);

                    debounceTimeout.value = setTimeout(() => {
                        searchPlacesByTerm(val);
                    }, 500)
                    

                }
            }),
        }
    }
})