const path = require('path');

function join(...args) {
  let fullPath = path.join(...args);

  if (process.platform === 'win32') {
    fullPath = fullPath.replace(/\\/g, '/');
  }

  return fullPath;
}

const lintStagedConfigPath = join(__dirname, 'lint-staged.config.js');


module.exports = {
  hooks: {
    'pre-commit': `lint-staged -c ${lintStagedConfigPath}`,
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
  },
};
