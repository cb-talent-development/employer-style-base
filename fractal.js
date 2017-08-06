'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Employer Pattern Library');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Employer Site and Content Products');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/sass');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/docs');

/* Static docs */
fractal.web.set('static.path', __dirname + '/dist');
fractal.web.set('builder.dest', __dirname + '/dist/build');

fractal.components.set('default.preview', '@component_preview');
// Change file type of docs and components
// fractal.components.set('ext', '.handlebars');
// fractal.docs.set('ext', '.html');
