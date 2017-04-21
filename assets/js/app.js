//div para el logo
var logo = document.createElement("img");
logo.setAttribute("class","logo");
logo.setAttribute("id","logo");
logo.setAttribute("src","assets/img/images/logo.png");

//DIV de iconos social
var divIcons = document.createElement("div");
divIcons.setAttribute("class","social");
var tIcon = document.createElement("div");
tIcon.setAttribute("class","div-icon");
var twitter = document.createElement("span");
twitter.setAttribute("class","icon-twitter");
tIcon.appendChild(twitter);
var fIcon = document.createElement("div");
fIcon.setAttribute("class","div-icon");
var face = document.createElement("span");
face.setAttribute("class","icon-face");
fIcon.appendChild(face);
var yIcon = document.createElement("div");
yIcon.setAttribute("class","div-icon");
var youtube = document.createElement("span");
youtube.setAttribute("class","icon-youtube");
yIcon.appendChild(youtube);
var iIcon = document.createElement("div");
iIcon.setAttribute("class","div-icon");
var instagram = document.createElement("span");
instagram.setAttribute("class","icon-insta");
iIcon.appendChild(instagram);
divIcons.appendChild(tIcon);
divIcons.appendChild(fIcon);
divIcons.appendChild(yIcon);
divIcons.appendChild(iIcon);

//Input de busqueda
var busca = document.createElement("input");
busca.setAttribute("class","search-bar");
var lupa = document.createElement("span");
lupa.setAttribute("class","icon-search-d")
busca.setAttribute("id","search-input");
busca.setAttribute("type","search");
busca.innerHTML = lupa;

//Funcion para crear las secciones de noticias
var noticias = function(){
  var menu = ["Política","Economía","Sociedad","Mundo","Deportes","Espectáculos","Ed.Impresa","Investigación","Más"]
  var barraMenu = document.createElement("div");
  barraMenu.setAttribute("class","menu-bar");
  for(var i=0; i<menu.length; i++){
    var opt = document.createElement("a");
    opt.setAttribute("class","text-uppercase")
    opt.innerText = menu[i];
    barraMenu.appendChild(opt);
  }
  return barraMenu
}

//Sprite
var sprite = document.createElement("div");
sprite.setAttribute("class","sprite");

var resaltados = document.createElement("section");
resaltados.setAttribute("class","recent")
var section1 = document.createElement("section");
section1.setAttribute("class","section1");
var new1 = document.createElement("div");
new1.setAttribute("class","img-news");
new1.setAttribute("id","new1");
var img1 = document.createElement("div");
img1.setAttribute("class","sprite");
img1.setAttribute("id","foto1");
var texto1 = document.createElement("div");
texto1.setAttribute("id","texto-foto1");
texto1.innerText = "Los colaboradores eficaces han documentado su relato en caso Lava Jato"
new1.appendChild(texto1);
new1.appendChild(img1);
var new2 = document.createElement("div");
new2.setAttribute("class","img-news");
new2.setAttribute("id","new2");
var new3 = document.createElement("div");
new3.setAttribute("class","img-news");
new3.setAttribute("id","new3");
section1.appendChild(new1);
section1.appendChild(new2);
section1.appendChild(new3);

var section2 = document.createElement("section");
section2.setAttribute("class","section2");
var art1 = document.createElement("div");
art1.setAttribute("class","img-news");
art1.setAttribute("id","art1");
var art2 = document.createElement("div");
art2.setAttribute("class","img-news");
art2.setAttribute("id","art2");
var art3 = document.createElement("div");
art3.setAttribute("class","img-news");
art3.setAttribute("id","art3");
var art4 = document.createElement("div");
art4.setAttribute("class","img-news");
art4.setAttribute("id","art4");

resaltados.appendChild(section1);
resaltados.appendChild(section2);

// TODO: on window.load create news sprite

//The web on load
window.addEventListener("load",function(){

  document.getElementById("menu-logo").appendChild(logo);
  document.getElementById("menu-logo").appendChild(divIcons);
  document.getElementById("menu-logo").appendChild(busca);
  document.getElementById("menu-news").appendChild(noticias());
  // document.getElementById("news").appendChild(sprite);
  document.getElementById("news").appendChild(resaltados);

});
