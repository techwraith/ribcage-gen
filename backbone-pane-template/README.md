# {{PascalName}} Pane

{{name}} does a thing. It's intended to be a part of something flow. Describe step below in the next section.

## Usage
```js
  var {{PascalName}} = require('{{name}}')
    , options = {}
    , {{camelName}} = new {{PascalName}}(options)
```

```css
@import "{{name}}";
```

## JS Options
### `<String> option` **Required**
Defaults to "hi". Controls X.

## JS Methods
### `doesThings(<Number> arg)`
Does X. Arg is used for Y. Returns Z.

## JS Events
### eventName `(<Number> arg)`
Emitted when Z happens. `arg` is a Y.

======

# {{PascalName}} Step

{{name}} does a thing. It's intended to be a part of something flow.

## JS Options
### `<String> option` **Required**
Defaults to "hi". Controls X.

## JS Methods
### `doesThings(<Number> arg)`
Does X. Arg is used for Y. Returns Z.

## JS Events
### eventName `(<Number> arg)`
Emitted when Z happens. `arg` is a Y.

## Tests
Tests are in [prova](https://github.com/azer/prova). You can run them with:

```bash
prova -b -e -l chrome -t hbsfy test.js
```

## Developing
Install [ribcage](https://github.com/Techwraith/ribcage)

```sh
npm i -g ribcage
ribcage preview .
```

Open [http://localhost:4000/default](http://localhost:4000/default)

