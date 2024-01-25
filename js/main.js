import {
    inputBill,
    inputCustom,
    inputNumberPeople,
    fivePercent,
    tenPercent,
    fifteenPercent,
    twentyFivePercent,
    fiftyPercent,
    resetButton,
    tipAncount,
    total
} from './elements.js'
import { Events } from './events.js'
import { Controls } from './controls.js'
import { Calculation } from './calculation.js'

const controls = Controls({
    inputCustom,
    fivePercent,
    tenPercent,
    fifteenPercent,
    twentyFivePercent,
    fiftyPercent,
    inputBill,
    inputCustom,
    inputNumberPeople,
    tipAncount,
    total,
    resetButton,
})

const calculation = Calculation({
    inputBill,
    inputNumberPeople,
    tipAncount,
    total,
})

const events = Events({
    inputBill,
    inputCustom,
    inputNumberPeople,
    fivePercent,
    tenPercent,
    fifteenPercent,
    twentyFivePercent,
    fiftyPercent,
    resetButton,
    resetButtons: controls.resetButtons,
    resetInputs: controls.resetInputs,
    selectedButtonPercent: controls.selectedButtonPercent,
    removeNaN: controls.removeNaN,
    addPercentage: calculation.addPercentage
})

setInterval(calculation.calculation, 100)