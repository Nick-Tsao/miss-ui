## Built-in Style
Miss contains some common styles that can be used directly by the className.

### Text ellipsis
When the text content length exceeds the maximum container width, the excess text is automatically omitted.

```html
<div class="ms-ellipsis">
  This is a paragraph of 250px width limit, the back will be omitted.
</div>
```

### Hairline
Add 1px border under the Retina screen for the element, based on a pseudo element.

```html
<!-- border top -->
<div class="ms-hairline--top"></div>

<!-- border bottom -->
<div class="ms-hairline--bottom"></div>

<!-- border left -->
<div class="ms-hairline--left"></div>

<!-- border right -->
<div class="ms-hairline--right"></div>

<!-- border top & bottom -->
<div class="ms-hairline--top-bottom"></div>

<!-- full border -->
<div class="ms-hairline--surround"></div>
```

### Animation

```html
<!-- fade in  -->
<transition name="ms-fade">
  <div v-show="visible">Fade</div>
</transition>

<!-- slide up -->
<transition name="ms-slide-up">
  <div v-show="visible">Slide Up</div>
</transition>

<!-- slide down -->
<transition name="ms-slide-down">
  <div v-show="visible">Slide Down</div>
</transition>

<!-- slide left -->
<transition name="ms-slide-left">
  <div v-show="visible">Slide Left</div>
</transition>

<!-- slide right -->
<transition name="ms-slide-right">
  <div v-show="visible">Slide Right</div>
</transition>
```
