

console.log("in page 3 js");

var options=document.getElementsByClassName("form_container_wrapper_info_flexContainer_item_sidebar_option");

for (var i = 0; i < options.length; i++) {
    console.log("in loop");
    options[i].onclick = modifyDiv;
  }

  function modifyDiv(e){

    var id=e.target.id;
    manageVisibleOptions(id);
    changeAppearance(id);
    
    
    
    

    
  }

  function manageVisibleOptions(id){
    
    var reqDivNumber=id[8];
    var reqDivId="div-options"+reqDivNumber;
    
    var reqDiv=document.getElementById(reqDivId);
    reqDiv.style.display="flex";

    for(var i=1;i<=3;i++){
      var divId="div-options"+i;
      if(divId!=reqDivId){
        var div=document.getElementById(divId);
        div.style.display="none";
      }
    }

  }

  function changeAppearance(id){
    var arr=id.split("-");
    var resId="div-"+arr[1];
    for(i=1;i<=options.length;i++){
      var divId="div-option"+i;
      
      if(divId===resId){
        storeActiveSideBarOption(id);
        var selectedDiv=document.getElementById(resId);
        selectedDiv.style.backgroundColor="white";
        selectedDiv.style.borderLeftWidth="12px";
        selectedDiv.style.borderLeftColor="orange";
        selectedDiv.style.borderRight="0px";
        selectedDiv.style.borderTop="0px";
        selectedDiv.style.borderBottom="0px";
        var anchor=document.getElementById(id);
        anchor.style.color="black";
       
      }
      else{
        console.log(divId);
        var div=document.getElementById(divId);
        console.log(div);
        div.style.backgroundColor="#f1f1f1";
        
        div.style.borderColor="lightgrey";
        div.style.borderLeftWidth="1px";
        div.style.borderRightWidth="1px";
        div.style.borderTopWidth="1px";
        div.style.borderBottomWidth="1px";
        var anchorId="a-option"+i;
        console.log(anchorId);
        var anchor=document.getElementById(anchorId);
        anchor.style.color="grey";
        
      }
    }
  }

  

