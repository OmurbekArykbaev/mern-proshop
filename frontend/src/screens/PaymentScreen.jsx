import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Form,
  Button,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
  FormCheck,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import FormContainer from "../components/FormContainer"
import CheckoutSteps from "../components/CheckoutSteps"
import { useNavigate } from "react-router-dom"
import { savePaymentMethod } from "../redux/actions/cartActions"

const PaymentScreen = () => {
  const history = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    history("/shipping")
  }

  const [payment, setPaymentMethod] = useState("Paypal")

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(payment))
    history("/placeorder")
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Способ оплаты</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <FormLabel as="legend">Выберите способ</FormLabel>
          <Col>
            <FormCheck
              type="radio"
              label="Paypal or Credit Card"
              id="Paypal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></FormCheck>
            {/* <FormCheck
              type="radio"
              label="Stripe"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></FormCheck> */}
          </Col>
        </FormGroup>
        <Button type="submit" variant="primary">
          Продолжить
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
