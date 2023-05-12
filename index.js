       ///resume-button///

       let resume1 = document
       .getElementById("resume-link-1")
        .addEventListener("click",opendrive);
     
       let resume2 = document
       .getElementById("resume-link-2")
       .addEventListener("click",opendrive);
     
     
     function opendrive(){
       window.open(
         (href =
           "https://drive.google.com/file/d/1CRiMOu32XD011auQTXA2s-toOtaUATfP/view?usp=sharing")
       );
      }
     
     
     
     
               //hamburger//
     
     let hamburger = document.querySelector(".hamburger")
     hamburger.onclick = ()=>{
      let navlist = document.querySelector(".nav-list")
      navlist.classList.toggle("active")
     
     }
      
         // typing animation//
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


  