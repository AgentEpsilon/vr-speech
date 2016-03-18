require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({2:[function(require,module,exports){
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
},{"firebase":1}]},{},[2]);
