module.exports = {
  "extends": ["airbnb", "airbnb/hooks"],
  "rules": {
    "linebreak-style": ["error", /^win/.test(process.platform) ? "windows" : "unix"],
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}]
  },
  "env": {
      "es6": true,
      "node": true,
      "browser": true,
      "jest": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "parser": "babel-eslint"
}
