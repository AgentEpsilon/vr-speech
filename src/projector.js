var Firebase = require('firebase')
var base = new Firebase('https://vr-slideshow.firebaseio.com')
var slide = document.querySelector('#slide')
base.child('slide').on('value', function(snapshot) {
    slide.innerHTML = "Slide #"+snapshot.val()
})