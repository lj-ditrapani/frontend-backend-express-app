Frontend & Backend Example
==========================

Example of how to setup a basic express web app with separate frontend and backend projects.


Setup
=====

First time

```
    cd frontend
    npm install
    cd ../backend
    npm install
    cd ..
```

For each build

```
    cd frontend
    npm run all
    cd ../backend
    npm start
```


Dependencies
============

both
----
- dev
    - mocha
    - eslint
    - js-beautify

frontend
--------
- jQuery
- dev
    - browserify

backend
-------
- express


Future
======

- Frontend
    - bootsrtrap
    - dev
        - jsdom
        - some kind of minify/uglify lib?
