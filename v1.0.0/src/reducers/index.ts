import {
  INIT_FROM_PERSISTED,
} from '@/constants'

interface State {

}

interface Action {
  type: string
  payload: { [key: string]: any }
}

interface ActionMap {
  [key: string]: () => State
}

const initialState: State = {

}

export default function rootReducer (state = initialState, action: Action): State {
  const actionMap: ActionMap = {
    [INIT_FROM_PERSISTED] () {
      return Object.assign({}, state, action.payload)
    }
  }

  const matchedAction = actionMap[action.type]

  return typeof matchedAction === 'function'
    ? matchedAction()
    : state
}