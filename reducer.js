import levels from './levels'

const initialState = {
level: levels[1],
xDimension: '',
yDimension: '',
xDimensionFunctionF: '',
yDimensionFunctionG: '',
zDimensionFunctionH: '',
}

//ACTION TYPES
const CHANGE_LEVEL = 'CHANGE_LEVEL'
const CHANGE_X = 'CHANGE_X'
const CHANGE_Y = 'CHANGE_Y'
const CHANGE_Z = 'CHANGE_Z'
const CHANGE_F = 'CHANGE_F'
const CHANGE_G = 'CHANGE_G'
const CHANGE_H = 'CHANGE_H'

//ACTION CREATORS

const changeXActionCreator = keyString => ({type: CHANGE_X, keyString})
const changeYActionCreator = keyString => ({type: CHANGE_Y, keyString})
const changeGActionCreator = keyString => ({type: CHANGE_G, keyString})
const changeHActionCreator = keyString => ({type: CHANGE_H, keyString})

function reducer (state = initialState, action) {
    switch(action.type){
      case CHANGE_X:
      return Object.assign({},state,{xDimension: action.keyString})
      case CHANGE_Y:
      return Object.assign({},state,{yDimension: action.keyString})
      case CHANGE_G:
      return Object.assign({},state,{yDimensionFunctionG: action.keyString})
      case CHANGE_H:
      return Object.assign({},state,{zDimensionFunctionH: action.keyString})
    }
    return state;
  }

export default reducer
export {changeXActionCreator, changeYActionCreator, changeGActionCreator, changeHActionCreator}
