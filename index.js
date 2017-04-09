'use strict';

var crypto = require('crypto')
var uuidPatterns = {
    uuid4: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
    shortuuid: /^[0-9a-f]{16,32}$/
}
// module.exports.isValid = isUUID;

var UUID = {
  uuid4: function UUID(callback) {
      this.pattern = 'uuid4'
      if (typeof(callback) !== 'function') {
        var rnd = crypto.randomBytes(16);
        rnd[6] = (rnd[6] & 0x0f) | 0x40;
        rnd[8] = (rnd[8] & 0x3f) | 0x80;
        rnd = rnd.toString('hex').match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);
        rnd.shift();
        return rnd.join('-');
      }
      crypto.randomBytes(16, function(err, rnd) {
        rnd[6] = (rnd[6] & 0x0f) | 0x40;
        rnd[8] = (rnd[8] & 0x3f) | 0x80;
        rnd = rnd.toString('hex').match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);
        rnd.shift();
        return rnd.join('-');
      });
  },
  shortuuid: function() {
      this.pattern = 'shortuuid';
      var rnd = crypto.randomBytes(11);
      rnd = rnd.toString('hex').match(/(.{22})/);
      return rnd[0];
  },
  isValid: function(uuid) {
      console.log("Check isValid pattern: %s", this.pattern)
      return uuidPatterns[this.pattern].test(uuid);
  }
}

module.exports = UUID;
