'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Employer Style Base Pattern Library');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Employer Site and Content Products');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/sass');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/docs');

/* Static docs */
fractal.web.set('static.path', __dirname + '/dist');
fractal.web.set('builder.dest', __dirname + '/build');

fractal.components.set('default.preview', '@preview_default');
fractal.components.set('default.display', {
    'padding': '30px',
    'background-color': 'white',
    'color': '#666666',
    'font-family': 'Lato'
});
