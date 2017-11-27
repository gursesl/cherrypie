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
      user: _.pick(user, ['id']),
    },
    secret2,
    {
      expiresIn: '7d',
    }
  )
  return [createToken, createRefreshToken]
}

export const refreshTokens = async (token, refreshToken, models, SECRET, SECRET2) => {
  let userId = 0
  try {
    const { user: { id } } = jwt.decode(refreshToken)
    userId = id
  } catch (err) {
    return {}
  }

  if (!userId) {
    return {}
  }

  const user = await models.User.findOne({ _id: userId })

  if (!user) {
    return {}
  }

  try {
    jwt.verify(refreshToken, SECRET2)
  } catch (err) {
    return {}
  }

  const [newToken, newRefreshToken] = await createTokens(user, SECRET, SECRET2)
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

  const [token, refreshToken] = await createTokens(user, SECRET, SECRET2)

  return {
    ok: true,
    token,
    refreshToken,
    id: user.id,
  }
}

export const logout = (user, SECRET, SECRET2) => {
  const aSECRET = SECRET + Math.random(10000000).toString()
  const aSECRET2 = SECRET2 + Math.random(10000000).toString()
  // Create tokens with modified secrets
  const [token, refreshToken] = createTokens(user, aSECRET, aSECRET2)

  return {
    ok: true,
    token,
    refreshToken,
  }
}
