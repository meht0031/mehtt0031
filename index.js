const body = document.getElementById('body')
const section = document.querySelector('.grid')
var banner = document.querySelector('.banner')
var title = "WWE 2k16 Superstars"
const HTMLOfDivs = []
const ImagesPath = ['',
    'enzo','barry','dean','dolf','undertaker','jack','samy','i7','kevin','stardust','Ryback','bad news',
]
for(let a = 1; a < 13; a++){
    HTMLOfDivs.push(`
<div class="imgBox">
<p>Thumbnail</p>
<h4>${ImagesPath[a]}</h4>
<img class="gridImage" title="${ImagesPath[a]}" src="./img/${ImagesPath[a]}.jpg">
            </div>
`)
}
console.log(HTMLOfDivs)
section.innerHTML = HTMLOfDivs.join(' ')

banner.textContent = title



var popup = document.getElementById('popup')
// add eventlistner

const imageBox = document.querySelectorAll('.gridImage')
for(let img of imageBox){
    img.addEventListener('click', function(){
        console.log(this.src)
        popup.style.display = "block"
        section.style.visibility = "hidden"
        popup.style.visibility = "visible"
        popup.innerHTML = `<h1>${this.title}</h1><img src="${this.src}" />`
      })
}


window.addEventListener('mouseup', function(ev){
if(ev.target !== popup && ev.target.parentNode !== popup ){
    popup.innerHTML = ``
    
        section.style.visibility = "visible"
        popup.style.display = "none"
        popup.style.visibility = "hidden"
}})