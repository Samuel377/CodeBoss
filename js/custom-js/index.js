 window.sr = ScrollReveal();

sr.reveal('.logo-left', {
  duration: 2000,
  origin: 'right',
  distance: '200px'
});
sr.reveal('.logo-right', {
  duration: 4000,
  origin: 'left',
  distance: '200px'
});
sr.reveal('.text', {
  duration: 3000,
  origin: 'bottom',
  distance: '300px'
});
sr.reveal('h2', {
  duration: 3000,
  origin: 'left',
  distance: '300px'
});
sr.reveal('.how-it-works', {
  duration: 3000,
  origin: 'left',
  distance: '300px'
});
sr.reveal('h5', {
  duration: 3000,
  origin: 'right',
  distance: '300px'
});
sr.reveal('h4', {
  duration: 4000,
  origin: 'top ',
  distance: '300px'
});
sr.reveal('p', {
  duration: 3000,
  origin: 'left',
  distance: '300px'
});
sr.reveal('.email', {
  duration: 5000,
  origin: 'left',
  distance: '500px'
});
sr.reveal('.submit-button', {
  duration: 5000,
  origin: 'right',
  distance: '500px'
})

  function change() {
    document.getElementsByClassName('landpage').style.background = "black";
    console.log('right');
  }


