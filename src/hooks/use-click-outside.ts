import { Ref } from 'vue';
import { useGlobalEvent } from './use-global-event';

export type UseClickOutsideOpitons = {
  event: string;
  callback: EventListener;
  element: Ref<Element>;
  flag?: Ref<boolean>;
};

export function useClickOutside(options: UseClickOutsideOpitons) {
  const { event = 'click', callback, element, flag } = options;

  function onClick(event: Event) {
    if (!element.value.contains(event.target as Node)) {
      callback(event);
    }
  }

  useGlobalEvent(document, event, onClick, false, flag);
}
