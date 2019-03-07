# react-weather
![rain](https://i.gyazo.com/b8b696ca664a4b2a528de8d884503d77.png)

# What is this?

`react-weather` is a React SPA to display a three-day weather forecast via the Apixu weather API

Made using some of my favourite technologies and ❤️
- React 16
- Node 11
- Fastify
- React Redux
- Material UI
- Babel 7
- Webpack 4

`react-weather` has polyfills included for most ES2015 features (via `@babel/polyfill`), and `window.fetch()`

# How to run

It is recommended that you use `npm@6.4.0+` and `node@11.3.0` to run `react-weather`, your results may vary with older versions of npm & node.

## Apixu API key
Albeit bad practice, for ease-of-use in demoing the app I have included my Apixu API key in the repository. If for some reason this doesn't work or you would like to use your own, add your key to `./api.key.js`.

## Install and run
```
$ npm i && npm start
```

A browser window will be automatically opened in your default browser at `http://localhost:3000`.

# What would I do with more time?

- Unit testing
- Production webpack config
