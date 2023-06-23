document.getElementById("feet").addEventListener('input',function(){
    var i = this.value;
    var j = i * 12
    inch.value = j
})
document.getElementById("inch").addEventListener('input',function(){
    var k = this.value;
    var l = k/12
    feet.value = l
})
