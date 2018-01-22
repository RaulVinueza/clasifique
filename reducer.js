import levels from './levels'

const initialState = {
level: levels[0],
xDimension: [],
yDimension: [],
zDimension: [],
xDimensionFunctionF: () => {},
yDimensionFunctionG: () => {},
zDimensionFunctionH: () => {},
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


function reducer (state = initialState, action) {
    return state;
  }

export default reducer
