function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock('clockdiv', deadline);

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
sr.reveal('.launch', {
  duration: 3000,
  origin: 'bottom',
  distance: '300px'
});
sr.reveal('.email', {
  duration: 3000,
  origin: 'left',
  distance: '300px'
})
sr.reveal('.submit-button', {
  duration: 3000,
  origin: 'right',
  distance: '300px'
})

  function change() {
    document.getElementsByClassName('landpage').style.background = "black";
    console.log('right');
  }


  document.getElementById('postForm').addEventListener('submit', postEmail);

  function postEmail(e) {
      e.preventDefault();

      var email = document.getElementById('email').value;
      
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'process.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      

      xhr.onload = function(){
        console.log(this.responseText);
      }
      xhr.send('email='+email);
  }