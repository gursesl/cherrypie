import * as g from '../geoUtils'

describe('geoUtils', () => {
  it('should return false when format does not match a zip code', () => {
    expect(g.matchZipCode('SomeCity')).toBeFalsy()
  })

  it('should return true with a 5-digit zip code', () => {
    expect(g.matchZipCode('20165')).toBeTruthy()
  })

  it('should return true with a 9-digit zip code', () => {
    expect(g.matchZipCode('20165-1322')).toBeTruthy()
  })
})
