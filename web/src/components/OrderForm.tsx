import React from 'react'
import {
  Button
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import axios from "axios"

import { InputField } from './FormInput'
import { trelloUrl } from "../utils/trelloUrl"

const OrderForm = () => {

  return (
    <Formik
      initialValues={{ 
        firstName: "",
        surname: "",
        emailAddress: "",
        phoneNumber: ""
       }}
      onSubmit={(values, actions) => {
        axios.post(`${trelloUrl}`)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      }}
    >
      {(props) => (
        <Form>
          <InputField
            name="firstName"
            placeholder="First Name"
            label="First Name"
          />
          <InputField
            name="surname"
            placeholder="Surname"
            label="Surname"
          />
          <InputField
            name="emailAddress"
            placeholder="Email Address"
            label="Email Address"
          />
          <InputField
            name="phoneNumber"
            placeholder="Phone Number"
            label="Phone Number"
          />
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'

          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}
export default OrderForm