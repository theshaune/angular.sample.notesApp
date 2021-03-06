# Angular Notes App

## Why?

The scope of a notes app is quite small and a great way to kick the tyres of a framework.
The purpose of this is to learn experience and learn the Angular framework.


## What is this?

This is a simple notes app to explore the functionality of [Angular 1.5.9](http://angularjs.org) framework.
Each apps has been built with a different programming methods and utilizing different Angular features.
Each app can be found in its respective folder. 
The folder structures are very similar but each app may vary slightly.
I hope this repository helps others that are interested in getting started with Angular.


## How to use

I recommend using [BrowserSync](https://browsersync.io/) to run each app.
Change the pathname to suit which app you would like to run.

```
npm install -g browser-sync
browser-sync start --server --port 3001 --f="./*" --ss="./prototypal"
browser-sync start --server --port 3001 --f="./*" --ss="./seperation-of-concerns"
browser-sync start --server --port 3001 --f="./*" --ss="./compile"
```


## Useful Reading Material

- [Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
- [Prototype based Angular Controller Example](https://docs.angularjs.org/api/ng/directive/ngController#example)