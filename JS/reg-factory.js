function regPlate() {

    var platesStore = [] ;
    
    
    function numberPlates(registration){
        var registration = registration.trim().toUpperCase();
        var type =  /^((CJ|CL|CA)\-([0-9]){3}\-([0-9]){3})$/;
        var type2 = /^((CJ|CL|CA)\s([0-9]){3}\s([0-9]){3})$/;
        var type3 = /^(CJ|CL|CA)\-[0-9]{5}$/;
        var type4 = /^(CJ|CL|CA)\s[0-9]{5}$/;
        var letsValidate = type.test(registration);
        var letsValidate2 = type2.test(registration);
        var letsValidate3 = type3.test(registration);
        var letsValidate4 = type4.test(registration);

        if(letsValidate || letsValidate2 || letsValidate3 || letsValidate4){
            if(!platesStore.includes(registration)){
                platesStore.push(registration);
                console.log(platesStore);
                return registration;
            } 
            else if(platesStore.includes(registration)){
                return "The registration entered already exist";
            }
        
        }
        else {
            return "Invalid regitration, please enter a valid registration eg CA 12345";
        } 
    }




    function getReg(){
        return registration;
    }

    function storings(){
        return platesStore;
    }

    
    function filterReg(radioBtn){
        var filteredReg = [];
            for (i = 0; i < platesStore.length; i++) {
                if(platesStore[i].startsWith(radioBtn)){
                    filteredReg.push(platesStore[i]);
            }
        }
        return filteredReg;
    }
    
    return {
        numberPlates,
        filterReg,
        storings,
        getReg
    }
}