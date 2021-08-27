const fs = require('fs').promises

const writeOnFile = (content, file) => {
  return fs.writeFile(`./${file}`, content, 'utf-8')
  .then(() => { return 'ok' })
  .catch((err) => err)
}

module.exports = writeOnFile;