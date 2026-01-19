# Server-Side Rendering (SSR) Compatibility

### Intro

Some components rely on DOM operations or browser APIs, which leads to compatibility issues in SSR scenarios, causing components to function incorrectly.

### Components

#### Tab

The Tab component does not render in SSR scenarios. See [Tab title cannot be SSR](https://github.com/youzan/vant/issues/5278).
