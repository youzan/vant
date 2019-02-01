export function useSlots({ $slots, $scopedSlots }) {
  return (name, props) => {
    if ($scopedSlots[name]) {
      return $scopedSlots[name](props);
    }
    return $slots[name];
  };
}
