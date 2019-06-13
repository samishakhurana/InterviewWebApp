var links=document.getElementsByClassName("form_container_wrapper_info_field_spanLink");
var eduCounter=2;
var expCounter=2;
for(var i=0;i<links.length;i++){
    links[i].onclick=change;
}

function change(e){
    addNewRow(e.target.id);
    
}

function addNewRow(id){
    if(id=="a-educationLink"){
        
        var div=document.getElementById("div-education");
        var innerDiv=document.createElement("div");
        innerDiv.setAttribute("class","innerDiv");
        var span=document.createElement("span");
        span.setAttribute("class","form_container_wrapper_info_field_span2");
        span.setAttribute("class","form_item2");
        var input=document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("placeholder","School");
        input.setAttribute("class","input_education");
        var id="input-educationValue"+eduCounter;
        input.setAttribute("id",id)
        
        innerDiv.appendChild(span);
        span.appendChild(input);
        var br=document.createElement("br");
        span.appendChild(br);

        var span2=document.createElement("span");
        span2.setAttribute("class","form_container_wrapper_info_field_span2");
        span2.setAttribute("class","form_item2");
        var select1=document.createElement("select");
        var id="select-enrolled"+eduCounter;
        select1.setAttribute("id",id);
        select1.setAttribute("class","select_enrolled");
        var option1=document.createElement("option");
        option1.innerHTML="Enrolled";

        var select2=document.createElement("select");
        var id="select-graduated"+eduCounter;
        select2.setAttribute("id",id);
        select2.setAttribute("class","select_graduated");
        var option2=document.createElement("option");
        option2.innerHTML="Graduated";



        innerDiv.appendChild(span2);
        span2.appendChild(select1);
        select1.append(option1);
        
        span2.appendChild(select2);
        select2.appendChild(option2);
        div.appendChild(innerDiv);
        var br=document.createElement("br");
        div.appendChild(br);
        dropdown(select1);
        dropdown(select2);
        

        eduCounter++;

    }
    else if(id=="a-historyLink"){
        var div=document.getElementById("div-experience");
        var span=document.createElement("span");
        var innerDiv=document.createElement("div");
        innerDiv.setAttribute("class","innerDiv");
        span.setAttribute("class","form_container_wrapper_info_field_span2");
        span.setAttribute("class","form_item2");
        var input=document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("placeholder","Company");
        input.setAttribute("class","input_history");
        var id="input-historyValue"+expCounter;
        input.setAttribute("id",id)
        
        innerDiv.appendChild(span);
        span.appendChild(input);
        var br=document.createElement("br");
        span.appendChild(br);

        var span2=document.createElement("span");
        span2.setAttribute("class","form_container_wrapper_info_field_span2");
        span2.setAttribute("class","form_item2");
        var select1=document.createElement("select");
        var id="select-activeFrom"+expCounter;
        select1.setAttribute("id",id);
        select1.setAttribute("class","select_activeFrom");
        var option1=document.createElement("option");
        option1.innerHTML="Active From";

        var select2=document.createElement("select");
        var id="select-activeTo"+expCounter;
        select2.setAttribute("id",id);
        select2.setAttribute("class","select_activeTo");
        var option2=document.createElement("option");
        option2.innerHTML="Active To";



        innerDiv.appendChild(span2);
        span2.appendChild(select1);
        select1.append(option1);
        
        span2.appendChild(select2);
        select2.appendChild(option2);
        div.appendChild(innerDiv);
        var br=document.createElement("br");
        div.appendChild(br);
        
        dropdown(select1);
        dropdown(select2);
        

        expCounter++;

    }
}