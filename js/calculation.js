
export const Calculation = ({
    inputBill,
    inputNumberPeople,
    tipAncount,
    total
}) => {
    
    let percentage

    const addPercentage = (value) => {
        percentage = value
    }

    const addZero = (n) => n < 9 && n > 0 ? '0' + n : n

    const formatNumber = (n) => {
        const integer = parseInt(n)
        const float = ((n - integer) * 100).toFixed(0)
        const value = ('R$' + addZero(integer) + '.' + addZero(float)) 

        if( n == undefined){
            return 'R$00.00'
        } else if(value == 'R$NaN.NaN') {
            return 'R$00.00'
        } else {
            return value
        }
    }

    const calculation = () => {
        let bill = Number(inputBill.value)
        let numberPeople = Number(inputNumberPeople.value)
        const tip = (bill * (percentage / 100)) / numberPeople
        const totalAncount = ((tip * numberPeople) + bill) / numberPeople

        tipAncount.textContent = formatNumber(tip) 
        total.textContent = formatNumber(totalAncount)
    }

    return {
        addPercentage,
        calculation
    }
}
