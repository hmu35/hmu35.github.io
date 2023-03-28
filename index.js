let sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
document.getElementById('resume-link-1').addEventListener("click",()=>{

  window.location.assign("https://drive.google.com/file/d/1kJExdD-ji-668y_tadHowvWGC_kxwi5J/view?usp=sharing", "_blank");
})

document.getElementById('resume-link-2').addEventListener("click",()=>{
 
  window.location.assign("https://drive.google.com/file/d/1kJExdD-ji-668y_tadHowvWGC_kxwi5J/view?usp=sharing", "_blank");
})



function apnaDeploy()
{
  window.location.href("https://strong-faloodeh-9f3ea9.netlify.app/");
}