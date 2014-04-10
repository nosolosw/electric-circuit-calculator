var ecc = require('../src/electric_circuit_calculator.js');
var assert = require('assert');

describe('voltage divider', function(){
    it('returns null if no proper values passed', function(){
        assert.equal(ecc.voltage_divider(), null);
    });

    it('returns the voltage in vout', function(){
        var r1 = 100, r2 = 100, u1 = 10;
        assert.equal(ecc.voltage_divider(u1, r1, r2), 5);
    });

});
