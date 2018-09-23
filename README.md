Frontend & Backend Example
==========================

Example of how to setup a basic express web app with separate frontend
and backend projects.
A group of coop students at work are building a web app and want
to use node/express.
I created this repo to help get them started.


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
    npm run all
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
