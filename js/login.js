 
  document.querySelector("#new-page").style.display ="none";

 function btn(){
   document.querySelector("#psw")
   document.querySelector("#email")
   
    if(email.value == ''){
      alert("please enter email")
    }
      else if(psw.value == ''){
         alert("please enter password")
         }
 else{
   document.querySelector("#new-page").style.display ="block";
   document.querySelector("#container").style.display ="none";
}
}
function btn2(){
   if(email.value !== '')
   return email.value = ''
else if(psw.value !== '')
return psw.value = ''
}
function closebtn(){
   document.querySelector("#new-page").style.display ="none";
   document.querySelector("#container").style.display ="block";
   email.value = ''
psw.value = ''
}
