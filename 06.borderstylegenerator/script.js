document.addEventListener("DOMContentLoaded", ()=> {

const container = document.querySelector(".container")
const allSide = document.getElementById("allside")
const allSide_value = document.getElementsByClassName("allside-value");
const border = document.querySelector("#border");
const border_Value = document.querySelector(".border-value");
const border_style = document.getElementById("Border-style");
const codes = document.querySelector("#code");
const btnCopy = document.getElementById("btncopy");

var allRadius = 10;
var allSize = 3;
var stylee = "solid";
var coding = "test";

function allBordersUpdate() {
    allRadius = allSide.value;
    allSize = border.value;
    allSide_value.innerHTML = allRadius + "px";
    border_Value.innerHTML = allSize + "px";
    coding = `border-radius: ${allRadius}px;
    border: ${allSize}px ${stylee} red`;
    codes.value = coding;
    
    container.style.cssText=coding;
}

allSide.addEventListener("mousemove",allBordersUpdate);
allSide.addEventListener("change",allBordersUpdate);

border.addEventListener("mousemove",allBordersUpdate);
border.addEventListener("change",allBordersUpdate);


btnCopy.addEventListener('click',()=>{
    document.querySelector('textarea').select();
    document.execCommand('copy');
    btncopy.innerHTML="copied!";
  
  });
  allBordersUpdate();

  border_style.addEventListener('change',function(){
    stylee=this.value;
    allBordersUpdate();
  });
  

});


