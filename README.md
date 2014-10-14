## ember-cli-moment has been deprecated!

1. if you need just momentjs, use ```bower install momentjs --save```
2. if you need components and helpers use the addon ```npm install ember-moment --save```

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
