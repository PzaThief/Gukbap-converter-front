module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true 
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
          }      
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        'linebreak-style': 0,
        'import/prefer-default-export': 0,
        'import/extensions': 0,
        'no-use-before-define': 0,
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        'import/no-unresolved': 0,
        'react/react-in-jsx-scope': 0,
        'import/no-extraneous-dependencies': 0,
        'no-shadow': 0,
        'react/prop-types': 0,
        'react/jsx-filename-extension': [
          2,
          { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
    },
    "settings": {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
    }    
}
