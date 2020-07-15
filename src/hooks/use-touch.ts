import { ref } from 'vue';

const MIN_DISTANCE = 10;

function getDirection(x: number, y: number) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

export function useTouch() {
  const startX = ref(0);
  const startY = ref(0);
  const deltaX = ref(0);
  const deltaY = ref(0);
  const offsetX = ref(0);
  const offsetY = ref(0);
  const direction = ref('');

  function reset() {
    direction.value = '';
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
  }

  function start(event: TouchEvent) {
    reset();
    startX.value = event.touches[0].clientX;
    startY.value = event.touches[0].clientY;
  }

  function move(event: TouchEvent) {
    const touch = event.touches[0];
    deltaX.value = touch.clientX - startX.value;
    deltaY.value = touch.clientY - startY.value;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);

    if (!direction.value) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }
  }

  return {
    move,
    start,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction
  };
}
