import vis from 'vis'
import options from './options'

const sadParabola = input => -0.15 * Math.pow((input - 15), 2) + 30

const tunnelAlongY = (xInput, yInput) => -0.15 * Math.pow((yInput - 15), 2) + 30

const originalValue = input => input

const collectionOfHelpers = {
    sadParabola,
    tunnelAlongY,
    originalValue
}

const stateToChart = (state, container, actualContainer) => {
    console.log(state)
    console.log(collectionOfHelpers.sadParabola(2))
    const xData = state.level.data.map(item => {
        return item[state.xDimension] || 0
    })
    
    const yData = state.level.data.map(item => {
        return item[state.yDimension] || 0
    })
    console.log('yData: ', yData)
    const isTargetData = state.level.data.map(item => {
        return item.isTarget
    })
    const modifiedX = xData.map(val => {
        const modify = collectionOfHelpers[state.xDimensionFunctionF] || originalValue
        return modify(val)
    })
    
    const modifiedY = yData.map(val => {
        const modify = collectionOfHelpers[state.yDimensionFunctionG] || originalValue
        return modify(val)
    })
    console.log('modified Y: ', modifiedY)
    const dataLength = modifiedX.length > modifiedY.length? modifiedX.length : modifiedY.length
    const zFunc = collectionOfHelpers[state.zDimensionFunctionH] || function(){return 0}
    const chartData = [...Array(dataLength)].map((val, idx) => {
        const zValue = zFunc(modifiedX[idx], modifiedY[idx])
        return {
            x: modifiedX[idx],
            y: modifiedY[idx],
            z: zValue,
            style: isTargetData[idx]
        }
    })

    console.log(chartData)
    // while (container.firstChild) {
    //     container.removeChild(container.firstChild);
    // }
    // 
    if (container){
        container.setData(chartData)
        container.redraw()
    }
}

export {sadParabola, tunnelAlongY, originalValue, stateToChart}
