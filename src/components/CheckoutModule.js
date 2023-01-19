import React from "react"
import {
    PaymentElement,
    useElements,
    useStripe,
    Elements
} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.GATSBY_PUBLIC_KEY)

export default function CheckoutModule() {
    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret, setClientSecret] = React.useState("")
    const [message, setMessage] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        if (!stripe) {
            return
        }
        const clientSecret = new URLSearchParams(window.location.search).get("clientSecret")
        if (!clientSecret) {
            return
        }
        stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment successful")
                    break
                case "processing":
                    setMessage("Payment processing")
                    break
                case "requires_payment_method":
                    setMessage("No payment method")
                    break
                default:
                    setMessage("Payment failed")
                    break
            }
        })
    }, [stripe])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!stripe || !elements) {
            return
        }
        setIsLoading(true)
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:3000"
            }
        })
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message)
        } else {
            setMessage("An unknown error occurred")
        }
        setIsLoading(false)
    }

    React.useEffect(() => {
        if (!stripe) {
            return
        }
        fetch("http://localhost:4242/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({items: [{id: "Donation", quantity: 1}]}),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
    }, [stripe]);

    const options = {
        clientSecret: clientSecret,
    }

  return (
      <Elements stripe={stripePromise} options={options}>
          <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" />
            <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
      </Elements>
  )
}
