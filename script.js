let remove = document.querySelector(".remove");
let reklam = document.querySelector(".reklam");




    


          
 
    if(localStorage.getItem("data") === null){
      setTimeout(()=>{
    localStorage.setItem("data","false")
    console.log(localStorage.getItem("data"))
  }, 5000)
    }
    

 
  console.log(localStorage.getItem("data"))




if(localStorage.getItem("data")== "false"){
  reklam.style.display ="block";
}

else 
    if(localStorage.getItem('data') == "true"){

  reklam.remove();

}
        remove.addEventListener("click", ()=>{
        
          reklam.style.display="none";
            localStorage.setItem("data", "true");
            
          
            localStorage.clear();
           
          
              
        })
      
       console.log(localStorage.getItem("data"))
   
    
    


    





