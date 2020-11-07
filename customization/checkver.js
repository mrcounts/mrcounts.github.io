/*
This file is everywhere. What does it do?
It checks for a json that tells this file if its updated or not.
So everyone using this site would refresh. at the same time. why? If there is any bugs that i have fixed.
*/

var version = ""
fetch('//'+document.domain+'/version.json').then(res => res.json()).then(data => {
  var json = data
  version = json.version
  console.log(version)
})
setInterval(function () {
  fetch('//'+document.domain+'/version.json').then(res => res.json()).then(data => {
    var json = data
    if (version == json.version) {
      //Ok :thumbsup:
      console.log("Okay.")
    } else {
      console.log("Not Okay.")
      location.reload()
    }
  })
}, 10000);