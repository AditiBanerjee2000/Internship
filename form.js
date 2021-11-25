var uname=document.getElementById("name");
var pass=document.getElementById("password");
var phone=document.getElementById("phn");
var email=document.getElementById("email");
var reg=document.getElementById("reg");


 function validate(){

  if(uname.value.trim()===""){
      onError(uname,"Name cannot be empty") 
  }else{
    onSuccess(uname);
  }

  if(phone.value.trim()===""){
      onError(phone,"Phone cannot be empty")
  }
  else{
    if(phone.value.trim().length<10){
    onError(phone,"Invalid phone number") 
  }
  else{
      onSuccess(phone)   
  }
}
  
if(reg.value.trim()===""){
    onError(reg,"Registration number cannot be empty")
}else{
    onSuccess(reg);
}

if(pass.value.trim()===""){
    onError(pass,"Password cannot be empty")
}
else{
  if(pass.value.trim().length<10){
  onError(pass,"Password too short")
}
else{
    onSuccess(pass)
}
}
}


document.querySelector("button").addEventListener("click",(event)=>{

    
    event.preventDefault()
    validate();
});

function onSuccess(input){
    let parent=input.parentElement;
      let messageElement=parent.querySelector("small");
      messageElement.style.visibility="hidden";
      messageElement.innerText="";
      parent.classList.remove("error")
      parent.classList.add("success");
}

function onError(input,message){
    let parent=input.parentElement;
      let messageElement=parent.querySelector("small");
      messageElement.style.visibility="visible";
      messageElement.innerText=message;
      parent.classList.add("error");
      parent.classList.remove("success");    
}

