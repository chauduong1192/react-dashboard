module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules":{
        "react/jsx-filename-extension" : 0,
        "react/prefer-stateless-function": 0,
        "react/forbid-prop-types": 0,
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    
};