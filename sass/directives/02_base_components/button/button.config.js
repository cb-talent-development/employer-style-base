module.exports = {
  'collated': true,
  collator: function(markup, item) {
      return `<!-- Start: @${item.handle} -->\n${markup}<br><br>\n<!-- End: @${item.handle} -->\n`
    },
  'preview': '@preview_buttons',
  'default': 'base',
  'variants': [
    {
      'name': 'base',
      'context': {
        'order': 1,
        'modifier': 'base',
        'label': 'Base Button'
      }
    },
    {
      'name': 'Primary Button',
      'context': {
        'order': 2,
        'modifier': 'primary',
        'label': 'Primary Button'
      }
    },
    {
      'name': 'Secondary Button',
      'context': {
        'order': 3,
        'modifier': 'secondary',
        'label': 'Secondary Button'
      }
    },
    {
      'name': 'Tertiary Button',
      'context': {
        'order': 4,
        'modifier': 'tertiary',
        'label': 'Tertiary Button'
      }
    },
    {
      'name': 'Quarternary Button',
      'context': {
        'order': 5,
        'modifier': 'quarternary',
        'label': 'Quarternary Button'
      }
    },
    {
      'name': 'Quinary Button',
      'context': {
        'order': 6,
        'modifier': 'quinary',
        'label': 'Quinary Button'
      }
    },
    {
      'name': 'Senary Button',
      'context': {
        'order': 7,
        'modifier': 'senary',
        'label': 'Senary Button'
      }
    },
    {
      'name': 'Small Button',
      'context': {
        'order': 8,
        'modifier': 'small',
        'label': 'Small Button'
      }
    },
    {
      'name': 'Medium Button',
      'context': {
        'order': 9,
        'modifier': 'medium',
        'label': 'Medium Button'
      }
    },
    {
      'name': 'Large Button',
      'context': {
        'order': 10,
        'modifier': 'large',
        'label': 'Large Button'
      }
    },
    {
      'name': 'Massive Button',
      'context': {
        'order': 11,
        'modifier': 'massive',
        'label': 'Massive Button'
      }
    },
    {
      'name': 'Negative Button',
      'context': {
        'order': 12,
        'modifier': 'negative',
        'label': 'Negative Button'
      }
    },
    {
      'name': 'Disabled Button',
      'context': {
        'order': 13,
        'modifier': 'disabled',
        'label': 'Disabled Button'
      }
    }
  ]
}
