import type { InjectionKey } from 'vue';
import type { FormProvide } from '../form/types';

export const BORDER = 'van-hairline';
export const BORDER_TOP = `${BORDER}--top`;
export const BORDER_LEFT = `${BORDER}--left`;
export const BORDER_RIGHT = `${BORDER}--right`;
export const BORDER_BOTTOM = `${BORDER}--bottom`;
export const BORDER_SURROUND = `${BORDER}--surround`;
export const BORDER_TOP_BOTTOM = `${BORDER}--top-bottom`;
export const BORDER_UNSET_TOP_BOTTOM = `${BORDER}-unset--top-bottom`;

export const HAPTICS_FEEDBACK = 'van-haptics-feedback';

export const FORM_KEY: InjectionKey<FormProvide> = Symbol('van-form');

// Same as the default value of iOS long press time
// https://developer.apple.com/documentation/uikit/uilongpressgesturerecognizer/1616423-minimumpressduration
export const LONG_PRESS_START_TIME = 500;
export const TAP_OFFSET = 5;
