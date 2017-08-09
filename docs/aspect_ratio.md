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


## 
