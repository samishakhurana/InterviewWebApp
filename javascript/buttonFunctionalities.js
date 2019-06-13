
var buttons=document.querySelectorAll('button');
var navButton=document.getElementsByClassName("navigation__container_wrapper_button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = click;
  }

function click(e){
    
    var nameOfClass=e.target.className;

    if(nameOfClass==="navigation__container_wrapper_button"){

      var btnId=e.target.id;

      if(btnId==="button-button2"){
       
        validateFlag=checkForm1();
      }
      else if(btnId==="button-button1"){
        storeActiveButtonId(btnId);
        modifyApperance(btnId);
      }
      else if(btnId==="button-button3"){
        validateFlag=checkForm2();
      }
      else if(btnId==="button-button4"){
        
        validateFlag=checkForm3();
      }
      if(validateFlag==1){
        storeActiveButtonId(btnId);
        storeInSessionStorage(btnId);
        modifyApperance(btnId);
      }
      
      var pageData=getDataFromSessionStorage();
      
      //Uncomment it
      if(pageData!=null){
        modifyData(pageData,0 );
      }
      
      
      
     
    }
    else if(nameOfClass==="footer__container_wrapper_button"){
        
      var activeBtnId=JSON.parse(window.sessionStorage.getItem('activeBtnId'));
      var validateFlag=0;
      
      
      if(e.target.id==="button-nextButton"){
          if(activeBtnId==="button-button1"){
            validateFlag=checkForm1();
          }
          else if(activeBtnId==="button-button2"){
            validateFlag=checkForm2();
          }
          else if(activeBtnId==="button-button3"){
            validateFlag=checkForm3();
            var active=getActiveSideBarOption();
            getCheckedOption(active);
          }
          if(validateFlag==1){
            if(parseInt(activeBtnId[13])==4){
                var newBtnNumber=parseInt(activeBtnId[13]);
            }
            else{
                var newBtnNumber=parseInt(activeBtnId[13])+1;
            }
            var newBtnId="button-button"+newBtnNumber;
            if(newBtnId==="button-button4"){
              var id=getActiveQuestion();
              showSelectedQuestion(id);
              highlightQuestion(id);
              storeActiveQuestion(id);
            }
            storeActiveButtonId(newBtnId);
            storeInSessionStorage(newBtnId);
            var pageData=getDataFromSessionStorage(newBtnId);
            modifyApperance(newBtnId);
            if(pageData!=null){
            modifyData(pageData,0);
            }
            
        }
        
      }
      else if(e.target.id==="button-backButton"){
        //storeInSessionStorage(activeBtnId);
        if(parseInt(activeBtnId[13])==1){
            var newBtnNumber=parseInt(activeBtnId[13]);
        }
        else{
            var newBtnNumber=parseInt(activeBtnId[13])-1;
        }
        var newBtnId="button-button"+newBtnNumber;
        
        storeActiveButtonId(newBtnId);
        
        var pageData=getDataFromSessionStorage(newBtnId);
        console.log("data on coming back ",pageData);
        modifyData(pageData,0);
        modifyApperance(newBtnId);
        
      }
      else if(e.target.id==="button-submitButton"){
        console.log("in submit button");
        var validateFlag=checkButtonStatus();
        if(validateFlag==1){
          storeInSessionStorage("button-submitButton");
          alert("Submitted Successfully");
        }
      }
      
    

    }
}

function modifyApperance(btnId){
    var btn=document.getElementById(btnId);
    btn.innerHTML=btnId[13];
    btn.style.backgroundColor = "rgb(228, 126, 31)";
    btn.style.border="none";
    btn.style.color="white";

    for(i=1;i<=navButton.length;i++){  
        if(i!=parseInt(btnId[13])){
            hideForm(i);   
        }
        else{
            showForm(btnId);
        }
    }

    for(i=1;i<btnId[13];i++){
        changeBtnIcon(i);
      }
      

      if(btnId[13]==="1"){
          showNextButton();
          hideBackButton();
          hideSubmitButton();
      }
      else if(btnId[13]==="4"){
        hideNextButton();
        showBackButton();
        showSubmitButton();
      }
      else{
        showBackButton();
        showNextButton();
        hideSubmitButton();
      }


}

function showBackButton(){
    var backBtn=document.getElementById("button-backButton");
    backBtn.style.display="block";
}

function showNextButton(){
    var nextBtn=document.getElementById("button-nextButton");
    nextBtn.style.display="block";
}

function hideBackButton(){
    var backBtn=document.getElementById("button-backButton");
    backBtn.style.display="none";
}

function hideNextButton(){
    var nextBtn=document.getElementById("button-nextButton");
    nextBtn.style.display="none";
}

function hideSubmitButton(){
  var submitBtn=document.getElementById("button-submitButton");
  submitBtn.style.display="none";
}

function showSubmitButton(){
  var submitBtn=document.getElementById("button-submitButton");
  submitBtn.style.display="block";
}

function showForm(btnId){
    var formId="form-form"+btnId[13];
    var form=document.getElementById(formId);
    form.style.display="block";
}

function hideForm(i){
    var formId="form-form"+i;
    var form=document.getElementById(formId);
    form.style.display="none";
}

function changeBtnIcon(i){
    var prevBtnId="button-button"+i;
    var prevBtn=document.getElementById(prevBtnId);
    prevBtn.innerHTML="&#10003";
    prevBtn.style.border="solid";
    prevBtn.style.borderColor="rgb(228, 126, 31)";
    prevBtn.style.backgroundColor="white";
    prevBtn.style.color="rgb(228, 126, 31)";
        
}

function getCheckedOption(option){
  console.log(option);
  var classname="input-option"+option[8];

  var inputs=document.getElementsByClassName(classname);
  console.log(inputs[0]);
  var checkedOption={};
  var j=0;
  for(var i=0;i<inputs.length;i++){
    if(inputs[i].checked==true){
      checkedOption[j]=inputs[i].value;
      j++;
    }
  }
  return checkedOption;
    
}

function makeSubmitActive(){
  
  var btn=document.getElementById("button-submitButton");
  btn.diabled="false";
  btn.style.backgroundColor="green";
}

function disableSubmit(){
  var btn=document.getElementById("button-submitButton");
  btn.diabled="true";
  btn.style.backgroundColor="rgb(102, 170, 102)";
}