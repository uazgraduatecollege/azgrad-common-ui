const neostandard = require('neostandard')

const configs = neostandard({
  env: ['browser'],
  globals: { process: 'readonly' },
  ignores: neostandard.resolveIgnoresFromGitignore()
}).map((config) => {
  if (config.name === 'neostandard/jsx' || config.name === 'neostandard/style/jsx') {
    const { ignores, ...rest } = config
    return { ...rest, files: ['**/*.js'] }
  }
  return config
})

module.exports = [
  ...configs,
  {
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    files: ['src/__tests__/**/*.js'],
    rules: {
      'no-undef': 'off'
    }
  }
]
