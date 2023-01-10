module.exports = {
    verbose: true,
    rootDir: './',
    transform: {
        '^.+\\.js?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^src/(.*)': '<rootDir>/src/$1',
    }
}