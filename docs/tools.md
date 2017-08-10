---
title: Tools
---

## Aspect Ratio

Use the aspect ratio mixin to control the ratio of width to height on a container and the media it contains, such as an image or a video element.

```
@mixin aspect-ratio($width, $height) {
  position: relative;
  &:before {
    display: block;
    content: "";
    width: 100%;
    @include calc(padding-top, "(#{$height} / #{$width}) * 100%");
  }
  > .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
```

Markup might look like this, with the mixin applied to the `.resource-block__image-wrap` in this case
```
<div class="resource-block__image-wrap">
  <img class="resource-block__image content" src="/assets/jobs/jobs--resources-tile__powerful-job-posting-3d49ad6b5a0ca8592123a38b2ce20d62fefacee86d924144b48ee03939cc33e3.jpg" alt="Jobs  resources tile  powerful job posting">
</div>
```

This is in use on the images on the resource carousel cards:

![Resource carousel cards]({{ path '/images__documentation/aspect-ratio.png' }})


## Z-Index Calculator

Returns a z-index for a given element-list

```
@function z($context-group-list, $context-group, $element-list, $element-item)
```

### Usage
Create the following lists in your project and pass in as arguments

  **`$context-group-list`**:
  A variable that contains a list of contexts (each a `$context-group` parameter, or groups of elements).

  For example, groups of elements within the `$context-group-list` are ordered from the lowest layer to the highest layer:

```
  $context-group-list: (
    page-level-context,
    fixed-navigation-context,
    popup-modal-context,
  );
```


  **`$element-list`**:
  A variable that corresponds to a `$context-group` from the `$context-group-list` and that contains a list of elements (`$element-item`) that are layered within that context.

  For example, elements within the `$element-list` are ordered from the lowest layer within the group to the highest layer within the group:

```
    $fixed-navigation-context: (
      navigation-bar,
      navigation-bar-dropdown,
    );

    $popup-modal-context: (
      popup-modal-background,
      popup-modal-popup,
    );
```

  The example elements above will have the following z-index values:
  ```
  z($context-group-list, fixed-navigation-context, $fixed-navigation-context, navigation-bar)
  ```
  navigation-bar = 2001

  ```
  z($context-group-list, fixed-navigation-context, $fixed-navigation-context, navigation-bar-dropdown)
  ```
  navigation-bar-dropdown = 2002

  ```
  z($context-group-list, popup-modal-context, $popup-modal-context, popup-modal-background)
  ```
  popup-modal-background = 3001

  ```
  z($context-group-list, popup-modal-context, $popup-modal-context, popup-modal-popup)
  ```
  popup-modal-popup = 3002
