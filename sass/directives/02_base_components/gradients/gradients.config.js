module.exports = {
  'collated': true,
  collator: function(markup, item) {
      return `<!-- Start: @${item.handle} -->\n <div style='border: 1px solid grey; width: 200px; margin: 20px'> ${markup} </div> \n<!-- End: @${item.handle} -->\n`
    },
  'preview': '@preview_colors',
  'notes': 'TODO - example of transparent gradient, add color values',
  'default': 'cb',
  'variants': [
    {
      'name': 'cb',
      'context': {
        'order': 1,
        'gradient-name': 'CareerBuilder Brand',
        'gradient-class': 'cbGradient'
      }
    },
    {
      'name': 'cb2017',
      'context': {
        'order': 1,
        'gradient-name': 'CareerBuilder Brand 2017',
        'gradient-class': 'cbGradient2017'
      }
    },
    {
      'name': 'rogueOne',
      'context': {
        'order': 1,
        'gradient-name': 'Rogue One',
        'gradient-class': 'rogueOneGradient'
      }
    },
    {
      'name': 'cloverfield',
      'context': {
        'order': 1,
        'gradient-name': 'Cloverfield',
        'gradient-class': 'cloverfieldGradient'
      }
    },
    {
      'name': 'gobletOfFire',
      'context': {
        'order': 1,
        'gradient-name': 'Goblet Of Fire',
        'gradient-class': 'gobletOfFireGradient'
      }
    },
    {
      'name': 'soylentGreen',
      'context': {
        'order': 1,
        'gradient-name': 'Soylent Green',
        'gradient-class': 'soylentGreenGradient'
      }
    },
    {
      'name': 'purpleRain',
      'context': {
        'order': 1,
        'gradient-name': 'Purple Rain',
        'gradient-class': 'purpleRainGradient'
      }
    },
    {
      'name': 'dayAfterTomorrow',
      'context': {
        'order': 1,
        'gradient-name': 'Day After Tomorrow',
        'gradient-class': 'dayAfterTomorrowGradient'
      }
    },
    {
      'name': 'moonlight',
      'context': {
        'order': 1,
        'gradient-name': 'Moonlight',
        'gradient-class': 'moonlightGradient'
      }
    },
    {
      'name': 'lostWorld',
      'context': {
        'order': 1,
        'gradient-name': 'Lost World',
        'gradient-class': 'lostWorldGradient'
      }
    },
  ]
}
