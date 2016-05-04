import React from 'react'
import classNames from 'classnames/bind';
import classes from './Walk.scss'

let cx = classNames.bind(classes)

export class Walk extends React.Component {
  propTypes: {
    walk: React.PropTypes.object.isRequired,
    nextAsync: React.PropTypes.func.isRequired,
    next: React.PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.runBtnClick = this.runBtnClick.bind(this)
  }

  componentDidUpdate () {
    // move!!!
    if (this.props.walk.goOn) {
      setTimeout(() => {
        this.props.runGo()
      }, 1000)
    }
  }

  runBtnClick () {
    this.props.runGo()
  }

  render () {
    const {next, nextAsync, walk} = this.props
    let imgClass = cx({
      imgSrc: !walk.isRunning,
      imgTar: walk.isRunning
    })
    return (
      <div>
        <h2 className={classes.counterContainer}>
          {walk.status}
        </h2>
        <button className='btn btn-default' onClick={next}>
          next
        </button>
        {' '}
        <button className='btn btn-default' onClick={nextAsync}>
          next (Async)
        </button>
        <button className='btn btn-default' onClick={this.runBtnClick}>
          run
        </button>

        <div className={imgClass}>
          <img src={`${walk.index}.png`} style={{width: '180px'}} />
        </div>
      </div>
    )
  }
}

Walk.componentDidUpdate

export default Walk
