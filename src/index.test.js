import jsdom from 'jsdom'
import fs from 'fs'

const { JSDOM } = jsdom

describe('index.html', () => {
  it('should have a root div element', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8")
    const dom = new JSDOM(index)
    const rootDiv = dom.window.document.getElementById('root')
    expect(rootDiv).toBeDefined()
    done();
    dom.window.close();
  });
});
