window.onload=function(){

    var selects=document.querySelectorAll('select');
    for(i=0;i<selects.length;i++){
      dropdown(selects[i]);
    }
    
    var pageData={};
    console.log("in main js file");
    if(window.sessionStorage.length==0){
        console.log("Called once");
        storeActiveButtonId("button-button1");
        storeActiveSideBarOption("a-option1");
        changeAppearance("a-option1");
        manageVisibleOptions("a-option1");
        storeActiveQuestion("a-question1");
        showSelectedQuestion("a-question1");
        highlightQuestion("a-question1");
        pageData=getDataFromSessionStorage();
    }
    else{
        
        pageData=getDataFromSessionStorage();
        storeActiveButtonId(pageData.activeBtnId);
        if(pageData.activeBtnId=="button-button3"){
            var activeOption=getActiveSideBarOption();
            changeAppearance(activeOption);
            manageVisibleOptions(activeOption);
        }
        if(pageData.activeBtnId=="button-button4"){
            var activeQuestion=getActiveQuestion();
            showSelectedQuestion(activeQuestion);
            highlightQuestion(activeQuestion);
        }
        
    }
    
    var btn=document.getElementById(pageData.activeBtnId);
    if(pageData.data!=null){
        makeSubmitActive();
        modifyData(pageData,1);
    }
    modifyApperance(pageData.activeBtnId);
    
}

function modifyData(pageData,reloadFlag){
    var formName;
    var formCheck=0;
    
    if(pageData.activeBtnId==="button-button1"){
        formName="page1";
        formCheck=1;
    }
    else if(pageData.activeBtnId==="button-button2"){
        formName="page2";
        formCheck=1;
    }
    else if(pageData.activeBtnId==="button-button3"){
        formName="page3";
        formCheck=0;
    }
    else if(pageData.activeBtnId==="button-button4"){
        formName="page4";
        formCheck=0;
    }

    if(formCheck==1){
    var form=document.forms[formName];
    console.log(form.elements);
    var formData=pageData.data;
    var j=0;
    
    for(i=0;i<form.elements.length;i++){
      if(formName=="page1"){
        if(form.elements[i].type=="radio"){
            if(form.elements[i].value==formData[j]){
                form.elements[i].checked=true;
                j++;
            }
            else{
                form.elements[i].checked=false;
            }
            
        }
        else if(form.elements[i].type!="radio"){
            form.elements[i].value=formData[j];
            j++;
        }
      }
      else if(formName=="page2"){
          
        var values=Object.values(pageData);
        var formValues=Object.values(values[1]);
        
        var j=0;
        for(i=0;i<form.elements.length;i++){
            if(j==0||j==1){
                form.elements[i].value=formValues[j];
            }
            else if(j==2){
                var innerObj=Object.values(formValues[j]);
                console.log(innerObj," "+innerObj.length+" "+j);
              if(reloadFlag==1){
                for(z=0;z<innerObj.length-1;z++){
                    addNewRow("a-historyLink");
                }
              }
              else {
                location.reload();
              }
                for(l=0;l<innerObj.length;l++){
                for(k=0;k<3;k++){
                    form.elements[i].value=innerObj[l][k];
                    i++;
                }
            }
                i--;
                
            }
            else if(j==3){
                var innerObj=Object.values(formValues[j]);
                console.log(reloadFlag);
              if(reloadFlag==1){
                  
                for(z=0;z<innerObj.length-1;z++){
                    addNewRow("a-educationLink");
                }
              }
              
                for(l=0;l<innerObj.length;l++){
                for(k=0;k<3;k++){
                    form.elements[i].value=innerObj[l][k];
                    i++;
                }
            }
                i--;
                
            }
            j++;
        }
      }
        
    }
}
else {
    if(formName=="page3"){
    var activeOption=getActiveSideBarOption();
    changeAppearance(activeOption);
    manageVisibleOptions(activeOption);
    var classname="input-option"+activeOption[8];
    var inputs=document.getElementsByClassName("input-option");
    
    var j=0;
    var res=pageData.data;
    console.log(res);
    console.log(inputs);
    for(i=0;i<inputs.length;i++){
        //console.log(inputs[i].value+" "+res[j]);
        if(inputs[i].value===res[j]){
            console.log("entered");
            inputs[i].checked=true;
            j++;
            if(j==res.length){
                break;
            }
        }
        else{
            inputs[i].checked=false;
        }
    }
}
else if(formName=="page4"){
    
    var allAnswers=pageData.data;
    
    for(var i=0;i<Object.keys(allAnswers).length;i++){
        var idNum=i+1;
        var textAreaId="textarea-resp"+idNum;
        var textArea=document.getElementById(textAreaId);
        
        textArea.innerHTML=allAnswers[i];
    }
}
}

}

