module.exports = {
  'collated': true,
  collator: function(markup, item) {
      return `<!-- Start: @${item.handle} -->\n <div style='border: 1px solid grey; width: 200px; margin: 20px'> ${markup} </div> \n<!-- End: @${item.handle} -->\n`
    },
  'preview': '@preview_colors',
  'default': 'anchor-blue',
  'notes': "See 'Context' for color usage notes",
  'variants': [
    {
      'name': 'anchor-blue',
      'context': {
        'order': 1,
        'color-variable': '$anchor-blue',
        'color-hex': '#182642'
      }
    },
    {
      'name': 'anchor-blue-light',
      'context': {
        'order': 2,
        'color-variable': '$anchor-blue-light',
        'color-hex': '#747d8e'
      }
    },
    {
      'name': 'azure-blue',
      'context': {
        'order': 3,
        'color-variable': '$azure-blue',
        'color-hex': '#287ab9'
      }
    },
    {
      'name': 'azure-blue-dark',
      'context': {
        'order': 4,
        'color-variable': '$azure-blue-dark',
        'color-hex': '#1e5c8b'
      }
    },
    {
      'name': 'azure-light',
      'context': {
        'order': 5,
        'color-variable': '$azure-light',
        'color-hex': '#7eafd5'
      }
    },
    {
      'name': 'emerald',
      'context': {
        'order': 6,
        'color-variable': '$emerald',
        'color-hex': '#009b74'
      }
    },
    {
      'name': 'emerald-dark',
      'context': {
        'order': 7,
        'color-variable': '$emerald-dark',
        'color-hex': '#007457'
      }
    },
    {
      'name': 'emerald-light',
      'context': {
        'order': 8,
        'color-variable': '$emerald-light',
        'color-hex': '#66c3ac'
      }
    },

    {
      'name': 'marigold',
      'context': {
        'order': 9,
        'color-variable': '$marigold',
        'color-hex': '#fcb716'
      }
    },
    {
      'name': 'marigold-dark',
      'context': {
        'order': 10,
        'color-variable': '$marigold-dark',
        'color-hex': '#f79c25'
      }
    },
    {
      'name': 'marigold-light',
      'context': {
        'order': 11,
        'color-variable': '$marigold-light',
        'color-hex': '#fed473'
      }
    },
    {
      'name': 'grey-darkest',
      'context': {
        'order': 12,
        'color-variable': '$grey-darkest',
        'color-hex': '#333'
      }
    },
    {
      'name': 'grey-demon',
      'context': {
        'order': 13,
        'color-variable': '$grey-demon',
        'color-hex': '#666'
      }
    },
    {
      'name': 'grey-dark',
      'context': {
        'order': 14,
        'color-variable': '$grey-dark',
        'color-hex': '#999999'
      }
    },
    {
      'name': 'grey-light',
      'context': {
        'order': 15,
        'color-variable': '$grey-light',
        'color-hex': '#BBBBBB'
      }
    },
    {
      'name': 'grey-lighter',
      'context': {
        'order': 16,
        'color-variable': '$grey-lighter',
        'color-hex': '#d8d8d8',
        'color-usage': 'border color, home featured heading background'
      }
    },
    {
      'name': 'grey-lightest',
      'context': {
        'order': 17,
        'color-variable': '$grey-lightest',
        'color-hex': '#F4F4F4'
      }
    },
    {
      'name': 'sky-blue',
      'context': {
        'order': 18,
        'color-variable': '$sky-blue',
        'color-hex': '#0097d1'
      }
    },
    {
      'name': 'sky-blue-dark',
      'context': {
        'order': 19,
        'color-variable': '$sky-blue-dark',
        'color-hex': '#0a7aaa'
      }
    },
    {
      'name': 'sky-blue-light',
      'context': {
        'order': 20,
        'color-variable': '$sky-blue-light',
        'color-hex': '#6bc6e9'
      }
    },

    {
      'name': 'teal',
      'context': {
        'order': 21,
        'color-variable': '$teal',
        'color-hex': '#63c0b9'
      }
    },
    {
      'name': 'teal-dark',
      'context': {
        'order': 22,
        'color-variable': '$teal-dark',
        'color-hex': '#54a1a1'
      }
    },
    {
      'name': 'teal-light',
      'context': {
        'order': 23,
        'color-variable': '$teal-light',
        'color-hex': '#a1d9d5'
      }
    },

    {
      'name': 'aqua',
      'context': {
        'order': 24,
        'color-variable': '$aqua',
        'color-hex': '#0195a3'
      }
    },
    {
      'name': 'aqua-dark',
      'context': {
        'order': 25,
        'color-variable': '$aqua-dark',
        'color-hex': '#006064'
      }
    },
    {
      'name': 'aqua-light',
      'context': {
        'order': 26,
        'color-variable': '$aqua-light',
        'color-hex': '#50c5cd'
      }
    },

    {
      'name': 'lime',
      'context': {
        'order': 27,
        'color-variable': '$lime',
        'color-hex': '#85ce3f'
      }
    },
    {
      'name': 'lime-dark',
      'context': {
        'order': 28,
        'color-variable': '$lime-dark',
        'color-hex': '#66a52a'
      }
    },
    {
      'name': 'lime-light',
      'context': {
        'order': 29,
        'color-variable': '$lime-light',
        'color-hex': '#b6e28c'
      }
    },

    {
      'name': 'orange',
      'context': {
        'order': 30,
        'color-variable': '$orange',
        'color-hex': '#e78523'
      }
    },
    {
      'name': 'orange-dark',
      'context': {
        'order': 31,
        'color-variable': '$orange-dark',
        'color-hex': '#be7229'
      }
    },
    {
      'name': 'orange-light',
      'context': {
        'order': 32,
        'color-variable': '$orange-light',
        'color-hex': '#f1b67b'
      }
    },

    {
      'name': 'purple',
      'context': {
        'order': 33,
        'color-variable': '$purple',
        'color-hex': '#662d91'
      }
    },
    {
      'name': 'purple-dark',
      'context': {
        'order': 34,
        'color-variable': '$purple-dark',
        'color-hex': '#311b92'
      }
    },
    {
      'name': 'purple-medium',
      'context': {
        'order': 35,
        'color-variable': '$purple-medium',
        'color-hex': '#673ab7'
      }
    },
    {
      'name': 'purple-light',
      'context': {
        'order': 36,
        'color-variable': '$purple-light',
        'color-hex': '#b389ff'
      }
    },
    {
      'name': 'red',
      'context': {
        'order': 37,
        'color-variable': '$red',
        'color-hex': '#DD2C00'
      }
    },
    {
      'name': 'cb-gradient-dark',
      'context': {
        'order': 38,
        'color-variable': '$cb-gradient-dark',
        'color-hex': '#0A3A68'
      }
    },
    {
      'name': 'cb-gradient-medium',
      'context': {
        'order': 39,
        'color-variable': '$cb-gradient-medium',
        'color-hex': '#0E759E'
      }
    },
    {
      'name': 'cb-gradient-light',
      'context': {
        'order': 40,
        'color-variable': '$cb-gradient-light',
        'color-hex': '#58A9A2'
      }
    },

    {
      'name': 'dayAfterTomorrow-dark',
      'context': {
        'order': 41,
        'color-variable': '$dayAfterTomorrow-dark',
        'color-hex': 'white'
      }
    },
    {
      'name': 'dayAfterTomorrow-medium',
      'context': {
        'order': 42,
        'color-variable': '$dayAfterTomorrow-medium',
        'color-hex': '#f0f0f0'
      }
    },
    {
      'name': 'dayAfterTomorrow-light',
      'context': {
        'order': 43,
        'color-variable': '$dayAfterTomorrow-light',
        'color-hex': '#f0f0f0'
      }
    }
  ]
}
