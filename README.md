# uuid4

A Node.js module for generating and validation V4 UUIDs

Note v1.1 adds a browser entry for use in browsers, `crypto` api for rng in modern browser, fallback to `Math.random()`

## Install

```bash
$ npm install uuid4
```

## Usage

```javascript
var uuid4 = require('uuid4');

// Generate a new UUID
var id = uuid4();

// Validate a UUID as proper V4 format
uuid4.valid(id);  // true

// NODE ONLY: Generate a new UUID Asynchronously
uuid4(function(err, id){
  //if (err) ...;

  //verify id
  uuid.valid(id);
});
```
