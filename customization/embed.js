setInterval(function() {
document.getElementById('embedstuff').value = `https://${document.domain}/embeds${location.pathname}${location.search}`
console.log(`https://${beta.mixerno.space}/embeds${location.pathname}${location.search}`)
}, 2000);