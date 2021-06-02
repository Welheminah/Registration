function regPlate() {

    var platesStore = [];

    //The format must be created so that the reg dont take anything
    

    
    function numberPlates(registration){
        var registration = registration.trim().toUpperCase();
        var type =  /^((CJ|CY|CL|CA)\-([0-9]){3}\-([0-9]){3})$/;
        var type2 = /^((CJ|CY|CL|CA)\s([0-9]){3}\s([0-9]){3})$/;
        var type3 = /^(CJ|CY|CL|CA)\-[0-9]{5}$/;
        var type4 = /^(CJ|CY|CL|CA)\s[0-9]{5}$/;
        var isValid = type.test(registration);
        var isValid2 = type2.test(registration);
        var isValid3 = type3.test(registration);
        var isValid4 = type4.test(registration);

        if(isValid || isValid2 || isValid3 || isValid4){
            if(!platesStore.includes(registration)){
                platesStore.push(registration)
                console.log(platesStore);
                return;
            } 
            else {
                return registration;
            }
            
            
        }
        else {

            return false
        }

        

        

    //    if(type.test(registration)){
           
    //     platesStore.push(registration);
    //     alert("correct");
        
    //    }
    //    else {
           
    //    }
    //    console.log(registration);
    //    console.log(platesStore);
        //    return platesStore;
    }

    // function getReg(){
    //     return weStoreReg();
    // }

    function letsFilter(){

    }

    function storings(){
        if(!platesStore.includes(registration)){
            platesStore.push(registration)
        }
        else {
            return;
        }
    }


    return {
        numberPlates,
        letsFilter,
        storings
        // getReg
    }
}