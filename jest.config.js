module.exports = {
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    transformIgnorePatterns: [
      'node_modules/(?!(axios)/)',
    ],
    // rest of your configuration
  };