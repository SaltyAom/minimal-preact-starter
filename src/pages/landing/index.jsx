import { h } from 'preact';

import { connect } from 'react-redux';

import './landing.css';

const mapToStateProps = (store) => {
  return {
    store: {

      stack: store.stack

    }
  }
}

const mapToDispatchProps = (dispatch) => {
  return {
    dispatch: {



    }
  }
}

const Landing = ({ store, dispatch }) => {
  let { stack } = store;

  return(
    <div id="landing">
      <h1>Hello World!</h1>
      <p>This web app is running in Preact!</p>
      <p>A {stack.preact}!</p>
    </div>
  )
}

export default connect(
  mapToStateProps,
  mapToDispatchProps
)(Landing);