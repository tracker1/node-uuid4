var UUID = require('./index.js');
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should(),
    assert = chai.assert;

describe ("UUID Generator -- ", function() {
    before(function() {
        var callback = function (err, rnd) {
            console.log("Callback success: err %s, uuid %s", err, rnd)
        };
    })
    it ("create UUID4", function() {
        var uuid4 = UUID.uuid4();
        assert.equal(UUID.isValid(uuid4), true);
    })

    it("create ShortUUID", function() {
        var shortuuid = UUID.shortuuid();
        assert.equal(UUID.isValid(shortuuid), true);
    })
})
