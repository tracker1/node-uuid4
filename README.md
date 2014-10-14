# uuid-v4

A Node.js module for generating and validation V4 UUIDs

## Install

```bash
$ npm install uuid4
```

## Usage

```javascript
var uuid = require('uuid4');

// Generate a new UUID
var myUUID = uuid();

// Validate a UUID as proper V4 format
uuid.isUUID(myUUID);  // true
```
