
const fetchMetricsService = (asset) => {
  return [
    {
      "unit": "V",
      "measure": "battery_voltage",
      "artifact": "asset1234:latest:battery_voltage:1557763079605",
      "chart": {
        "colorrange": {
          "color": [
            {
              "minvalue": 0,
              "maxvalue": 50,
              "code": "#8e0000"
            },
            {
              "minvalue": 50,
              "maxvalue": 75,
              "code": "#f2c500"
            },
            {
              "minvalue": 75,
              "maxvalue": 100,
              "code": "#1aaf5d"
            }
          ]
        },
        "chart": {
          "ledGap": 1,
          "captionAlignment": "center",
          "upperlimitdisplay": "Max",
          "caption": "Battery Voltage",
          "lowerlimitdisplay": "Min",
          "lowerlimit": 0,
          "ledSize": 5,
          "tickMarkDistance": "30",
          "bgAlpha": "0",
          "origh": "300",
          "numbersuffix": "V",
          "alignCaptionWithCanvas": "1",
          "theme": "fusion",
          "upperlimit": 100
        },
        "value": "30"
      },
      "presentation": "vled",
      "label": "Battery Voltage",
      "result": "30",
      "asset": "asset1234",
      "stops": {
        "warning": 50,
        "min": 0,
        "critical": 75,
        "max": 100
      }
    }
  ]
}

const fetchAllMetricsService = () => {
  return [
    {
      "unit": "V",
      "measure": "battery_voltage",
      "artifact": "asset1234:latest:battery_voltage:1557763079605",
      "chart": {
        "colorrange": {
          "color": [
            {
              "minvalue": 0,
              "maxvalue": 50,
              "code": "#8e0000"
            },
            {
              "minvalue": 50,
              "maxvalue": 75,
              "code": "#f2c500"
            },
            {
              "minvalue": 75,
              "maxvalue": 100,
              "code": "#1aaf5d"
            }
          ]
        },
        "chart": {
          "ledGap": 1,
          "captionAlignment": "center",
          "upperlimitdisplay": "Max",
          "caption": "Battery Voltage",
          "lowerlimitdisplay": "Min",
          "lowerlimit": 0,
          "ledSize": 5,
          "tickMarkDistance": "30",
          "bgAlpha": "0",
          "origh": "300",
          "numbersuffix": "V",
          "alignCaptionWithCanvas": "1",
          "theme": "fusion",
          "upperlimit": 100
        },
        "value": "30"
      },
      "presentation": "vled",
      "label": "Battery Voltage",
      "result": "30",
      "asset": "asset1234",
      "stops": {
        "warning": 50,
        "min": 0,
        "critical": 75,
        "max": 100
      }
    }
  ]
}

export {
  fetchMetricsService,
  fetchAllMetricsService
}
