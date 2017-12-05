import dotenv from 'dotenv'
import models from '..'

dotenv.config()

describe('Models', () => {
  it('should export User', () => {
    expect(models.User).toBeDefined()
  })
})
