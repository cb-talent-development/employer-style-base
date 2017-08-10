module.exports = {
  "collated": true,
  collator: function(markup, item) {
      return `<!-- Start: @${item.handle} -->\n${markup}<br><br>\n<!-- End: @${item.handle} -->\n`
    },
  "default": "primary",
  "status": prototype,
  "variants": [
    {
      "name": "primary",
      "context": {
        "order": 1,
        "modifier": "primary",
        "label": "primary"
      }
    },
    {
      "name": "success",
      "context": {
        "order": 1,
        "modifier": "success",
        "label": "success"
      }
    },
    {
      "name": "warning",
      "context": {
        "order": 1,
        "modifier": "warning",
        "label": "warning"
      }
    },
    {
      "name": "danger",
      "context": {
        "order": 1,
        "modifier": "danger",
        "label": "danger"
      }
    }
  ]
}
