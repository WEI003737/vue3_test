<template>
  <h1>x: {{ position.x }} y:{{ position.y }}</h1>
</template>

<script>
import { mousePosition } from '../../composition-api/index.js';
export default {
  setup() {
    const position = mousePosition();
    return {
      position
    }
  },
}
</script>
