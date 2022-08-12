function getNumber(num){
    var input = document.getElementById("inp" );
    input.value += num;
 }
 
 
 function calculate(){
     var input = document.getElementById("inp");
     input.value = eval(input.value);
 }
 
 function saim(){
     var inputs = document.getElementById("inp");
     inputs.value = "";
 }
 
 function rm(){
     var longp = document.getElementById("lp").innerHTML;
     console.log(longp);
     var shrtp = document.getElementById("sp");
     console.log(shrtp);
     shrtp.innerHTML = longp;
 }
 
 function saim(){
     var image = document.getElementById("car").className += " carimg"
 }
 
 function replaceImage(){
     var img1 = document.getElementById("img1");
     img1.src = "p2.jpg";
 }
 
 function version2(){
     var img1 = document.getElementById("img1");
     img1.src = "p1.jpg";
 }
 
 function repImg(id,src){
 var x = document.getElementById("img");
 x.src = src
 }
 
 
 function getNumber(num){
   inp.value += num
 }
 
 function calculate(){
     inp.value = eval(inp.value)
 }
 
 function saim(){
     inp.value = "";
 }