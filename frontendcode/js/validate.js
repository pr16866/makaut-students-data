let label=document.querySelectorAll(".label");
let input=document.querySelectorAll("input");
let select=document.querySelector("select");
let i=document.querySelectorAll("i");
let branch=document.querySelector(".branch");

console.log(i.length);
// console.log()
// }
// fun1(e)x
document.addEventListener("keydown",(e)=>{
if(e.key=="Enter"){
validation();
}
});


function validation(){

    let flag="";

 let name=input[0].value.trim();
 let email=input[1].value;
 let cse=input[2].value;
 let it=input[3].value;
 let img=input[4].value;
 let interest=input[5].value;
 let state=input[6].value;
 let city=input[7].value;
 let insta=input[8].value;
 let fb=input[9].value;
 let github=input[10].value;
 let linkdin=input[11].value;
 let year=select.value;


 let allowedExtensions = /(\.jpg|\.jpeg)$/i;

// for(let x=0;x<i.length;x++){
//     i[x].style.color="transparent";
// }
    if(name==""){
        label[0].innerText="please enter your name";
        i[1].style.color="red";
        i[0].style.color="transparent";
        input[0].style.borderColor="red"
        flag=false;
    }
    else if(name.match(/[0-9]/g)){
        
        label[0].innerText="numbers are not allowed in name";
        i[1].style.color="red";
        i[0].style.color="transparent";
        input[0].style.borderColor="red"
        flag=false;
    }
    else if(name.search(/[!\@\#\$\%\^\&\*\(\)\_\+\=\`\~\-]/) !=-1 ){
        console.log("special characters is not allowed in name");
        label[0].innerText="special character are not allowed in name";
        i[1].style.color="red";
        i[0].style.color="transparent";
        input[0].style.borderColor="red"
        flag=false;
    }
    else{
        
        i[0].style.color="green";
        i[1].style.color="transparent";
        input[0].style.borderColor="green"
        label[0].innerText="";
        flag=true;

    }
    if(email==""){
        label[1].innerText="please enter your email";
    
        i[2].style.color="red";
        i[3].style.color="transparent";
        input[1].style.borderColor="red";
        flag=false;
    }
    else if((email.indexOf(".")!=email.length-4)&&(email.indexOf(".")!=email.length-3)){
        label[1].innerText="please enter correct email";
        
        i[2].style.color="red";
        i[3].style.color="transparent";
        input[1].style.borderColor="red";
        flag=false;
    }
    else if(email.match(/[@]/g).length!=1){ 
        label[1].innerText=`please enter correct email`;
        
        i[2].style.color="red";
        i[3].style.color="transparent";
        input[1].style.borderColor="red";
        flag=false;
    }
    else{
        
      
        i[3].style.color="green";
        i[2].style.color="transparent";
        input[1].style.borderColor="green"
        label[1].innerText=""; 
        flag=true;
    }
    if(input[2].checked!=true && input[3].checked!=true){
        
        label[2].innerText="please select your branch";
        i[4].style.color="red";
        i[5].style.color="transparent";
        branch.style.borderColor="red";
        flag=false;
    }
    else{
       
       
        i[5].style.color="green";
        i[4].style.color="transparent";
        branch.style.borderColor="green" 
        label[2].innerText="";
        flag=true;
    }

    if(year==""){
        label[3].innerText="please select your branch";
        i[6].style.color="red";
        i[7].style.color="transparent";
        select.style.borderColor="red";
        flag=false;
    }
    else{
       
       
        i[7].style.color="green";
        i[6].style.color="transparent";
        select.style.borderColor="green" 
        label[3].innerText="";
        flag=true;
    }
    if(img==""){
        
        label[4].innerText="please upload your image";
        i[8].style.color="red";
        i[9].style.color="transparent";
        input[4].style.borderColor="red";
        flag=false;
    }
 
    else if(!allowedExtensions.exec(img)){

label[4].innerText=`image must be "jpeg" or "jpg" format`;
i[8].style.color="red";
        i[9].style.color="transparent";
        input[4].style.borderColor="red";
        flag=false;
    }
    else{

i[9].style.color="green";
i[8].style.color="transparent";
input[4].style.borderColor="green"
label[4].innerText=""; 
flag=true;
    }
    if(interest==""){
        
        label[5].innerText="please write womething";
        i[10].style.color="red";
        i[11].style.color="transparent";
        input[5].style.borderColor="red";
        flag=false;
    }
    else if(interest.match(/[0-9]/gi)){
        
        label[5].innerText="numbers are not allowed";
        i[10].style.color="red";
        i[11].style.color="transparent";
        input[5].style.borderColor="red";
        flag=false;
    }
    else if(interest.search(/[!\@\#\$\%\^\&\*\(\)\_\+\=\`\~\-]/) !=-1 ){
 
        label[5].innerText="special character are not allowed";
        i[10].style.color="red";
        i[11].style.color="transparent";
        input[5].style.borderColor="red";
        flag=false;
    }
    else{
        
       
        i[11].style.color="green";
i[10].style.color="transparent";
input[5].style.borderColor="green" 
label[5].innerText="";
flag=true;
    }
    if(state==""){
      
      label[6].innerText="Please write your state name";
      i[12].style.color="red";
      i[13].style.color="transparent";
      input[6].style.borderColor="red";
      flag=false;
    }
    else if(state.match(/[0-9]/gi)){
     
        label[6].innerText="numbers are not allowed in state ";
        i[12].style.color="red";
      i[13].style.color="transparent";
      input[6].style.borderColor="red";
      flag=false;
    }
    else if(state.search(/[!\@\#\$\%\^\&\*\(\)\_\+\=\`\~\-]/) !=-1 ){
        
        label[6].innerText="special character are not allowed in state";
        i[12].style.color="red";
      i[13].style.color="transparent";
      input[6].style.borderColor="red";
      flag=false;
    }
  else{

    i[13].style.color="green";
    i[12].style.color="transparent";
    input[6].style.borderColor="green" 
    label[6].innerText="";
    flag=true;
  }
  if(city==""){
   
    label[7].innerText="please write your city name";
    i[14].style.color="red";
      i[15].style.color="transparent";
      input[7].style.borderColor="red";
      flag=false;
  }
  else if(city.match(/[0-9]/gi)){

    label[7].innerText="numbers are not allowed in city ";
    i[14].style.color="red";
    i[15].style.color="transparent";
    input[7].style.borderColor="red";
    flag=false;
}
else if(city.search(/[!\@\#\$\%\^\&\*\(\)\_\+\=\`\~\-]/) !=-1 ){
 
    label[7].innerText="special characters are not allowed in city";
    i[14].style.color="red";
    i[15].style.color="transparent";
    input[7].style.borderColor="red";
    flag=false;
}
else{
   
    i[15].style.color="green";
    i[14].style.color="transparent";
    input[7].style.borderColor="green" ;
    label[7].innerText="";
    flag=true;
}
if(insta!=""){
   
    i[16].style.color="green";
    input[8].style.borderColor="green" ;
}
if(fb!=""){
   
    i[17].style.color="green";
    input[9].style.borderColor="green" ;
}
if(github!=""){
   
    i[18].style.color="green";
    input[10].style.borderColor="green" ;
}if(linkdin!=""){
   
    i[19].style.color="green";
    input[11].style.borderColor="green" ;
}
console.log(flag);
    return flag
    // return false
    
}