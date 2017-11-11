import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Checkbox, Segment } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form/immutable'

const nameField = field => (
  <Form.Input
    {...field.input}
    fluid
    icon="user"
    iconPosition="left"
    placeholder="Full name"
  />
)

const emailField = field => (
  <Form.Input
    {...field.input}
    fluid
    icon="envelope"
    iconPosition="left"
    placeholder="Email address"
  />
)

const passwordField = field => (
  <Form.Input
    {...field.input}
    fluid
    icon="lock"
    iconPosition="left"
    placeholder="Password"
    type="password"
  />
)

const userTypeField = field => (
  <Form.Field label="Account type" control="select" {...field.input}>
    <option value="">Select account type...</option>
    <option value="user">Regular</option>
    <option value="family">Family Member</option>
    <option value="caregiver">Caregiver</option>
    <option value="provider">Provider</option>
  </Form.Field>
)

const agreeField = field => (
  <Form.Field width="10" {...field.input}>
    <Checkbox label="I agree with the terms &amp; conditions" />
  </Form.Field>
)

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
})(RegisterForm)
