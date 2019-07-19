import React, { PureComponent } from 'react'
/* Mui */
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ResourceSelect extends PureComponent {

  handleChange = (i) => e => {
    this.props.handleClick(i, e.target.checked)
  }

  render() {
    const { label, disabled, expanded, determineCheck, expandIcon = null} = this.props
    return(
      <ExpansionPanel disabled={disabled} expanded={expanded}>
        <ExpansionPanelSummary
          expandIcon={expandIcon}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>{label}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormGroup>
            {determineCheck.map((item, i) => {
              return <FormControlLabel
                        key={i}
                        control={<Checkbox
                                    checked={determineCheck[i].checked}
                                    onClick={this.handleChange(i)}
                                 />}
                        label={determineCheck[i].resource}
                     />
            })}
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default ResourceSelect
