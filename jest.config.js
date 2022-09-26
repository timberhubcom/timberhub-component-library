module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest/test-setup.js'],
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
  },
};
