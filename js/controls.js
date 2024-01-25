export const Controls = ({
    inputCustom,
    fivePercent,
    tenPercent,
    fifteenPercent,
    twentyFivePercent,
    fiftyPercent,
    inputBill,
    inputNumberPeople,
    tipAncount,
    total,
    resetButton,

}) => {
    const selectedButtonPercent = (button) => {
    if(button.classList.contains("selectedButton")){
        button.classList.remove('selectedButton')
    } else {        
        resetButtons()
        button.classList.add('selectedButton')
        inputCustom.value = ""
    }
    }

    const removeNaN = (input) => {
        let value = input.value;
        let onlyNumbers = value.replace(/[^0-9.]/g, '');
        input.value = onlyNumbers;
    }
    const resetButtons = () => {
        fivePercent.classList.remove('selectedButton')
        tenPercent.classList.remove('selectedButton')
        fifteenPercent.classList.remove('selectedButton')
        twentyFivePercent.classList.remove('selectedButton')
        fiftyPercent.classList.remove('selectedButton')
    }
    const resetInputs = () => {
        inputBill.value = "" 
        inputCustom.value = "" 
        inputNumberPeople.value = ""
        tipAncount.textContent = "R$00.00"
        total.textContent = "R$00.00"
    }

    const activateResetButton = () => {
        const logic = (
            inputBill.value !== "" ||
            inputCustom.value !== "" ||
            inputNumberPeople.value !== "" ||
            fivePercent.classList.contains("selectedButton") ||
            tenPercent.classList.contains("selectedButton") ||
            fifteenPercent.classList.contains("selectedButton") ||
            twentyFivePercent.classList.contains("selectedButton") ||
            fiftyPercent.classList.contains("selectedButton")
            )
        if(logic) {
            resetButton.classList.add('selectedButton')
            resetButton.style.pointerEvents = 'auto';
        } else{
            resetButton.classList.remove('selectedButton')
            resetButton.style.pointerEvents = 'none';
        }
    }

    setInterval(activateResetButton, 100)

    return {
        selectedButtonPercent,
        removeNaN,
        resetButtons,
        resetInputs
    }
}