require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({4:[function(require,module,exports){
var Firebase = require('firebase')
var base = new Firebase('https://vr-slideshow.firebaseio.com')
var index = 1
base.child('slide').on('value', (snapshot)=>{
    document.querySelector('#slide'+parseInt(index)).setAttribute('visible', 'false')
    document.querySelector('#slide'+parseInt(snapshot.val())).setAttribute('visible', 'true')
    index = snapshot.val()
    console.log('changed')
})
},{"firebase":1}]},{},[4]);
