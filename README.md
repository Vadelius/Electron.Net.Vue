# Electron-Vue with .Net Core 2 [![Build status](https://ci.appveyor.com/api/projects/status/xobiq6r9i8yb5ajk?svg=true)](https://ci.appveyor.com/project/Vadelius/electron-net-vue)

![logo](https://cdn.rawgit.com/Vadelius/Electron.Net.Vue/07af5883/electron.net-logo.png)
Make .Net Core apps with Electron/Vue front-end!




### Things you'll find in this package...

* Setup for communiciation between GUI (Electron) and API (.Net Core)
* Basic project structure with a **single** `package.json` setup
* Detailed [documentation](https://simulatedgreg.gitbooks.io/electron-vue/content/) (for electron-vue)
* Project scaffolding using [vue-cli](https://github.com/vuejs/vue-cli)
* Ready to use Vue plugins \([axios](https://github.com/mzabriskie/axios), [vue-electron](https://github.com/SimulatedGREG/vue-electron), [vue-router](https://github.com/vuejs/vue-router), [vuex](https://github.com/vuejs/vuex)\)\*
* Installed [vue-devtools](https://github.com/vuejs/vue-devtools) and [devtron](https://github.com/electron/devtron) tools for development
* Ability to easily package your electron app using [electron-packager](https://github.com/electron-userland/electron-packager) or [electron-builder](https://github.com/electron-userland/electron-builder)\*
* Ability to produce web output for browsers
* Use of [webpack](https://github.com/webpack/webpack) and [vue-loader](https://github.com/vuejs/vue-loader) with Hot Module Replacement
* Process restarting when working in main process
* HTML/CSS/JS pre-processor support with [vue-loader](https://github.com/vuejs/vue-loader/)
* ES6 with [`stage-0`](https://babeljs.io/docs/plugins/preset-stage-0/) by default
* Use of [`babili`](https://github.com/babel/babili) to remove the need of transpiling completely down to ES5
* ESLint   [`airbnb-base`](https://github.com/airbnb/javascript)
* Unit Testing \(with Karma + Mocha\)\
* End-to-end Testing \(with Spectron + Mocha\)\




### Getting Started

* You also need the latest .Net Core 2.0 SDK.
* The use of `node@^7` or higher required. electron-vue also officially recommends the [`yarn`](https://yarnpkg.org) package manager as it handles dependencies much better and can help reduce final build size with `yarn clean`. 



### Install dependencies and run your app
```
cd project/src/api
dotnet restore
dotnet publish -r win10-x64 --output bin/dist/win
cd project/
yarn
yarn run dev 
```

## That's it! Electron now Live with Hot Module Replacement




#### Extra goodies:


run unit & end-to-end tests
```
npm test
````

#lint all JS/Vue component files in `src/`

```npm run lint```



