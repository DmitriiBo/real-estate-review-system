const fs = require('fs');
const path = require('path');

function join(...args) {
  let fullPath = path.join(...args);

  if (process.platform === 'win32') {
    fullPath = fullPath.replace(/\\/g, '/');
  }

  return fullPath;
}

const lintStagedConfigPath = join(__dirname, 'lint-staged.config.js');;


module.exports = {
  hooks: {
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
    'pre-commit': `lint-staged -c ${lintStagedConfigPath}`,
  },
};
