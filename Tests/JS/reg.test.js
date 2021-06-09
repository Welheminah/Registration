describe('The Registration function', function(){

    it('should be to accept the registration nummber specified in the regex', function(){

    let newReg = regPlate();
    newReg.numberPlates('CA 123 123');

    assert.equal('CA 123 123', newReg.returnArray('CA 123 123'))
    });

    it('should be to accept the registration nummber specified in the regex', function(){

        let newReg = regPlate();
        newReg.numberPlates('CL 12345');
    
        assert.equal('CL 12345', newReg.returnArray('CL 12345'))
        });

    it('should be to accept the registration nummber specified in the regex', function(){

        let newReg = regPlate();
        newReg.numberPlates('CJ-123-123');

        assert.equal('CJ-123-123', newReg.returnArray('CJ-123-123'))
        });
    
it('should be to accept the registration nummber specified in the regex', function(){

        let newReg = regPlate();
        newReg.numberPlates('CJ-12345');

        assert.equal('CJ-12345', newReg.returnArray('CJ-12345'))
        });

});
