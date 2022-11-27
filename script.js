Array.from(document.querySelectorAll(".navigation-button")).forEach((item) =>{
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change');
    };
});


$(document).ready(function () {
    $('ul.navbar-nav > li')
            .click(function (e) {
        $('ul.navbar-nav > li')
            .removeClass('active');
        $(this).addClass('active');
    });
});

//help button
function myFunction() {
    alert("Form Example:\nFull Name: Chisca Denis Viorel\nEmail: abc@gmail.com    Phone: 0774 457 012\nMessage: Hello!");
}

//DarkMode
function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
  }
  function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
  }

  //SearchFunction
  function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}