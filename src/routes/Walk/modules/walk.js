import { mon }  from 'modules/State'

// ------------------------------------
// Constants
// ------------------------------------
export const NEXT = 'NEXT'
export const RUN = 'RUN'

// ------------------------------------
// Actions
// ------------------------------------
export function next () {
  return {
    type: NEXT
  }
}

export function run () {
  return {
    type: RUN
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const nextAsync = () => {
  return (dispatch) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(next())
        resolve()
      }, 3000)
    })
  }
}

export const runGo = () => {
  return (dispatch) => {
    dispatch(run())
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(next())
      }, 3000)
    })
  }
}

export const actions = {
  next,
  nextAsync,
  run,
  runGo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [NEXT]: (state, action) => Object.assign({}, state.next(), {
    goOn: state.isRunning
  }),
  [RUN]: (state, action) => Object.assign({}, state, {
    isRunning: true,
    goOn: false
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Object.assign({}, mon)
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  console.log(state)
  return handler ? handler(state, action) : state
}
