var linkElement = document.createElement("a");
linkElement.setAttribute("href", "http://rocketseat.com.br");
linkElement.setAttribute("title", "Site Rocketseat");

var textElement = document.createTextNode("Acessar site da Rocketseat");
linkElement.appendChild(textElement);

var containerElement = document.querySelector("#app");
containerElement.appendChild(linkElement);

var inputElement = document.querySelector("#nome");
containerElement.removeChild(inputElement);
