import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Form, Checkbox, Segment, Message } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form/immutable'
import validator from 'validator'
import client from '../../apolloClient'
import findUserByEmailQuery from '../../graphql/queries/findUserByEmailQuery'
import * as c from '../../../gqlserver/src/constants'

const StyledInputDiv = styled.div`margin: 10px 0;`

const nameField = field => (
  <StyledInputDiv>
    <Form.Input {...field.input} fluid icon="user" iconPosition="left" placeholder="Full name" />
    {field.meta.touched &&
      field.meta.error && (
        <Message size="mini" negative visible={false}>
          <Message.Header>{field.meta.error}</Message.Header>
        </Message>
      )}
  </StyledInputDiv>
)

const emailField = field => (
  <StyledInputDiv>
    <Form.Input
      {...field.input}
      fluid
      icon="envelope"
      iconPosition="left"
      placeholder="Email address"
      loading={field.meta.asyncValidating}
    />
    {field.meta.touched &&
      field.meta.error && (
        <Message size="mini" negative visible={false}>
          <Message.Header>{field.meta.error}</Message.Header>
        </Message>
      )}
  </StyledInputDiv>
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
    {field.meta.touched &&
      field.meta.error && (
        <Message size="mini" negative visible={false}>
          <Message.Header>{field.meta.error}</Message.Header>
        </Message>
      )}
  </div>
)

const userTypeField = field => (
  <StyledInputDiv>
    <Form.Field label="Account type" control="select" {...field.input}>
      <option value="">Select account type...</option>
      <option value={c.USER_TYPE_REGULAR}>Regular</option>
      <option value={c.USER_TYPE_FAMILY}>Family Member</option>
      <option value={c.USER_TYPE_CAREGIVER}>Caregiver</option>
      <option value={c.USER_TYPE_PROVIDER}>Provider</option>
    </Form.Field>
    {field.meta.touched &&
      field.meta.error && (
        <Message size="mini" negative visible={false}>
          <Message.Header>{field.meta.error}</Message.Header>
        </Message>
      )}
  </StyledInputDiv>
)

const agreeField = field => (
  <Form.Field width="10" {...field.input}>
    <Checkbox label="I agree with the terms &amp; conditions" />
  </Form.Field>
)

const validate = (values) => {
  const errors = {}
  if (
    !values.get('fullName') ||
    !validator.isLength(values.get('fullName'), { min: 3, max: 100 })
  ) {
    errors.fullName = 'Please enter your full name.'
  }
  if (!values.get('email') || !validator.isEmail(values.get('email'))) {
    errors.email = 'A valid email address is required.'
  }
  if (
    !values.get('password') ||
    !validator.isLength(values.get('password'), { min: 3, max: 100 })
  ) {
    errors.password = 'A valid password between 3-100 characters is required.'
  }
  if (!values.get('userType')) {
    errors.userType = 'Please select a user type.'
  }
  return errors
}

const asyncValidate = values =>
  client
    .query({
      query: findUserByEmailQuery,
      variables: {
        email: values.get('email'),
      },
    })
    .then((response) => {
      // console.log(response)
      if (response.data.findUserByEmail) {
        throw { email: `${values.get('email')} has already been used.` } //eslint-disable-line
      }
    })

const RegisterForm = (props) => {
  const { handleSubmit, pristine, submitting } = props

  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Segment stacked>
        <Field name="fullName" component={nameField} />
        <Field name="email" component={emailField} />
        <Field name="password" component={passwordField} />
        <Field name="userType" component={userTypeField} />
        <Field name="agree" component={agreeField} />
        <Button color="teal" fluid size="large" type="submit" disabled={pristine || submitting}>
          Create Account
        </Button>
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
