function checkForm1(){
    var checkFlag=0;
    var name=document.getElementById("input-nameValue").value;
    var email=document.getElementById("input-emailValue").value;
    var univ=document.getElementById("input-universityValue").value;
    var major=document.getElementById("input-majorValue").value;
    var mobile=document.getElementById("input-mobileValue").value;
    
    if(validateText(name)&&validateText(univ)&&validateText(major)&&validateEmail(email)&&validateNumber(mobile)){
        // alert("success");
        checkFlag=1;
    }
    else{
        checkFlag=0;
    }
    return checkFlag;
}

function checkForm2(){
    var checkFlag=0;

    var bio=document.getElementById("textarea-aboutyouValue").value;
    var experience=document.getElementById("textarea-experienceValue").value;
    var history=document.getElementsByClassName("input_history");
    var activeFrom=document.getElementsByClassName("select_activeFrom");
    var activeTo=document.getElementsByClassName("select_activeTo");
    var education=document.getElementsByClassName("input_education");
    var enrolled=document.getElementsByClassName("select_enrolled");
    var graduated=document.getElementsByClassName("select_graduated");
    console.log(bio+" "+experience+" "+history+" "+activeFrom+" "+activeTo+" "+education+" "+enrolled+" "+graduated);
    if(checkEmptyField(bio)&&checkEmptyField(experience)&&checkHistoryField(history)&&checkYearField(activeFrom)
    &&checkYearField(activeTo)&&checkEducationField(education)&&checkYearField(enrolled)&&checkYearField(graduated)
    &&checkValue(activeFrom,activeTo,enrolled,graduated)&&checkLimits(activeFrom,activeTo)&&checkLimits(enrolled,graduated)){
        // alert("success");
        checkFlag=1;
    }
    else{
        checkFlag=0;
    }
    return checkFlag;
    
}

function checkForm3(){
    var checkFlag=0;
    var aciveOpt=getActiveSideBarOption();
    var checkedOption=getCheckedOption(aciveOpt);
    console.log("Length of checked option"+checkedOption.length);
    if(Object.keys(checkedOption).length!=0){
        // alert("success");
        checkFlag=1;
    }
    else{
        alert("Select some option");
    }
    return checkFlag;
}

function checkYearField(values){
    console.log(values);
    for(var i=0;i<values.length;i++){
        
        if(!checkValue(values[i].value)){
            alert("Add valid year");
            return 0;
        }
    }
    return 1;
}





function validateText(name){
    console.log("validate Name");
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if(!checkEmptyField(name)){
        alert("Name can not be empty");
        return 0;
    }
    else if(regex.test(name)==false){
        alert("Invalid name");
        return 0;
    }
    return 1;
    
    
}

function checkHistoryField(history){
    
    for(var i=0;i<history.length;i++){
        
        if(!checkEmptyField(history[i].value)){
            
            alert("Invalid year selected");
            return 0;
        }
    }
    return 1;
}

function checkEducationField(education){
    for(var i=0;i<education.length;i++){
        if(!checkEmptyField(education[i].value)){
            alert("Required education institue name");
            return 0;
        }
    }
    return 1;
}

function validateEmail(email){
    var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!checkEmptyField(email)){
        alert("Email can not be empty")
        return 0;
    }
    else if(regex.test(email)==false){
        alert("Invalid email");
        return 0;
    }
    return 1;
}

function validateNumber(mobile){
    var regex=/^[6-9]\d{9}$/;
    if(!checkEmptyField(mobile)){
        alert("Mobile Number can not be empty");
        return 0;
    }
    else if(regex.test(mobile)==false){
        alert("Invalid Mobile Number");
        return 0;
    }
    return 1;
}

function checkEmptyField(value){
    if(value==null||value==""||value.length==0){
        
        return 0;
    }
    return 1;
}

function checkValue(val){
    if(val==="Active From"||val==="Active To"||val==="Enrolled"||val==="Graduated"){
        return 0;
    }
    return 1;
}

function checkLimits(val1,val2){
    for(var i=0;i<val1.length;i++){
        var value1=parseInt(val1[i].value);
        var value2=parseInt(val2[i].value);
        if(value1>value2){
            alert("Invalid years filled.");
            return 0;
        }
    }
    

    
    return 1;

}