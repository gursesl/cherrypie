import jwt from 'jsonwebtoken'
import _ from 'lodash'
import bcrypt from 'bcrypt'

export const createTokens = (user, secret, secret2) => {
  const createToken = jwt.sign(
    {
      user: _.pick(user, ['id']),
    },
    secret,
    {
      expiresIn: '1h',
    }
  )

  const createRefreshToken = jwt.sign(
    {
      user: _.pick(user, 'id'),
    },
    secret2,
    {
      expiresIn: '7d',
    }
  )

  return [createToken, createRefreshToken]
}

export const refreshTokens = async (token, refreshToken, models, SECRET) => {
  let userId = -1
  try {
    const { user: { id } } = jwt.decode(refreshToken)
    userId = id
  } catch (err) {
    return {}
  }

  if (!userId) {
    return {}
  }

  const user = await models.User.findOne({ id: userId })

  if (!user) {
    return {}
  }

  try {
    jwt.verify(refreshToken, user.refreshSecret)
  } catch (err) {
    return {}
  }

  const [newToken, newRefreshToken] = await createTokens(user, SECRET, user.refreshSecret)
  return {
    token: newToken,
    refreshToken: newRefreshToken,
    user,
  }
}

export const login = async (email, password, models, SECRET, SECRET2) => {
  const user = await models.User.findOne({ email })
  if (!user) {
    // user with provided email not found
    return {
      ok: false,
      errors: [{ path: 'email', message: 'Email not found.' }],
    }
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    // bad password
    return {
      ok: false,
      errors: [{ path: 'password', message: 'Wrong password.' }],
    }
  }

  const [token, refreshToken] = createTokens(user, SECRET, SECRET2)

  return {
    ok: true,
    token,
    refreshToken,
  }
}
