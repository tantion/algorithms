# Unit Test boilerplate

Unit test boilerplate for extensions or components that rely on the files in `vendor/`

```bash
$ ll vendor 
total 1008
-rw-r--r--  1  53155 Oct 22 13:58 backbone-0.9.2.js
-rw-r--r--  1 266882 Oct 22 14:05 jquery-1.8.2.js
-rw-r--r--  1 133962 Oct 22 14:03 lodash-0.8.2.js
-rw-r--r--  1  54474 Nov 13 12:53 marionette-1.0.0-beta5.js
```

## Getting started

_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._


Install grunt's command line interface if not already installed

```js
$ sudo npm install -g grunt-cli
```

Install dependencies

```js
$ npm install
```

## Running tests

```js
$ grunt test
```

## Viewing tests in your browser

```js
$ grunt test-web
```

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md


## Release History

 * 2012-11-12 - v0.1.0 - Initial release

