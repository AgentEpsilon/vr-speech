var Firebase = require('firebase')
var base = new Firebase('https://vr-slideshow.firebaseio.com')
var numberOfSlides
base.child('info').on('value', function(snapshot){
    numberOfSlides = snapshot.val().numberOfSlides
})
base.child('slide').on('value', function(snapshot){
    var i = snapshot.val()
    slide.innerHTML = "Slide "+i
    prev.disabled = i<=1
    next.disabled = i>=numberOfSlides
})
var next = document.querySelector('#next')
var prev = document.querySelector('#prev')
var slide = document.querySelector('#count')
next.addEventListener('click', changeSlideBy(1))
prev.addEventListener('click', changeSlideBy(-1))
changeSlideBy(0)()
function changeSlideBy(count) {
    return function() {
        base.child('slide').transaction(function(old){
            var newVal = old ? old+count : 1
            if (newVal >= 1 && newVal <= numberOfSlides) {
                return newVal
            }
        })
    }
}