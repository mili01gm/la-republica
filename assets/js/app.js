//Newspaper logo div
var logo = document.createElement("img");
logo.setAttribute("class","logo");
logo.setAttribute("id","logo");
logo.setAttribute("src","assets/img/images/logo.png");

//Social Icons div
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

//Search input
var busca = document.createElement("input");
busca.setAttribute("class","search-bar");
var lupa = document.createElement("span");
lupa.setAttribute("class","icon-search-d")
busca.setAttribute("id","search-input");
busca.setAttribute("type","search");
busca.innerHTML = lupa;

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

// TODO: on window.load create menu-logo, menu news
// TODO: on window.load create news sprite


//The web on load
window.addEventListener("load",function(){

document.getElementById("menu-logo").appendChild(logo);
document.getElementById("menu-logo").appendChild(divIcons);
document.getElementById("menu-logo").appendChild(busca);
document.getElementById("menu-news").appendChild(noticias());

});
