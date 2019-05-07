/*global fetch*/


function onClick(){
 const keyword = document.getElementById("input").value;

 
  fetch("/data" + "?" + "word=" + keyword)
  .then(response=>response.text())
  .then(function(response){
      
   document.getElementById("results-div").innerHTML = response;
   
   console.log(keyword)
  });

}








