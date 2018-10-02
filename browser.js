(function() {
  function getBytes() {
    try {
      // Modern Browser
      return Array.from(
        (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(16))
      );
    } catch (error) {
      // Legacy Browser, fallback to Math.random
      var ret = [];
      while (ret.length < 16) ret.push((Math.random() * 256) & 0xff);
      return ret;
    }
  }

  function m(v) {
    v = v.toString(16);
    if (v.length < 2) v = "0" + v;
    return v;
  }

  function genUUID() {
    var rnd = getBytes();
    rnd[6] = (rnd[6] & 0x0f) | 0x40;
    rnd[8] = (rnd[8] & 0x3f) | 0x80;
    rnd = rnd
      .map(m)
      .join("")
      .match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);
    rnd.shift();
    return rnd.join("-");
  }

  var uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
  function isUUID(uuid) {
    return uuidPattern.test(uuid);
  }

  genUUID.valid = isUUID;

  // global
  if (window) {
    window.uuid4 = genUUID;
  }

  // Node-style CJS
  if (typeof module !== "undefined" && module.exports) {
    module.exports = genUUID;
  }

  // AMD - legacy
  if (typeof define === "function" && define.amd) {
    define([], function() {
      return genUUID;
    });
  }
})();
