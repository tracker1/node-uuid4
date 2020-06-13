# uuid4

A Node.js module for generating and validation V4 UUIDs

NOTE: as of Version 2, legacy browsers are no longer supported, you can keep using 1.x if you need
to support modern and legacy browsers.

## Install

```bash
$ npm install uuid4
```

## Usage

```javascript
var uuid4 = require("uuid4");

// Generate a new UUID
var id = uuid4();

// Validate a UUID as proper V4 format
uuid4.valid(id); // true
```

## License

ISC License
