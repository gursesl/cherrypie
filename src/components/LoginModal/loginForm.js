import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Segment, Message } from 'semantic-ui-react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form/immutable'
import validator from 'validator'
import client from '../../apolloClient'
import findUserByEmailQuery from '../../graphql/queries/findUserByEmailQuery'

const StyledInputDiv = styled.div`margin: 10px 0;`

const emailField = field => (
  <StyledInputDiv>
    <Form.Input
      {...field.input}
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
  <StyledInputDiv>
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
  </StyledInputDiv>
)

const validate = (values) => {
  const errors = {}
  if (!values.get('email') || !validator.isEmail(values.get('email'))) {
    errors.email = 'A valid email address is required.'
  }
  if (
    !values.get('password') ||
    !validator.isLength(values.get('password'), { min: 3, max: 100 })
  ) {
    errors.password = 'A valid password between 3-100 characters is required.'
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
      if (!response.data.findUserByEmail) {
        throw { email: `${values.get('email')} is not registered.` } //eslint-disable-line
      }
    })

const RegisterForm = (props) => {
  const { handleSubmit, pristine, submitting } = props

  return (
    <Segment padded>
      <Form onSubmit={handleSubmit}>
        <Field name="email" component={emailField} />
        <Field name="password" component={passwordField} />
        <Button color="teal" fluid size="large" type="submit" disabled={pristine || submitting}>
          Sign in
        </Button>
      </Form>
    </Segment>
  )
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({
  form: 'loginForm',
  validate,
  asyncValidate,
})(RegisterForm)
