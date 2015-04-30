# {{PascalName}}

Describe what this component does!

## Usage
```js
  import React from 'react'
  import {{PascalName}} from '{{name}}'
  React.render(<{{PascalName}} />, document.createElement('div'))
```

```css
@import "{{name}}";
```

## Props
### `<String> option` **Required**
Defaults to "hi". Controls X.

## CSS Variables

## CSS Classes
CSS classes that might be useful for the outside world. Probably not too useful if this is mostly a JS component.

## Tests
Tests are in [tape](https://github.com/substack/tape). You can run them with:

```bash
browserify -t babelify --debug | smokestack
```

## Developing
Install [ribcage](https://github.com/Techwraith/ribcage)

```sh
npm i -g ribcage
ribcage preview .
# run with client side js enabled
ribcage preview . -s
```

Open [http://localhost:4001/default](http://localhost:4001/default)

