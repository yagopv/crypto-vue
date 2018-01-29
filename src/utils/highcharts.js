import Highcharts from 'highcharts';

import { format, percentage } from '@/utils/filters';
import { colorizePercentChangeStyle } from './helpers';

const loadTheme = () => {
  Highcharts.theme = {
    colors: [
      '#2b908f',
      '#90ee7e',
      '#f45b5b',
      '#7798BF',
      '#aaeeee',
      '#ff0066',
      '#eeaaee',
      '#55BF3B',
      '#DF5353',
      '#7798BF',
      '#aaeeee'
    ],
    chart: {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
        stops: [[0, '#343a40'], [1, '#343a40']]
      },
      style: {
        Family:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      },
      plotBorderColor: '#606063'
    },
    title: {
      style: {
        color: '#E0E0E3',
        textTransform: 'uppercase',
        fontSize: '20px'
      }
    },
    subtitle: {
      style: {
        color: '#E0E0E3',
        textTransform: 'uppercase'
      }
    },
    xAxis: {
      gridLineColor: '#707073',
      labels: {
        style: {
          color: '#E0E0E3'
        }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
        style: {
          color: '#A0A0A3'
        }
      }
    },
    yAxis: {
      gridLineColor: '#707073',
      labels: {
        style: {
          color: '#E0E0E3'
        }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
        style: {
          color: '#A0A0A3'
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
        color: '#F0F0F0'
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          color: '#B0B0B3'
        },
        marker: {
          lineColor: '#333'
        }
      },
      boxplot: {
        fillColor: '#505053'
      },
      candlestick: {
        lineColor: 'white'
      },
      errorbar: {
        color: 'white'
      }
    },
    legend: {
      itemStyle: {
        color: '#E0E0E3'
      },
      itemHoverStyle: {
        color: '#FFF'
      },
      itemHiddenStyle: {
        color: '#606063'
      }
    },
    credits: {
      style: {
        color: '#666'
      }
    },
    labels: {
      style: {
        color: '#707073'
      }
    },

    drilldown: {
      activeAxisLabelStyle: {
        color: '#F0F0F3'
      },
      activeDataLabelStyle: {
        color: '#F0F0F3'
      }
    },

    navigation: {
      buttonOptions: {
        symbolStroke: '#DDDDDD',
        theme: {
          fill: '#505053'
        }
      }
    },

    // scroll charts
    rangeSelector: {
      buttonTheme: {
        fill: '#505053',
        stroke: '#000000',
        style: {
          color: '#CCC'
        },
        states: {
          hover: {
            fill: '#707073',
            stroke: '#000000',
            style: {
              color: 'white'
            }
          },
          select: {
            fill: '#000003',
            stroke: '#000000',
            style: {
              color: 'white'
            }
          }
        }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
        backgroundColor: '#333',
        color: 'silver'
      },
      labelStyle: {
        color: 'silver'
      }
    },

    navigator: {
      handles: {
        backgroundColor: '#666',
        borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
        color: '#7798BF',
        lineColor: '#A6C7ED'
      },
      xAxis: {
        gridLineColor: '#505053'
      }
    },

    scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
    },

    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
  };

  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);
};

const treemapOptions = {
  series: [
    {
      type: 'treemap',
      layoutAlgorithm: 'squarified',
      allowDrillToNode: true,
      layoutStartingDirection: 'horizontal',
      turboThreshold: 2000,
      colorByPoint: true,
      cursor: 'pointer',
      levelIsConstant: false,
      point: {
        events: {
          click: event => {
            location.hash = `#/ticker/${event.point.options.ticker.id}`;
          }
        }
      },
      tooltip: {
        valueDecimals: 0,
        valuePrefix: '$',
        pointFormatter: function(template) {
          console.log(this);
          const ticker = this.options.ticker;
          return `
              <p style="font-weight: bold;font-size:1.05rem;">${ticker.name}</p><br/>
              <p>Market Cap: ${format(ticker.market_cap_usd, '$0a')}</p><br/>
              <p>% Change 1h: <span style="color: ${colorizePercentChangeStyle(ticker.percent_change_1h)}">${percentage(ticker.percent_change_1h)}</span></p><br/>
              <p>% Change 24h: <span style="color: ${colorizePercentChangeStyle(ticker.percent_change_24h)}">${percentage(ticker.percent_change_24h)}</span></p><br/>
              <p>% Change 7d: <span style="color: ${colorizePercentChangeStyle(ticker.percent_change_7d)}">${percentage(ticker.percent_change_7d)}</span></p><br/>
          `;
        }
      },
      levels: [
        {
          level: 1,
          dataLabels: {
            enabled: true,
            color: '#FFF',
            font: 'bold 26px "Open Sans", sans-serif'
          },
          borderWidth: 3
        }
      ],
      data: []
    }
  ],
  title: {
    text: ''
  },
  chart: {
    height: 900
  }
};

const candlestickOptions = {
  rangeSelector: {
    selected: 1
  },

  title: {
    text: ''
  },

  yAxis: [
    {
      labels: {
        align: 'right',
        x: -3
      },
      title: {
        text: 'OHLC'
      },
      height: '60%',
      lineWidth: 2,
      resize: {
        enabled: true
      }
    },
    {
      labels: {
        align: 'right',
        x: -3
      },
      title: {
        text: 'Volume'
      },
      top: '65%',
      height: '35%',
      offset: 0,
      lineWidth: 2
    }
  ],

  tooltip: {
    split: true
  },

  chart: {
    height: window.innerWidth > 768 ? 700 : 550
  },

  plotOptions: {
    candlestick: {
      color: '#dc3545',
      upColor: '#28a745'
    }
  },

  series: [
    {
      type: 'candlestick',
      name: '',
      data: [],
      tooltip: {
        valueDecimals: 2,
        valuePrefix: '$'
      }
    },
    {
      type: 'column',
      name: 'Volume',
      data: [],
      yAxis: 1
    }
  ]
};

export { loadTheme, treemapOptions, candlestickOptions };
