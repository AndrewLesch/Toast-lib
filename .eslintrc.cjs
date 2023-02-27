module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        "import/no-extraneous-dependencies": [
            "error",
            {
              "devDependencies": [
                "**/*.stories.*",
                "**/.storybook/**/*.*",
              ],
              "peerDependencies": true
            }
          ],
          "import/extensions": [
            "error",
            "always",
            {
                "pattern": {
                    "jsx": "never",
                    "tsx": "never"
                }
            }
        ]
    },
    "settings": {
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true
            }
        }
    }
}