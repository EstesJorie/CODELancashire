import React from 'react'
import InputGroup from '../components/InputLoop'

export default function MortgageCalc() {
  return (
    <div>
        <form>
            <InputGroup type='text' label='Mortgage Amount' placeholder="Amount in GBP" name='amount' />
            <InputGroup type='number' label='Mortgage Term' placeholder="5 years" name='term' />
            <InputGroup type='text' label='Interest Rate' placeholder="5%" name='rate' />
        </form>
    </div>
  )
}
