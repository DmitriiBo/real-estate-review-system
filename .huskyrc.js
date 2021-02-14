const fs = require('fs');
const path = require('path');

function join(...args) {
  let fullPath = path.join(...args);

  if (process.platform === 'win32') {
    fullPath = fullPath.replace(/\\/g, '/');
  }

  return fullPath;
}

const defaultLintStagedConfigPath = join(__dirname, 'lint-staged.config.js');

let lintStagedConfigPath = defaultLintStagedConfigPath;

const userLintStagedConfigPath = join(process.cwd(), 'lint-staged.config.js');

if (fs.existsSync(userLintStagedConfigPath)) {
  lintStagedConfigPath = userLintStagedConfigPath;
}

module.exports = {
  hooks: {
    'pre-commit': `lint-staged -c ${lintStagedConfigPath}`,
  },
};
