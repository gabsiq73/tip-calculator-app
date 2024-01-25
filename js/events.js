export const Events = ({
    inputBill,
    inputCustom,
    inputNumberPeople,
    fivePercent,
    tenPercent,
    fifteenPercent,
    twentyFivePercent,
    fiftyPercent,
    resetButton,
    resetButtons,
    resetInputs,
    selectedButtonPercent,
    removeNaN,
    addPercentage,
}) => {

    fivePercent.addEventListener('click',() => {
        selectedButtonPercent(fivePercent)
        addPercentage(5)
    })
    tenPercent.addEventListener('click',() => {
        selectedButtonPercent(tenPercent)
        addPercentage(10)
    })
    fifteenPercent.addEventListener('click',() => {
        selectedButtonPercent(fifteenPercent)
        addPercentage(15)
    })
    twentyFivePercent.addEventListener('click',() => {
        selectedButtonPercent(twentyFivePercent)
        addPercentage(25)
    })
    fiftyPercent.addEventListener('click',() => {
        selectedButtonPercent(fiftyPercent)
        addPercentage(50)
    })
    
    inputBill.addEventListener("input", () => {
        removeNaN(inputBill)
    })
    
    inputCustom.addEventListener("input", () => {
        removeNaN(inputCustom)
        inputCustom != "" ? resetButtons() : 0
        addPercentage(inputCustom.value) 
    })
    
    inputNumberPeople.addEventListener("input", () => {
        removeNaN(inputNumberPeople)
    })
    
    resetButton.addEventListener('click', () => {
        resetButtons()
        resetInputs()
    })
}
