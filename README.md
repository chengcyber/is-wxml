# is-wxml

> Check whether content is wxml

##  Install

```
npm install --save is-wxml
```

## Usage

```
const isWxml = require('is-wxml');

isWxml('<view>I am WXML</view>');
// => true

isWxml('<image />');
// => true

isWxml('<p>HTML</p>');
// => false

isWxml('>+++++++>++++++++++>+++>+<<<<-');
// => false

```

## Local Dev

```
git clone git@github.com:kimochg/is-wxml.git
cd is-wxml
npm install
npm run test
```

## LICENSE

MIT © [Cheng Liu](https://github.com/kimochg)

highly inspired by [is-html](https://github.com/sindresorhus/is-html)
