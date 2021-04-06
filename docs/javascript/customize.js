// remove Made with Material for MKDocs
const regex = /(<div.* <\/div>)/sg
let f = document.getElementsByClassName("md-footer-copyright")

for (let i =0; i < f.length; i++) {
    f[i].innerHTML = f[0].innerHTML.match(regex) 
}