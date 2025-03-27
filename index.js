let submit = document.getElementById("sbbtn");
let firstname = "";
let lastname = "";
let email = "";
let option1 = "";
let option2 = "";
let option3 = "";
let start = document.getElementById("strtbtn");
let clk = false;
let pop = document.getElementById("popup");



submit.addEventListener("click", () => {

   firstname = document.getElementById("fname").value;
   lastname = document.getElementById("lname").value;
   email = document.getElementById("mail").value;
   option1 = document.getElementById("fund").value;
   option2 = document.getElementById("structure").value;
   option3 = document.getElementById("dom").value;
   clk = true;
});
let mywin;
let list=document.getElementById("opts");

start.addEventListener("click", () => {


   if (clk == false) {
      window.alert("you should first submit your personal information!");
   } else {
      //fundamenta section
         if(list.options[list.selectedIndex].text==="Fundamentals"){
            mywin = window.open("", "_self");

            mywin.document.write('<div id="mydv"><h1 id="myh"> <label id="l1">0</label> : <label id="l2">0</label></h1><fieldset id="f2"> <p>Question 1: What is javascript?</p><input type="checkbox" id="ch1"></input><label for="ch1">This is a programming language.</label><br></br><input type="checkbox" id="ch2"></input><label for="ch2">It is a section of Java programming language.</label><hr></hr><p>Question 2: what is the differnce between for and recursiom?</p><input type="checkbox" id="ch3"></input><label for="ch3">Both of them are the same.</label></br><input type="checkbox" id="ch4"></input><label for ="ch4">Recursion is used only inside its function.</label><hr></hr><p>Question 3: What is the difference between global and local scope?<p/><input type="checkbox" id="ch5"></input><label for="ch5">Both are the same.</label></br><input type="checkbox" id="ch6"></input><label for ="ch6"> Global scope is outside of function or structure but local is inside.</label</fieldset></div>');
            let mydiv = mywin.document.getElementById("mydv");
            mydiv.style.display="block";
            mydiv.style.border = "1px solid black";
            mydiv.style.width = "800px";
            mydiv.style.height = "550px";
            mydiv.style.borderRadius = "10%";
            mydiv.style.margin = "auto";
            mydiv.style.backgroundColor = "aqua";
            let myf2 = mywin.document.getElementById("f2");
            myf2.style.width = "80%";
            myf2.style.height = "60%";
            myf2.style.margin = "auto";
            myf2.style.marginTop = "8%";
            myf2.style.backgroundColor = "aquamarine";
            myf2.style.overflowY="scroll";
            let result=mywin.document.createElement("button");
            result.innerHTML="Result";
            mydiv.appendChild(result);
      
            result.style.marginLeft="350px";
            result.style.backgroundColor="pink";
            result.style.padding="10px 10px 20px 20px";

            mywin.document.write('<div id="thirdwin"><fieldset id="field3"><p id="myp"></p></fieldset></div>');
            let win3= mywin.document.getElementById("thirdwin");
            win3.style.display= "none";
            win3.style.border = "1px solid black";
            win3.style.width = "800px";
            win3.style.height = "550px";
            win3.style.borderRadius = "10%";
            win3.style.margin = "auto";
            win3.style.backgroundColor = "aqua";
            let myf3 = mywin.document.getElementById("field3");
            myf3.style.width = "80%";
            myf3.style.height = "60%";
            myf3.style.margin = "auto";
            myf3.style.marginTop = "8%";
            myf3.style.backgroundColor = "aquamarine";  
            let p=mywin.document.getElementById("myp");      


               //creat a timer function:

            let myh1 = mywin.document.getElementById("myh");
            myh1.style.textAlign = "center";
            let myv = 0;
            let myv2 = 0;

            let element = mywin.document.getElementById("l2"); 
            let element2 = mywin.document.getElementById("l1");
            let myint = setInterval(function () {
               if (myv == 10) {
                   myv = 0;
                   myv2++;
                   element2.innerHTML = myv2;
                   if (myv2 == 1) {
                      clearInterval(myint);
                      mydiv.style.display="none";
                     
                      win3.style.display = "block";
                      p.innerHTML="Your score is :"+score()+" out of 3.";
                      p.style.textAlign="center";
                      p.style.fontFamily="sans-serif";
                      p.style.fontSize="20";
                      p.style.marginTop="50px";
                  
                       
                      
                      
                      
                      
                     
                    
            }

          } 


               else {
                  myv += 1;
                  element.innerHTML = myv;
         }

      }, 1000);
      //create a score function:
      let ch1=mywin.document.getElementById("ch1");
      let ch2=mywin.document.getElementById("ch2");
      let ch3=mywin.document.getElementById("ch3");
      let ch4=mywin.document.getElementById("ch4");
      let ch5=mywin.document.getElementById("ch5");
      let ch6=mywin.document.getElementById("ch6");
      function score(){
         let scores=0
         if(ch1.checked==true && ch2.checked==false){
            scores+=1;
         }
         if(ch3.checked==true && ch4.checked==true){
            scores+=1;
         
         }
         if(ch6.checked==true && ch5.checked==false){
            scores+=1
         }
         return scores;
      }
      //create a result btn event listener:
      
      
   }
//end of fundamenta section

else if (list.options[list.selectedIndex].text==="Document Object Model"){
   mywin = window.open("", "_self");

   mywin.document.write('<div id="mydv"><h1 id="myh"> <label id="l1">0</label> : <label id="l2">0</label></h1><fieldset id="f2"> <p>Question 1: What is  DOM ?</p><input type="checkbox" id="ch1"></input><label for="ch1">Document Object Model.</label><br></br><input type="checkbox" id="ch2"></input><label for="ch2">It is a programming interface for web documents.</label><hr></hr><p>Question 2: what is the differnce between  document .write () and document.createElement()?</p><input type="checkbox" id="ch3"></input><label for="ch3">The document.write() is used to write HTML or plain text directly to the web page </br> &nbsp; &nbsp;&nbsp;&nbsp; but document.createElement() creates HTML specified by tag name or an </br>&nbsp; &nbsp;&nbsp;&nbsp; HTMLUnkownElement if tag name is not recognized.</label></br><input type="checkbox" id="ch4"></input><label for ="ch4">Document.write() is used only for string but Document.createElements is used to create </br> &nbsp;&nbsp;&nbsp;&nbsp HTML elements.</label><hr></hr><p>Question 3: How can you best define setInterval() method?<p/><input type="checkbox" id="ch5"></input><label for="ch5">It is used for repeatation.</label></br><input type="checkbox" id="ch6"></input><label for ="ch6"> It is used to repeat calling a function inside an interval of time.</label</fieldset></div>');
   let mydiv = mywin.document.getElementById("mydv");
   mydiv.style.border = "1px solid black";
   mydiv.style.width = "800px";
   mydiv.style.height = "550px";
   mydiv.style.borderRadius = "10%";
   mydiv.style.margin = "auto";
   mydiv.style.backgroundColor = "aqua";
   let myf2 = mywin.document.getElementById("f2");
   myf2.style.width = "80%";
   myf2.style.height = "60%";
   myf2.style.margin = "auto";
   myf2.style.marginTop = "8%";
   myf2.style.backgroundColor = "aquamarine";
   myf2.style.overflowY="scroll";

   let myh1 = mywin.document.getElementById("myh");
   myh1.style.textAlign = "center";
   let myv = 0;
   let myv2 = 0;
 //creat a timer function:
   let element = mywin.document.getElementById("l2");
   let element2 = mywin.document.getElementById("l1");
   let myint = setInterval(function () {
       if (myv == 20) {
          myv = 0;
          myv2++;
          element2.innerHTML = myv2;
          if (myv2 == 3) {
           clearInterval(myint);
 }

} 


    else {
       myv += 1;
       element.innerHTML = myv;
}

}, 1000);

} //End of DOM section


else if (list.options[list.selectedIndex].text==="Data Structure"){
   mywin = window.open("", "_self");

   mywin.document.write('<div id="mydv"><h1 id="myh"> <label id="l1">0</label> : <label id="l2">0</label></h1><fieldset id="f2"> <p>Question 1: What is a data structure?</p><input type="checkbox" id="ch1"></input><label for="ch1">This is a format to organize , manage and store data in a way to allow efficient access and </br>&nbsp; &nbsp; &nbsp;modification.</label><br></br><input type="checkbox" id="ch2"></input><label for="ch2">It is a collection of data values , the relationship among them and the operation that can be  </br>&nbsp; &nbsp; &nbsp;applied to that data.</label><hr></hr><p>Question 2: which one is a linear data structure?</p><input type="checkbox" id="ch3"></input><label for="ch3">Tree</label></br><input type="checkbox" id="ch4"></input><label for ="ch4">Array</label><hr></hr><p>Question 3: How can be data accessed form stack and qeue?<p/><input type="checkbox" id="ch5"></input><label for="ch5">From stack : first in first out and from qeue: last in first out.</label></br><input type="checkbox" id="ch6"></input><label for ="ch6"> From stack : last in first out and from qeue : first in first out.</label</fieldset></div>');
   let mydiv = mywin.document.getElementById("mydv");
   mydiv.style.border = "1px solid black";
   mydiv.style.width = "800px";
   mydiv.style.height = "550px";
   mydiv.style.borderRadius = "10%";
   mydiv.style.margin = "auto";
   mydiv.style.backgroundColor = "aqua";
   let myf2 = mywin.document.getElementById("f2");
   myf2.style.width = "80%";
   myf2.style.height = "60%";
   myf2.style.margin = "auto";
   myf2.style.marginTop = "8%";
   myf2.style.backgroundColor = "aquamarine";
   myf2.style.overflowY="scroll";

   let myh1 = mywin.document.getElementById("myh");
   myh1.style.textAlign = "center";
   let myv = 0;
   let myv2 = 0;
 //creat a timer function:
   let element = mywin.document.getElementById("l2");
   let element2 = mywin.document.getElementById("l1");
   let myint = setInterval(function () {
       if (myv == 20) {
          myv = 0;
          myv2++;
          element2.innerHTML = myv2;
          if (myv2 == 3) {
           clearInterval(myint);
 }

} 


    else {
       myv += 1;
       element.innerHTML = myv;
}

}, 1000);

}


      }
      

      });



     