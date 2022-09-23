
var visible = false;

function myFunction(x) {
  x.classList.toggle("change");
  const mobileMenuContainer = document.getElementById("mobile-menu-container");

    if (visible===false){
        mobileMenuContainer.style.display="block";
        visible=true;
      }

    else {
        mobileMenuContainer.style.display="none";
        visible=false;
    }
}

function displayMobileMenu(){
  const mobileMenuContainer = document.getElementById("mobile-menu-container");
  if(window.innerWidth>768){
    mobileMenuContainer.style.display="none";      
  }
  else if(window.innerWidth<768 && visible===true){
    mobileMenuContainer.style.display="block";
  }
}

function addEventListenerRadioClick(){
  const radioOptions = document.getElementsByClassName("option-radio");
  for(i=0; i<radioOptions.length; i++){
    radioOptions[i].addEventListener("change", optionSelect);
  }
}

function optionSelect() {
  clearBackgroundColor();
  this.parentNode.nextElementSibling.style.backgroundColor="#FAFAFA";
}

function clearBackgroundColor(){
  const optionRows = document.getElementsByClassName("options-row");
  for(i=0; i<optionRows.length; i++){
    optionRows[i].children[1].style.backgroundColor="white";
  }
}

function setNameBackgroundColor(){
  const name = document.getElementById("name");
  name.style.backgroundColor="#FAFAFA";
}

function setTelBackgroundColor(){
  const tel =document.getElementById("tel");
  tel.style.backgroundColor="#FAFAFA";
}

function setEmailBackgroundColor(){
  const email=document.getElementById("email");
  email.style.backgroundColor="#FAFAFA";
}

function showModal(){
  const modalContainer =document.getElementById("modal-container");
  const modalName = document.getElementById("modal-name");
  const modalTel = document.getElementById("modal-tel");
  const modalEmail = document.getElementById("modal-email");

  const name = document.getElementById("name");
  const tel = document.getElementById("tel");
  const email = document.getElementById("email");

  modalName.innerHTML = name.value;
  modalTel.innerHTML = tel.value;
  modalEmail.innerHTML = email.value;
  modalContainer.style.display="block";
}

function closeModal(){
  const modalContainer = document.getElementById("modal-container");
  modalContainer.style.display="none";
}
