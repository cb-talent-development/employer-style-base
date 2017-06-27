'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Employer Pattern Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/sass');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/docs');

/* Static docs */
fractal.web.set('static.path', __dirname + '/dist/docs');
fractal.web.set('builder.dest', __dirname + '/dist/build');
