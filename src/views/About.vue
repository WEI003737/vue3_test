<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ msg }}</h1>
    <MousePosition></MousePosition>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import MousePosition from '@/views/components/MousePosition.vue';

export default {
  setup() {
    const store = useStore();
    const msg = computed(() => {
      return store.getters.msg
    });

    onMounted(() => {
      console.log(`before set token: ${store.getters['Auth/getToken']}`);
      store.dispatch('Auth/handleSetToken', 'aaaaaa');
      console.log(`after set token: ${store.getters['Auth/getToken']}`);
    });
    

    return {
      msg,
      MousePosition
    }
  },
}
</script>
