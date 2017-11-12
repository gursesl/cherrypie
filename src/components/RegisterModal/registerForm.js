import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Checkbox, Segment, Message } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form/immutable'
import validator from 'validator'
import gql from 'graphql-tag'
import client from '../../apolloClient'

const nameField = field => (
  <div>
    <Form.Input
      {...field.input}
      fluid
      icon="user"
      iconPosition="left"
      placeholder="Full name"
    />
    {
      field.meta.touched && field.meta.error &&
      <Message size="mini" negative visible={false}>
        <Message.Header>{field.meta.error}</Message.Header>
      </Message>
    }
  </div>
)

const emailField = field => (
  <div>
    <Form.Input
      {...field.input}
      fluid
      icon="envelope"
      iconPosition="left"
      placeholder="Email address"
    />
    {
      field.meta.touched && field.meta.error &&
      <Message size="mini" negative visible={false}>
        <Message.Header>{field.meta.error}</Message.Header>
      </Message>
    }
  </div>
)

const passwordField = field => (
  <div>
    <Form.Input
      {...field.input}
      fluid
      icon="lock"
      iconPosition="left"
      placeholder="Password"
      type="password"
    />
    {
      field.meta.touched && field.meta.error &&
      <Message size="mini" negative visible={false}>
        <Message.Header>{field.meta.error}</Message.Header>
      </Message>
    }
  </div>
)

const userTypeField = field => (
  <div>
    <Form.Field label="Account type" control="select" {...field.input}>
      <option value="">Select account type...</option>
      <option value="user">Regular</option>
      <option value="family">Family Member</option>
      <option value="caregiver">Caregiver</option>
      <option value="provider">Provider</option>
    </Form.Field>
    {
      field.meta.touched && field.meta.error &&
      <Message size="mini" negative visible={false}>
        <Message.Header>{field.meta.error}</Message.Header>
      </Message>
    }
  </div>
)

const agreeField = field => (
  <Form.Field width="10" {...field.input}>
    <Checkbox label="I agree with the terms &amp; conditions" />
  </Form.Field>
)

const validate = (values) => {
  const errors = {}
  if (!values.get('fullName') || !validator.isLength(values.get('fullName'), { min: 3, max: 100 })) {
    errors.fullName = 'Please enter your full name.'
  }
  if (!values.get('email') || !validator.isEmail(values.get('email'))) {
    errors.email = 'A valid email address is required.'
  }
  if (!values.get('password') || !validator.isLength(values.get('password'), { min: 3, max: 100 })) {
    errors.password = 'A valid password between 3-100 characters is required.'
  }
  if (!values.get('userType')) {
    errors.userType = 'Please select a user type.'
  }
  return errors
}

const asyncValidate = values =>
  client.query({
    query: gql`
      query findUserByEmail(
        $email: String!) {
        findUserByEmail(
          email: $email
        )
        {
          id
        }
      }
    `,
    variables: {
      email: values.get('email'),
    },
  }).then((response) => {
    if (response.data.findUserByEmail) {
      throw {email: `${values.get('email')} has already been used.` } //eslint-disable-line
    }
  })

const RegisterForm = (props) => {
  const {
    handleSubmit, pristine, submitting,
  } = props

  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Segment stacked>
        <Field name="fullName" component={nameField} />
        <Field name="email" component={emailField} />
        <Field name="password" component={passwordField} />
        <Field name="userType" component={userTypeField} />
        <Field name="agree" component={agreeField} />
        <Button color="teal" fluid size="large" type="submit" disabled={pristine || submitting}>Create Account</Button>
      </Segment>
    </Form>
  )
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({
  form: 'registrationForm',
  validate,
  asyncValidate,
})(RegisterForm)
