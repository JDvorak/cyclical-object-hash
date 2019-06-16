# object-hash [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Blake object hash.

## Usage
```js
const objectHash = require('object-hash')

let exampleObject = {
  "@context": "http://schema.org",
  "@type": "Book",
  "accessibilityAPI": "ARIA",
  "accessibilityControl": [
    "fullKeyboardControl",
    "fullMouseControl"
  ],
  "accessibilityFeature": [
    "largePrint/CSSEnabled",
    "highContrast/CSSEnabled",
    "resizeText/CSSEnabled",
    "displayTransformability",
    "longDescription",
    "alternativeText"
  ],
  "accessibilityHazard": [
    "noFlashingHazard",
    "noMotionSimulationHazard",
    "noSoundHazard"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "reviewCount": "0"
  },
  "bookFormat": "EBook/DAISY3",
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Holt, Rinehart and Winston"
  },
  "copyrightYear": "2007",
  "description": "NIMAC-sourced textbook",
  "genre": "Educational Materials",
  "inLanguage": "en-US",
  "isFamilyFriendly": "true",
  "isbn": "9780030426599",
  "name": "Holt Physical Science",
  "numberOfPages": "598",
  "publisher": {
    "@type": "Organization",
    "name": "Holt, Rinehart and Winston"
  }
}

objectHash.hex(exampleObject)
// '79fc74f0dd70d955a7d61271d09f0806aadff55ea770621cbb9a9194e9b9053cc59c3ca669b273dd0fb1a0efc4617d2c9824a339ad0200fdbd231b549f946027'
objectHash(exampleObject)
// Uint8Array 
// Blake2b { digestLength: 64, finalized: false, pointer: 64 }

```

## API
### objectHash
object

## Installation
```sh
$ npm install object-hash
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/object-hash.svg?style=flat-square
[3]: https://npmjs.org/package/object-hash
[4]: https://img.shields.io/travis/jdvorak/object-hash/master.svg?style=flat-square
[5]: https://travis-ci.org/jdvorak/object-hash
[6]: https://img.shields.io/codecov/c/github/jdvorak/object-hash/master.svg?style=flat-square
[7]: https://codecov.io/github/jdvorak/object-hash
[8]: http://img.shields.io/npm/dm/object-hash.svg?style=flat-square
[9]: https://npmjs.org/package/object-hash
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
