
let urlArray = window.location.href.split('/');
const homeUrl = urlArray.pop() && urlArray.join('/');


// choosing options:
// needed: localStorage
// want: animate in button .5s fade in
// pt 2: animate out button .25s fade out





const headerButton = document.createElement('div');

headerButton.innerText = "Choose Header";
headerButton.style.textAlign = "center";
headerButton.style.width = "40vw";
headerButton.style.background = "#FFFFFF";
headerButton.style.margin = "0 auto";
headerButton.style.padding = "4px";
headerButton.style.borderRadius = "5%/20%";
headerButton.style.borderColor = "#000000";
headerButton.style.borderWidth = "2px";

headerButton.onclick = () => {
  location.href = `${homeUrl}/headerContentFormat.html`
}

// apply button to each option if clicked
const options = document.getElementsByClassName('option')

for(let i = 0; i < options.length; i++){
  options[i].addEventListener('touchstart', () => {
    // add headerButton
    options[i].getElementsByClassName;
    options[i].appendChild(headerButton);
  })
}
