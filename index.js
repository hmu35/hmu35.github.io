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
           "https://drive.google.com/file/d/13yDBeuELzLJuH5rnBLqBfLbA9yqhiAIb/view?usp=sharing")
       );
      }
     
     
     
     
               //hamburger//
     
     let hamburger = document.querySelector(".hamburger")
     hamburger.onclick = ()=>{
      let navlist = document.querySelector(".nav-list")
      navlist.classList.toggle("active")
     
     }
      

     const sr = ScrollReveal({
      origin: 'left',
      distance: '120px',
      duration: 2000,
      reset: true
  })
  
  sr.reveal('#about h1', { delay: 200})
  sr.reveal('.home-img', { delay: 600 })
  sr.reveal('#user-detail-intro', { delay: 600 })
  sr.reveal('.skill', { delay: 200 })
  
  sr.reveal('.project', {})
  sr.reveal('.project-card img', { delay: 100 })
  sr.reveal('.project-title', { delay: 200 })
  sr.reveal('.project-description', { delay: 200 })
  sr.reveal('.project-tech-stack', { delay: 200 })
  sr.reveal('.repo-links', { delay: 100 })
  
  sr.reveal('#github-streak-stats', { delay: 400 })
  sr.reveal('#github-top-langs', { delay: 400 })
  sr.reveal('#github-stats-card', { delay: 600 })
  
  sr.reveal('.calendar', { delay: 600 })

  function mode(){
  let body=document.querySelector("body");
    
  }