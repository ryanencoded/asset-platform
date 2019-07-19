const getSortOptions = (service) => {
  switch(service) {
    case 'asset':
    case 'alert':
      return [
        {
          artifact: 'alphabetical',
          label: 'Alphabetical'
        },
        {
          artifact: 'technology',
          label: 'Technology'
        },
        {
          artifact: 'state',
          label: 'State'
        }
      ]
  }
}

const getFilterOptions = (service) => {
  switch(service) {
    case 'asset':
    case 'alert':
      return [
        {
          artifact: 'state',
          label: 'State',
          options: [
            {
              artifact: 'normal',
              label: 'Normal',
              rank: 1,
              selected: true
            },
            {
              artifact: 'informational',
              label: 'Informational',
              rank: 2,
              selected: true
            },
            {
              artifact: 'warning',
              label: 'Warning',
              rank: 3,
              selected: true
            },
            {
              artifact: 'critical',
              label: 'Critical',
              rank: 4,
              selected: true
            },
            {
              artifact: 'life-safety',
              label: 'Life Safety',
              rank: 5,
              selected: true
            },
          ]
        },
        {
          artifact: 'technology',
          label: 'Technology',
          options: [
            {
              artifact: 'power-generator',
              label: 'Power Generator',
              selected: true
            },
            {
              artifact: 'gas-detection',
              label: 'Gas Detection',
              selected: true
            },
            {
              artifact: 'liquid-level',
              label: 'Liquid Level',
              selected: true
            },
          ]
        }
      ]
  }
}

export {
  getSortOptions,
  getFilterOptions
}
