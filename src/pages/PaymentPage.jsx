import React from 'react'
import PaymentForm from '../components/PaymentForm'
import PaymentMethod from '../components/PaymentMethod'
import PaymentFooter from '../components/PaymentFooter'

const PaymentPage = () => {
  return (
    <section>
        <PaymentForm />
        <PaymentMethod />
        <PaymentFooter />
    </section>
  )
}

export default PaymentPage