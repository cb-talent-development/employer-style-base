module.exports = {
  'collated': true,
  collator: function(markup, item) {
      return `<!-- Start: @${item.handle} -->\n ${markup} <br><hr><br> \n<!-- End: @${item.handle} -->\n`
    },
    'default': 'headinghero',
    'notes': 'TODO - make variations for headings with and without subheads, with and without subclasses',
  'variants': [
    {
      'name': 'headinghero',
      'context': {
        'order': 1,
        'heading-type': 'Heading Hero',
        'heading-class': 'heading--hero'
      }
    },
    {
      'name': 'headingheroxl',
      'context': {
        'order': 1,
        'heading-type': 'Heading Hero XL',
        'heading-class': 'heading--hero--xl'
      }
    },
    {
      'name': 'headingsection',
      'context': {
        'order': 1,
        'heading-type': 'Heading - Section',
        'heading-class': 'heading--section'
      }
    },
    {
      'name': 'headingsectionsmall',
      'context': {
        'order': 1,
        'heading-type': 'Heading - Section - Small',
        'heading-class': 'heading--section--small'
      }
    },
    {
      'name': 'headingsectionwsubhead',
      'context': {
        'order': 1,
        'heading-type': 'Heading - Section w Subhead',
        'heading-class': 'heading--section--w-subhead'
      }
    },
    {
      'name': 'headingitem',
      'context': {
        'order': 1,
        'heading-type': 'Heading Item',
        'heading-class': 'heading--item'
      }
    },
    {
      'name': 'headingsmall',
      'context': {
        'order': 1,
        'heading-type': 'Heading Small',
        'heading-class': 'heading--small'
      }
    }
  ]
}
