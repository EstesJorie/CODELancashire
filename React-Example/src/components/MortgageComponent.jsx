import React, { createContext, useContext, useState } from 'react'
import InputGroup from '../components/InputLoop'

const MortgageContext = createContext({
        monthlPayment: 0,
        setMonthlyPayment: (monthlPayment) => { },
    }
)

export function MortgageForm(){
    const {setMonthlyPayment} = useContext(MortgageContext)

    function handleSubmit(e){
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        const {amount, term, interest} = data

        const monthlyInterest = interest / 100 / 12;
        const months = term * 12;
        setMonthlyPayment(amount * monthlyInterest / (1-Math.pow(1 + monthlyInterest, -months)));

        //const totalPayment = monthlPayment * months;
        //const totalInterest = totalPayment - amount;
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-l-xl">
            <InputGroup type='text' label='Mortgage Amount' placeholder="Amount in GBP" name='amount' />
            <div className='grid grid-cols-2 gap-4'>
                <InputGroup type='number' label='Mortgage Term' placeholder="5 years" name='term' />
                <InputGroup type='text' label='Interest Rate' placeholder="5%" name='interest' /> 
            </div>
            <button className='bg-[#dada33] px-3 py-2 rounded-full fomt-semibold'>Calculate</button>
        </form>
    )
}

export function MortgageResult(){
    const {monthlPayment} = useContext(MortgageContext)
    return (
        <div className='bg-[#133040] w-full h-full rounded-bl-4xl rounded-r-xl text-white'>
                {parseFloat(monthlPayment).toFixed(2)}
        </div>
    )
}

export default function MortgageComponent(){
    const [monthlPayment, setMonthlyPayment] = useState(0)
    return ( 
        <MortgageContext.Provider value={{monthlPayment, setMonthlyPayment}}>
            <div class='grid grid-cols-2 items-center max-w-xl mx-auto '>
                <MortgageForm />
                <MortgageResult />
            </div>
        </MortgageContext.Provider>
    )
}

MortgageComponent.Form = MortgageForm
MortgageComponent.Result = MortgageResult