# Archanae Native

[![Maintainability](https://api.codeclimate.com/v1/badges/677152ea6e0519355229/maintainability)](https://codeclimate.com/github/jpbarela/arachnae/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/677152ea6e0519355229/test_coverage)](https://codeclimate.com/github/jpbarela/arachnae/test_coverage)

Arachnae Native is a simple React component library. It uses Flow for typing. It is a pair with the [Arachnae]() system
and uses similar components

## Installation

A NPM package is hosted on the Github package repository. To install this package:

1. Create a Github Personal Access Token, https://github.com/settings/tokens.
   - It is recommended you use an access token with only read package access
1. Update your `.npmrc` file:
   1. Add your token to authenticate to the Github registry,
      `//npm.pkg.github.com/:_authToken=TOKEN`
   2. Add `@jpbarela:registry=https://npm.pkg.github.com/jpbarela`
1. You can now use your node package manager to add `@jpbarela/arachnae`

The repo also uses a theme extensively. You should add a `ThemeProvider` component relatively quickly in your component
hierarchy. There is a Flow `ThemeType` exported for type consistence.

## Testing

The primary tests for the repository are Jest tests using the `testing-library` framework. You can
run the tests with

```
npm run test
```
