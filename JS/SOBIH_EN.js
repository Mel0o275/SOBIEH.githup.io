// dark mode
const toggleButton = document.getElementById('toggle-button');
const cssLink = document.getElementById('css-link');

toggleButton.addEventListener('click', function() {
    // Check the current CSS file
    const currentCSS = cssLink.getAttribute('href');
    
    // Toggle between dark-mode.css and light-mode.css
    if (currentCSS === 'CSS/Sobih_theme1_EN.css') {
        cssLink.setAttribute('href', 'CSS/Sobih_theme2_EN.css');
    } else {
        cssLink.setAttribute('href', 'CSS/Sobih_theme1_EN.css');
    }
});

//list by subjects search 
  const E = document.querySelectorAll("#en");
E.forEach(E =>{

    E.addEventListener("click", function () {
        window.location.href = "EN_main.html";
    });
});


/*connect variable to classes*/ 
const selectBox = document.querySelector('.select-box');
const selectOption = document.querySelector('.select-option');
const soValue = document.querySelector('#soValue');
const optionSearch = document.querySelector('#optionSearch');
const options = document.querySelector('.options');
// querySelectorAll bec more than one li
const optionsList = document.querySelectorAll('.options li');

selectOption.addEventListener('click',function(){
    /*classList.toggle('active')
     toggles the presence of the CSS class "active"
     on the selectBox element. If the class is already present,
     it removes it; if it's not present, it adds it.
    */
        selectBox.classList.toggle('active');
    });
    
    /*=>loop for each element*/optionsList.forEach(/*parameter*/optionsListSingle => {
        optionsListSingle.addEventListener('click', function() {
            /*textcontent=>mean the chosen string li save in variable text*/
            const text = optionsListSingle.textContent;
            /*soValue.value = text:mean the text is written in the select input*/
            soValue.value = text;
            /* to close the search */
            selectBox.classList.remove('active');
        })
    });


/*keyup=>fun excute when user typing*/optionSearch.addEventListener('keyup',function(){
       /*declare var*/
       var filter,li,i,textValue;
       /*filter=القيمه التي تم البحث عنها */
       /*toUpperCase=> عشان تشتغل لو تم البحث عن احرف صغيرة*/
        filter = optionSearch.value.toUpperCase();
        /*search in options=>li by the input entered */
        li = options.getElementsByTagName('li');
        
        for(i=0 ; i<li.length ; i++){
            /*textcontent=>mean the chosen string li save in variable text*/
            textValue = li[i].textContent;
            /*The indexOf() method searches for a specified value (filter)
            if exist display it
            if not display it */
            if(textValue.toUpperCase().indexOf(filter) > -1){
                li[i].style.display='';
            }
            else{
                li[i].style.display='none';
            }
        }
    });
    
    function validateAndSubmit(event) {
        event.preventDefault();
        validate2(event); // Call the validate2 function
        MYfun(event); // Call the MYfun function
    }
    
    function MYfun(event) {
        // to store data in localStorage
            event.preventDefault();
            var name = document.getElementById("name").value;
            var Last_name = document.getElementById("L_name").value;
            var EMAIL = document.getElementById("E").value;
            var BIRTH = document.getElementById("d").value;
            var phone = document.getElementById("p").value;
            var phone2 = document.getElementById("pp").value;
            var Address = document.getElementById("a").value;
            var Address2 = document.getElementById("aa").value;
            var CITY = document.getElementById("c").value;
            var password = document.getElementById("password").value;
    
            localStorage.setItem('is_first_name', name);
            localStorage.setItem('is_last_name', Last_name);
            localStorage.setItem('is_Email', EMAIL);
            localStorage.setItem('is_birth', BIRTH);
            localStorage.setItem('is_phone', phone);
            localStorage.setItem('is_second_phone', phone2);
            localStorage.setItem('is_Address', Address);
            localStorage.setItem('is_second_Address', Address2);
            localStorage.setItem('is_password', password);
            localStorage.setItem('is_City', CITY);
    
        }
    function validate2(event) {
        // validation code
        event.preventDefault(); // Prevent default form submission behavior
        
        // Check if any field is empty
        var inputs = document.querySelectorAll('.name_pass_EN_on2');
        var isEmpty = false;
        for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
        isEmpty = true;
        }
        }
        
        // Display an alert if any field is empty
        if (isEmpty) {
        alert("there are some fileds is empty Please, fill in all fields.");
        return; // Exit the function early if any field is empty
        }
        
        // Check if the password is less than 8 characters
        var passwordInput = document.getElementById('password');
        if (passwordInput.value.trim().length < 8) {
        alert("Password must be at least 8 characters long.");
        return; // Exit the function early if password is too short
        }
        
        // If all validations pass, show success message
        alert("Form Is Submitted. Please wait for the team to call you,In order to confirm the reservation");
    }
