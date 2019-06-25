const fs = require('fs');

describe('copy files', () => {
  beforeEach(done => {
    fs.writeFile('./copy-me.txt', 'copy me' (done));
  });
  afterEach(done => {
    fs.unlink('copy-me.txt' (done));
  });
  it('copies a file from src to dest', done => {
    const src = ('copy-me.txt');
    const dest = ('copy-me.txt');
    copy(src, dest, err => {
      fs.readFile('copy-me-copy.txt'), {}
    })

  })
});