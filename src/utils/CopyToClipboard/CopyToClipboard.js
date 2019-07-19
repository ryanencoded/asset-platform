import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './CopyToClipboard.css';

const styles = theme => ({
  root: {
    padding:'1rem'
  }
});

class CopyToClipboard extends React.Component {
  handleDidCopy() {
    this.setState({
      pop: "clip-pop"
    })
  }
  handleMouseOut() {
    if(this.state && this.state.pop) {
      this.setState({
        pop: null
      })
    }
  }
  handleCopy() {
    const range = document.createRange()
    const selection = window.getSelection()
    range.selectNode(this.sample)
    selection.empty()
    selection.addRange(range)

    if (document.execCommand('copy')){
      this.handleDidCopy()
    } else {
      console.log('Copy failed');
    }
  }
  render() {
    try {
      const {classes} = this.props;
      const {pop} = this.state || {},
            classNames = `code-sample ${pop || ''}`

      return (
      <div className={classes.root}>
        <div className={classNames} onClick={ () => this.handleCopy() } onMouseOut={ () => this.handleMouseOut() }>
          <Pre className={classes.pre} setRef={(r) => this.sample = r } text={this.props.text}/>
          <FakeButton text="Copy"/>
        </div>
      </div>
      )
    } catch (e) {
      debugger
    }
  }
}

const FakeButton = ({text, onMouseOut}) => (
  <div className="clip-button" onMouseOut={onMouseOut}>
    {text}
  </div>
)
const Pre = ({setRef, text}) => (
  <pre ref={setRef}>
    {text}
  </pre>
)

export default withStyles(styles)(CopyToClipboard)