function storeActiveButtonId(btnId){
    sessionStorage.setItem('activeBtnId', JSON.stringify(btnId));
}

function storeInSessionStorage(btnId){
    var formName;
    var form=0;
    var history={};
    var h=0,e=0;
    var education={};
    if(btnId=="button-button1"){
        formName="page1";
        form=1;
    }
    else if(btnId=="button-button2"){
        formName="page1";
        form=1;
    }
    else if(btnId=="button-button3"){
        formName="page2";
        form=1;
    }
    else if(btnId=="button-button4"){
        formName="page3";
        form=0;
    }
    else if(btnId=="button-submitButton"){
        formName="page4";
        form=0;
    }
    if(form==1){

    var data={};
    var form=document.forms[formName];
    
    var j=0;
    
    for(i=0;i<form.elements.length;i++){
        if(formName==="page2"){
            console.log("here in page2 storage");
            
            if(form.elements[i].className=="input_history"){
                
                var temp={};
                var k=0;
                for(k=0;k<3;k++){
                    temp[k]=form.elements[i].value;
                    i++;
                }
                history[h]=temp;
                h++;
                i--;
                
                
            }
            else if(form.elements[i].className=="input_education"){
                console.log("value of e"+e);
                var temp={};
                var k=0;
                for(k=0;k<3;k++){
                    temp[k]=form.elements[i].value;
                    i++;
                }
                education[e]=temp;
                console.log(education," value of education array");
                e++;
                i--;
                
            }
            else{
                console.log(i);
                data[j]=form.elements[i].value;
                j++;
            }
            
        }
        else{
        if(form.elements[i].type=="radio"&&form.elements[i].checked==true){
            // data.push(form.elements[i].value);
            data[j]=form.elements[i].value;
            j++;
        }
        else if(form.elements[i].type!="radio"){
            data[j]=form.elements[i].value;
            j++;
        }
    }
    if(formName=="page2"){
        data[2]=history;
        data[3]=education;
    }
    }
}
else{
    if(formName=="page3"){
    console.log("here storing ");
    var data={};
    var opt=getActiveSideBarOption();
    console.log(opt);
    data=getCheckedOption(opt);
    }
    else if(formName=="page4"){
        var data={};
        data=getAllAnswers();

    }
}

    sessionStorage.setItem(formName, JSON.stringify(data));

    

}

function getDataFromSessionStorage(){
    var activeBtnId=JSON.parse(window.sessionStorage.getItem('activeBtnId'));

    var formName;
    if(activeBtnId=="button-button1"){
        formName="page1";
    }
    else if(activeBtnId=="button-button2"){
        formName="page2";
    }
    else if(activeBtnId=="button-button3"){
        formName="page3";
    }
    else if(activeBtnId=="button-button4"){
        formName="page4";
    }
    
    var data=JSON.parse(window.sessionStorage.getItem(formName));

    var pageData={
        "activeBtnId":activeBtnId,
        "data":data
    }

    console.log("returning data from local storage ",pageData);

    return pageData;
}

function dropdown(select){
    
        var start=1990;
        var end=2019;
        
    for(var j=start;j<=end;j++){
        select.innerHTML+="<option value=\""+j+"\">"+j+"</option>"
    }

}

function storeActiveSideBarOption(option){
    
    sessionStorage.setItem('activeOption', JSON.stringify(option));

}

function getActiveSideBarOption(){
    return JSON.parse(window.sessionStorage.getItem('activeOption'));
}

function storeActiveQuestion(ques){
    sessionStorage.setItem('activeQuestion', JSON.stringify(ques));
}

function getActiveQuestion(){
    return JSON.parse(window.sessionStorage.getItem('activeQuestion'));
}