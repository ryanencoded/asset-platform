#Import Standards
This document serves to provide information on importing modules and other sources into this application. The following structure displays the proper file structure that is to be used for simplicity, readability, and cross-development efficiency.

##Import Order
It is important to standardize the import order so that other developers may quickly understand what is happening. The following import order should be used:

1. React
2. PropTypes
3. Loadable
4. Router
5. Animations (React-spring)
6. Mui
    1. withStyles
    2. Cssbaseline & other Mui style helpers
    3. Colors
    4. Core (I.e. Grid, Typography, etc.)
7. Icons
8. Redux & Actions
9. Custom Utils
10. View Snippets (I.e. AssetName, AlertIcon, etc. )
11. View Routes (I.e. Login, Sites, Assets, etc.)


##Import Example
The following example should be used as a reference when importing modules. If you have a new module that falls outside this list, please consult the development team lead first.

```
/* Core Modules */
import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import Loadable from 'react-loadable'
import {
  withRouter
} from 'react-router-dom'

/* Animations */
import { animated } from 'react-spring/renderprops'

/* Mui */
import {
  withStyles
} from '@material-ui/core/styles'
import {
  deepPurple
} from '@material-ui/core/colors'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon
} from '@material-ui/core'

/* Icons */
import HomeIcon from '@material-ui/icons/HomeOutlined'
import AssetsIcon from '@material-ui/icons/WebAssetOutlined'
import SitesIcon from '@material-ui/icons/Toc'
import SettingsIcon from '@material-ui/icons/SettingsOutlined'
import AlertsIcon from '@material-ui/icons/NotificationsOutlined'

/* Redux & Actions */
import { connect } from 'react-redux';
import { fetchAlerts } from 'data/actions/alerts'

/* Custom Utils */
import LazyLoader from 'utils/Loading/LazyLoader'
import PrivateRoute from 'utils/Auth/PrivateRoute'

/* View Snippet Components */
import Header from 'views/Layout/Header'
import SideBar from 'views/Layout/SideBar'

/* View Route components */
const Assets = Loadable({
  loader: () => import ('views/Assets/Assets'),
  loading: LazyLoader,
})

const Sites = Loadable({
  loader: () => import ('views/Sites/Sites'),
  loading: LazyLoader,
})

```

Notice how the comments have a space above each section for enhanced readability. Also, please use these exact comment style where only the first letter of the word is capitalized and all words are capitals. If you are in doubt, always consult the team lead!

###Conclusion
As with anything on the team, it rarely hurts to ask if something is correct to ensure that standards are being met. It is important to remember that team standards benefit everyone.
