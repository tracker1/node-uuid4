# uuid4

A Node.js module for generating and validation V4 UUIDs

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
```

## Alternative (browser-only)

If you *only* care about browser use and want to avoid modules, you may get by with the following snippet.

```javascript
// CC0 - based on https://abhishekdutta.org/blog/standalone_uuid_generator_in_javascript.html
function uuid() {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.split(/[:\/]/g).pop().toLowerCase(); // remove prefixes
}
```

## License

ISC License
