/* The initial state of the store */

export default {
  asset: {
    data: [],
    current: {},
    filter: {
      artifact: 'state',
      label: 'State',
      options: [{ artifact: 'normal',label: 'Normal', rank: 1, selected: true  },
        { artifact: 'informational',label: 'Informational', rank: 2, selected: true },
        { artifact: 'warning', label: 'Warning',rank: 3, selected: true  },
        { artifact: 'critical', label: 'Critical', rank: 4, selected: true },
        { artifact: 'life-safety', label: 'Life Safety', rank: 5, selected: true },]
    },
    sort: {artifact: 'alphabetical', label: 'Alphabetical'},
    actions: []
  },
  metric: {
    data: [],
    current: {},
    actions: []
  },
  region: {
    data: [],
    filters: [],
    sort: 'alphabetical',
    actions: []
  },
  site: {
    data: [],
    filters: [],
    sort: 'alphabetical',
    actions: []
  },
  alert: {
    data: [],
    current: {},
    filter: {
      artifact: 'state',
      label: 'State',
      options: [{ artifact: 'normal',label: 'Normal',selected: false  },
        { artifact: 'informational',label: 'Informational',selected: false },
        { artifact: 'warning', label: 'Warning',selected: false  },
        { artifact: 'critical', label: 'Critical', selected: false },
        { artifact: 'life-safety', label: 'Life Safety', selected: false },]
    },
    sort: {artifact: 'alphabetical', label: 'Alphabetical'},
    actions: []
  },
  alarm: {
    data: []
  },
  event: {
    data:[]
  },
  util: {
    message: {
      text: '',
      type: 'info',
      visible: false
    },
    loading: true,
    list: false
  },
  user: {
    isAuthenticated: false,
    verifiedAccount: false,
    confirmedAccount: false,
    forgotPassword: false,
    resetPassword: false,
    userId: '',
    username: '',
    name: '',
    email: '',
    phone: '',
    emailVerified: false,
    phoneVerified: false,
    phoneAwaitingVerification: false,
    emailAwaitingVerification: false
  },
  notification: {
    optedIn: false
  },
  iam: {
    user: {
      data: [],
      current: '',
      actions: []
    },
    permission: {
      user: [],
      admin: [],
      actions: []
    },
    services: {
      data: [],
      current: ''
    },
    actions: {
      current: '',
    }
  }
}
