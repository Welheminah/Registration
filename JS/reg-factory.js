function regPlate() {

    var platesStore = [];

    //The format must be created so that the reg dont take anything
    

    
    function numberPlates(registration){
        var type =  /^((CJ|CY|CL|CA)\-([0-9]){3}\-([0-9]){3})$/;
        var type2 = /^((CJ|CY|CL|CA)\s([0-9]){3}\s([0-9]){3})$/;
        var type3 = /^(CJ|CY|CL|CA)\s[0-9]{5}$/;
        var isValid = type.test(registration);
        
        alert(isValid)
        if(isValid){
            
            
            return registration
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