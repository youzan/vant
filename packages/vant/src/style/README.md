# Built-in Style

### Intro

Vant contains some common styles that can be used directly by the className.

### Text ellipsis

When the text content length exceeds the maximum container width, the excess text is automatically omitted.

```html
<div class="van-ellipsis">
  This is a paragraph that displays up to one line of text, and the rest of the
  text will be omitted.
</div>

<div class="van-multi-ellipsis--l2">
  This is a paragraph that displays up to two lines of text, and the rest of the
  text will be omitted.
</div>

<div class="van-multi-ellipsis--l3">
  This is a paragraph that displays up to three lines of text, and the rest of
  the text will be omitted.
</div>
```

### Hairline

Add 1px border under the Retina screen for the element, based on a pseudo element.

```html
<!-- border top -->
<div class="van-hairline--top"></div>

<!-- border bottom -->
<div class="van-hairline--bottom"></div>

<!-- border left -->
<div class="van-hairline--left"></div>

<!-- border right -->
<div class="van-hairline--right"></div>

<!-- border top & bottom -->
<div class="van-hairline--top-bottom"></div>

<!-- full border -->
<div class="van-hairline--surround"></div>
```

### Safe Area

Enable safe area.

```html
<!-- top -->
<div class="van-safe-area-top"></div>

<!-- bottom -->
<div class="van-safe-area-bottom"></div>
```

### Animation

```html
<!-- fade in  -->
<transition name="van-fade">
  <div v-show="visible">Fade</div>
</transition>

<!-- slide up -->
<transition name="van-slide-up">
  <div v-show="visible">Slide Up</div>
</transition>

<!-- slide down -->
<transition name="van-slide-down">
  <div v-show="visible">Slide Down</div>
</transition>

<!-- slide left -->
<transition name="van-slide-left">
  <div v-show="visible">Slide Left</div>
</transition>

<!-- slide right -->
<transition name="van-slide-right">
  <div v-show="visible">Slide Right</div>
</transition>
```

### Haptics Feedback

Add haptics feedback for an element. When touched, the opacity of the element is reduced.

Usually used in clickable elements such as button.

```html
<div class="van-haptics-feedback"></div>
```

### Clearfix

Clear floated content within a container.

```html
<div class="van-clearfix"></div>
```
