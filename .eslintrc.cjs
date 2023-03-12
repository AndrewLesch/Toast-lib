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
        "@typescript-eslint",
        "simple-import-sort"
    ],
    "rules": { 
        "simple-import-sort/imports": [
            "error",
            {
              "groups": [
                ["^react", "^@?\\w"],
                ["^(@|components)(/.*|$)"],
                ["^\\u0000"],
                ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                ["^.+\\.?(css)$"]
              ]
            }
          ],
        "@typescript-eslint/no-unused-vars": ["error"],
        "no-shadow": "off",
        "no-plusplus": "off",
        "no-use-before-define": "off",
        'react/jsx-props-no-spreading': 'off',
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
                    "tsx": "never",
                    "ts": "never",
                }
            }
        ]
    },
    "settings": {
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true
            },
        }
    }
}
