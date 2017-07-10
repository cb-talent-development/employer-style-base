# employer-style-base

A stack-agnostic Sass library providing basic components and typography intended for the Employer experience.

View code and component examples in the [pattern library](http://cb-talent-development.github.io/employer-style-base/).

### Consumption

Add and install with Yarn:

```sh
$ yarn add employer-style-base
```

Now, import `sass/base` after any resets, [Bourbon](http://bourbon.io/) and [FontAwesome](http://fontawesome.io/), and before any grids and application sources in your main `application.scss`. For example:

```scss
@import 'reset';
@import 'bourbon/app/assets/stylesheets/bourbon';
@import 'font-awesome';
@import 'employer-style-base/sass/base';
@import 'some-grid-foundation';

@import 'your-app';
```

You may now apply the styling to your application. Note that all styling is scoped with the `employer-scope` class. We would have preferred leaving scoping up to the consuming application, but certain inflexibilites with Sass and some peculiar things this library is doing currently forbid this.

### Using a Grid Framework

You may use any grid framework of your choosing. We have, however, built a [Neat](http://neat.bourbon.io/)-based grid library intended for use with [Employer](https://github.com/cbdr/employer). You can read integration instructions at [employer-style-grid](https://github.com/cb-talent-development/employer-style-grid).

### What's included

At the moment, only uncompiled Sass source files are available for consumption. That means your application will need to perform the precompilation, whether it be through Webpack, Gulp, Grunt, Rails asset pipeline, etc. Do note that `employer-style-base` depends upon and includes [Bourbon](http://bourbon.io/) for basic Sass mixins.

The current layout of this library is heavily inspired by [Bitters](http://bitters.bourbon.io/), a wonderful boilerplate of common-sense Sass conventions and structure. Our outline looks a little something like this:

```
dist/
├── ... >> Not yet used
sass/ >> The bulk of the styling itself
├── directives/ >> Useful mixins and functions to build a site with
│   ├── 00_variables/ >> Re-usable color and sizing variables
│   ├── 01_tools/ >> Globally used mixins and functions
│   ├── 02_base_components/ >> Small components that are typically used in larger components
│   ├── 03_components/ >> Large components and features; items that make use of 02_base_components
│   └── 04_utilities/ >> Helper classes and overrides
└── selectors/ >> Classes and element selectors which implement directives
```

### Contributing

#### Mixins over Extends and Classes
Our projects prefer semantic (BEM) class names that are specific to their use and which use the directives created here, over classes that are reused. For that reason, contributions should typically be added as mixins.

*Adding Classes* - Reusable classes are primarily buttons, tooltips, and other commonly repeated elements. That said, do include a class or element counterpart to your directives in the `selectors/` directory for use by 3rd party projects that do not consume the Sass files.

*Do Not Add Extends* - For [predictability](https://www.sitepoint.com/avoid-sass-extend/) and [performance](https://csswizardry.com/2016/02/mixins-better-for-performance/), use mixins instead.

#### Adding Directives

After adding a new directive to [`sass/directives/`](sass/directives/), remember to `@import` it into the [`_base.scss`](sass/_base.scss) file.

#### Updating the Version

After your PR is merged, update the [semantic version number appropriately](http://semver.org/), add a [release](https://github.com/cb-talent-development/employer-style-base/releases) and `publish` via Yarn or npm.

Then update the `package.json` file in your project with the new version:

```json
  "dependencies": {
    "employer-style-base": "=2.2.1"
  }
```

### Future

- Implement build process to compile CSS into `dist` for easy consumption
