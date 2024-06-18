
function myFunction() {
  if(screen.width<640){
    document.querySelector('.main').style.display='none';
    document.querySelector('.phrase').style.color='black';
  Swal.fire({
    title: "<i>Are you into Meditation</i>", 
    html: "Please! for better Experience go for landscape mode:<b>Confirm</b>",  
    confirmButtonText: "<u>Confirm</u>", 
  });
}else{
  document.querySelector('.main').reload() 
  }    
}