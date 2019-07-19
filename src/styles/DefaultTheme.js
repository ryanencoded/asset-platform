import {
  createMuiTheme
} from '@material-ui/core/styles';
import {grey, deepPurple, red} from '@material-ui/core/colors'
import 'typeface-roboto';
//6336E3 - Purple
const primary = {
  "main": deepPurple[500],
  "dark": deepPurple[800],
  "light": deepPurple[300],
  "contrastText": deepPurple[50]
}

const secondary = {
  "main": grey[500],
  "dark": grey[300],
  "light": grey[50],
  "contrastText": grey[50]
}

const tertiary = {
  "main": grey[50]
}

const error = {
  "main": red[500],
  "dark": red[800],
  "light": red[400],
  "contrastText": grey[50]
}

const theme = {
  palette: {
    primary: primary,
    secondary: secondary,
    error: error,
    divider: "#344559",
    background: {
      default: "#F5F6FB"
    }
  },
  overrides: {
    MuiDivider: {
      root: {
        "backgroundColor": "#d8d8d8"
      }
    },
    MuiPaper: {
      root: {
        "borderRadius": "5px",
      },
      elevation2: {
        "padding": "3rem 1rem"
      }
    },
    MuiAppBar: {
      root: {
        "padding": "0px 10px"
      },
      colorPrimary: {
        "color": deepPurple[500],
        "backgroundColor": "#FFF"
      }
    },
    MuiDialogActions: {
      root: {
        justifyContent: 'center',
        margin: '0'
      }
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRightColor: grey[400],
        borderRightWidth: '1px',
        borderRightStyle: 'solid'
      }
    },
    MuiFormControl: {
      root: {
        "marginBottom": "1rem",
        "display": "block"
      },
      marginNormal: {
        "marginBottom": "1rem"
      }
    },
    MuiListItem: {
      root: {
        "&:hover": {
          "backgroundColor": "rgba(185, 179, 226, 0.16)",
          "cursor": "pointer"
        }
      }
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiTable: {
      root: {
        borderCollapse: 'separate',
        borderSpacing: '0 1rem'
      }
    },
    MuiTableHead: {
      root: {
        "backgroundColor": 'transparent'
      }
    },
    MuiTableRow: {
      root: {
        "textDecoration": 'none',
        "padding": "25px",
        "backgroundColor": 'white',
        "transition": "all 0.3s ease-in-out",
        // "&:hover": {
        //   "boxShadow": "0 5px 15px rgba(0,0,0,0.3)",
        //   "transition": "box-shadow 0.3s ease-in-out",
        //   "cursor": "hover"
        // },
        '&:first-child': {
          width: '170px'
        }
      },
      head: {
        "backgroundColor": 'transparent',
        "&:hover": {
          "boxShadow": "none",
          "backgroundColor": "transparent"
        }
      },
    },
    MuiTableCell: {
      body: {
        padding: "35px"
      },
      head: {
        "color": grey[500],
        "backgroundColor": "transparent",
        "&:hover": {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiFab: {
      root: {
        "backgroundColor": "#67BFD3",
        "color": grey[50],
        "&:hover": {
          "backgroundColor": "#2f8fa2"
        }
      }
    }
  },
  shape: {
    "borderRadius": 0
  },
  typography: {
    useNextVariants: true,
    body1: {
      "color": "#686868",
      "fontFamily": "Roboto"
    },
    body2: {
      "color": grey[900],
      "fontFamily": "Roboto"
    },
    subtitle1: {
      "color": grey[600],
      "fontSize": '1em'
    }
  },
};

export default createMuiTheme(theme);
