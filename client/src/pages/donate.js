import * as React from "react"
import CoreLayout from "../components/layouts/CoreLayout"
import CheckoutForm from "../components/CheckoutForm"

const DonatePage = () => {
  return (
      <div className="w-full">
        <CoreLayout>
          <CheckoutForm />
        </CoreLayout>
      </div>
  )
}

export default DonatePage