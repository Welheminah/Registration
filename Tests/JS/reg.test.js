describe('The Registration function', function(){

    it('should be to accept the registration nummber specified in the regex', function(){

    let newReg = regPlate();
    newReg.numberPlates('CA 123 123');

    assert.equal('CA 123 123', newReg.storings('CA 123 123'))
    });

    it('should be to accept the registration nummber specified in the regex', function(){

        let newReg = regPlate();
        newReg.numberPlates('CL 12345');
    
        assert.equal('CL 12345', newReg.storings('CL 12345'))
        });

    it('should be to accept the registration nummber specified in the regex', function(){

        let newReg = regPlate();
        newReg.numberPlates('CJ-123-123');

        assert.equal('CJ-123-123', newReg.storings('CJ-123-123'))
        });
    
it('should be to accept the registration nummber specified in the regex', function(){

        let newReg = regPlate();
        newReg.numberPlates('CJ-12345');

        assert.equal('CJ-12345', newReg.storings('CJ-12345'))
        });

});
describe('The storings function', function(){

    it('it should return all the registrations entered', function(){

        let newReg = regPlate();
        let plateStore = ["CJ-12345", "CJ-123-123", "CA 123 123"];

        newReg.numberPlates("CJ-12345");
        newReg.numberPlates("CJ-123-123");
        newReg.numberPlates("CA 123 123");
    
    assert.deepEqual(plateStore,newReg.storings())
    });

    it('it should return all the registrations entered without the duplicates', function(){

        let newReg = regPlate();
        let plateStore = ["CJ-12345", "CJ-123-123", "CA 123 123"];

        newReg.numberPlates("CJ-12345");
        newReg.numberPlates("CJ-123-123");
        newReg.numberPlates("CA 123 123");
        newReg.numberPlates("CA 123 123");
        newReg.numberPlates("CA 123 123");
        newReg.numberPlates("CJ-12345");

    
    assert.deepEqual(plateStore,newReg.storings())
    });
});    

describe('The filterReg function', function(){

    it('it should return the registrations from Cape Town, that starts with CA', function(){

        let newReg = regPlate();
        let plateStore = ["CA 123 123", "CA 12323"];

        newReg.numberPlates("CJ-12345");
        newReg.numberPlates("CJ-123-123");
        newReg.numberPlates("CA 123 123");
        newReg.numberPlates("CA 12323");
    
    assert.deepEqual(plateStore,newReg.filterReg("CA"))
    });

    it('it should return the registrations from Stellenbosch, that starts with CL', function(){

        let newReg = regPlate();
        let plateStore = ["CL-12345", "CL 127 984", "CL 12323"];
        
        newReg.numberPlates("CJ-12345");
        newReg.numberPlates("CL-12345");
        newReg.numberPlates("CJ 127 984");
        newReg.numberPlates("CL 127 984");
        newReg.numberPlates("CL 12323");
        newReg.numberPlates("CJ-123-123");
        newReg.numberPlates("CA 123 123");
        newReg.numberPlates("CA 12323");
        
    console.log(newReg.filterReg("CJ"));
    assert.deepEqual(plateStore,newReg.filterReg("CL"))
    });

    it('it should return the registrations from Paarl, that starts with CJ', function(){

        let newReg = regPlate();
        let plateStore = ["CJ-12345", "CJ 127 984", "CJ-123-123"];
        
        newReg.numberPlates("CJ-12345");
        newReg.numberPlates("CJ 127 984");
        newReg.numberPlates("CJ-123-123");
        newReg.numberPlates("CA 123 123");
        newReg.numberPlates("CA 12323");
        
    console.log(newReg.filterReg("CJ"));
    assert.deepEqual(plateStore,newReg.filterReg("CJ"))
    });
});
describe('The Errormessages function', function(){

    it('it should return invalid if the input box is empty or the registration is wrong', function(){

        let newReg = regPlate();

        assert.equal("Invalid regitration, please enter a valid registration eg CA 12345",newReg.numberPlates(""));
    
    });

    it('it should return registration entered already exists', function(){

        let newReg = regPlate();
        newReg.numberPlates("CJ-12345");

        assert.equal("The registration entered already exist",newReg.numberPlates("CJ-12345"));
    
    });

});    