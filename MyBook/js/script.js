function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('anim');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.anim-text');
  for (let elm of elements) {
    observer.observe(elm);
  }
  VANTA.NET({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x74bad2,
    backgroundColor: 0x111618,
    points: 11.00,
    maxDistance: 18.00,
    spacing: 17.00
  })
  const anims = document.querySelectorAll('a[href*="#"]')
  
  for (let anim of anims){
    anims.addEventListener("click", function(e){
      e.preventDefault();
      const blockID = anim.getAttribute('href')
      document.querySelector(' '+ blockID).scrollIntoView({
        behavior: "smooth",
        block:"start"
      })
    })
  }
  