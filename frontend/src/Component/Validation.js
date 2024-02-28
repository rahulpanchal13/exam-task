import React from 'react'

export default function Validation(values) {
   console.log("nmae",values.name);

 var errors={};
 if(values.username===""){
   errors.username="Please enter username"
 }else{
   errors.username=""
 }

 var emailPattern = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
 if(values.email===""){
    errors.email="Please enter email"
 }else if(!emailPattern.test(values.email)){
   errors.email="Invalid email address"
 }
 else{
    errors.email=""
 }


 if (values.password === "") {
   errors.password = "Please enter password";
 } else {
   errors.password = "";
 }
 
 return errors;
}
