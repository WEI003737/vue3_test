import { reactive, onMounted, onUnmounted } from 'vue';

export function mousePosition () {
  const position = reactive({ 
    x: 0,
    y: 0
  });

  const getPosition = (e) => {
    position.x = e.pageX;
    position.y = e.pageY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', getPosition);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', getPosition);
  });

  return position;
}