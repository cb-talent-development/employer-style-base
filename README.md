# employer-style-base

A stack-agnostic Sass library providing basic components and typography intended for the Employer experience.

View code and component examples in the [pattern library](http://cb-talent-development.github.io/employer-style-base/).

**Status:** Basic styling completed:
* Buttons (small, medium, large + primary, secondary)
* Horizontal/vertical button groups
* Forms
* Text inputs
* Panels
* Flashes

### Consumption

Install with Bower (from an appropriate repository)

```sh
$ bower install employer-style-base
```

Now, import `sass/base` after [Bourbon](http://bourbon.io/), and before any grids or application sources in your main `application.scss`. For example:

```scss
@import 'bower_components/bourbon/app/assets/stylesheets/bourbon';
@import 'bower_components/employer-style-base/sass/base';
@import 'some-grid-foundation';
@import 'my-app';
```

You may now apply the styling to your application. Note that all styling is scoped with the `employer-scope` class. We would have preferred leaving scoping up to the consuming application, but certain inflexibilites with Sass and some peculiar things this library is doing currently forbid this.

### Using a Grid Framework

You may use any grid framework of your choosing. We have, however, built a [Neat](http://neat.bourbon.io/)-based grid library intended for use with [Employer](https://github.com/cbdr/employer). You can read integration instructions at [employer-style-grid](https://github.com/cb-talent-development/employer-style-grid).

### What's included

At the moment, only uncompiled Sass source files are available for consumption. That means your application will need to perform the precompilation, whether it be through Gulp, Grunt, Rails asset pipeline, etc. Do note that `employer-style-base` depends upon, and includes [Bourbon](http://bourbon.io/) for basic Sass mixins. Additionally, this library includes its own reset, scoped to `employer-scope`.

The current layout of this library is heavily inspired by [Bitters](http://bitters.bourbon.io/), a wonderful boilerplate of common-sense Sass conventions and structure. Our outline looks a little something like this:

```
dist/
├── ... >> Not yet used
sass/ >> The bulk of the styling itself
├── directives/ >> Mixins and @extend-only selectors, AKA useful functions to build a site with
└── variables/ >> Re-usable color and sizing variables
```

### Contributing

#### Adding Directives

After adding a new directive to [`sass/directives/`](sass/directives/), `@import` it into the [`variables/_base.scss`](sass/_base.scss)

#### Updating the Version

After your PR is merged, add a [release](https://github.com/cb-talent-development/employer-style-base/releases) and update the [semantic version number appropriately](http://semver.org/).

Then update the `bower.json` file in your repo with the new number.

```
"employer-style-base": "=1.0.0"
```

### Future

- Implement build process to compile CSS into `dist` for easy consumption
- Remove `bourbon` dependency
