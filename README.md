# react-template

Bare starter project from scratch. No create-react-app. React, typescript, webpack, babel. Includes linter and prettier baked in.

## Setup

Create a `.env` file at root and provide a color value `COLOR=green`

## Quick start

- yarn install
- yarn start
- http://localhost:8080/

## Production build

Build `bundle.js` for deployment. Test it locally. Build in root, and start in `build` folder.

- yarn build
- cd build
- npx serve

## Jest

Followed: http://www.thedreaming.org/2020/11/09/jest-for-web-projects/

- yarn add -D jest babel-jest chai chai-jest chai-dom identity-obj-proxy
- yarn add -D @testing-library/jest-dom
- yarn add -D react-test-renderer
