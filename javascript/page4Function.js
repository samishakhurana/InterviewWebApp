var questions=document.getElementsByClassName("form_container_wrapper_info_flexContainer_item_sidebar_question_link");
var next=document.getElementById("a-next");
var prev=document.getElementById("a-prev");


next.onclick=nextQues
prev.onclick=prevQues

for(var i=0;i<questions.length;i++){
    questions[i].onclick=selectQues
}

for(var i=1;i<=4;i++){
    var respId="textarea-resp"+i;
    var resp=document.getElementById(respId);
    resp.onkeyup=checkButtonStatus
}

function nextQues(){
    console.log("in next");
    var id=getActiveQuestion();
    console.log(id);
    var newQuesNumber=parseInt(id[10])+1;
    
    var newId="a-question"+newQuesNumber;
    showSelectedQuestion(newId);
    highlightQuestion(newId);
    storeActiveQuestion(newId);
}

function prevQues(){
    var id=getActiveQuestion();
    var newQuesNumber=parseInt(id[10])-1;
    var newId="a-question"+newQuesNumber;
    showSelectedQuestion(newId);
    highlightQuestion(newId);
    storeActiveQuestion(newId);
}

function selectQues(e){
    var id=e.target.id;
    var validateFlag=0
    
    showSelectedQuestion(id);
    highlightQuestion(id);
    storeActiveQuestion(id);
}

function showSelectedQuestion(id){
    var reqDivId="div-quesStatement"+id[10];
    
    var reqDiv=document.getElementById(reqDivId);
    reqDiv.style.display="block";
    
    for(var i=1;i<=4;i++){
        var divId="div-quesStatement"+i;
        if(divId!=reqDivId){
            var div=document.getElementById(divId);
            div.style.display="none";
        }
    }
    if(id=="a-question4"){
        next.style.visibility="hidden";
    }
    else{
        next.style.visibility="visible";
    }
    if(id=="a-question1"){
        prev.style.visibility="hidden";
    }
    else{
        prev.style.visibility="visible";
    }
}

function highlightQuestion(id){
    for(var i=0;i<questions.length;i++){
        if(questions[i].id==id){
            var ques=document.getElementById(id);
            ques.style.color="black";
            var tick="span-tick"+id[10];
            var span=document.getElementById(tick);
            span.style.color="rgb(228, 126, 31)";
        }
        else{
            var ques=document.getElementById(questions[i].id);
            ques.style.color="grey";
            var qId=questions[i].id;
            var tick="span-tick"+qId[10];
            var span=document.getElementById(tick);
            span.style.color="grey";
        }
    }
    
}

function getAllAnswers(){
    
    var allAnswers={};
    var flag=0;
    for(var i=1;i<=4;i++){
        var respId="textarea-resp"+i;
        var resp=document.getElementById(respId).value;
        
        allAnswers[i-1]=resp;
    }
    
    return allAnswers;
    
    
}

function checkButtonStatus(){
    console.log("now here");
    var allAnswers=getAllAnswers();
    console.log(allAnswers);
    var flag=0;
    for(var i=0;i<4;i++){
        if(!checkEmptyField(allAnswers[i])){
            console.log("here for "+i);
           flag=0;
           break;
        }
        else{
            flag=1;
        }
     }
     
     if(flag==0){
         disableSubmit();
     }
     else{
         console.log("submit button");
         makeSubmitActive();
     }

     return flag;
}