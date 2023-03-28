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

const sr = ScrollReveal({
  origin:'left',
  distance:'120px',
  duration:1500,
  reset:true
}) 
   // scroll HOME//
  //  sr.reveal('#home',{})
   sr.reveal('#one',{delay:300})
   sr.reveal('.home-img',{delay:800})
   sr.reveal('#user-detail-name',{delay:600})
   sr.reveal('.text-1',{delay:100})
   sr.reveal('#resume-button-2',{interval:800})
 
  //  sr.reveal('#about h1',{delay:200})
   sr.reveal('.left',{delay:400})
   sr.reveal('.right',{delay:900})


  // scroll SKILLS//
  sr.reveal('.skill',{delay:200})


       // scroll PROJECTS//
       sr.reveal('.project',{})
       sr.reveal('.project-card img',{delay:100})
       sr.reveal('.project-title',{delay:200})
       sr.reveal('.project-description',{delay:200})
       sr.reveal('.project-tech-stack',{delay:200})
       sr.reveal('.repo-links',{delay:200})


         // scroll GITHUB//
    sr.reveal('#github-streak-stats',{delay:200})
    sr.reveal('#github-top-langs',{delay:400})
    sr.reveal('#github-stats-card',{delay:600})

    sr.reveal('.calendar',{delay:600})

