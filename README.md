## ember-cli-moment

This is an npm package that contains Moment.js library packaged as an Ember CLI Addon.

### Installation

To install simply run

```bash
npm install --save-dev ember-cli-moment
```
in your Ember CLI project's root.

Moment will be added as a global variable with a global namespace. For this to
work with jshint you must update the file .jshintrc.

```bash
  ...
  "predef": {
    "document": true,
    "window": true,
    "WowENV": true,
    "moment": true
  },
  ...

```


### References

* [moment](https://github.com/moment/moment)
