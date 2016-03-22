var Firebase = require('firebase')
var base = new Firebase('https://vr-slideshow.firebaseio.com')
var index = 1
base.child('slide').on('value', (snapshot)=>{
    document.querySelector('#slide'+parseInt(index)).setAttribute('visible', 'false')
    document.querySelector('#slide'+parseInt(snapshot.val())).setAttribute('visible', 'true')
    index = snapshot.val()
    console.log('changed')
})