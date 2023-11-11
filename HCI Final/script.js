var mainLoginButton = document.querySelector(".form-btn");
var passwordInput = document.querySelector(".password-input");
var usernameInput = document.querySelector(".username-input");
var btn = document.querySelector(".btn");

const loginButton = document.querySelector(".btn");
const wrapper = document.querySelector(".wrapper");
const iconClose = document.querySelector(".icon-close");
const page = document.querySelector(".page")
const access1 = document.querySelector(".access1")
const access2 = document.querySelectorAll(".access2")
const access3 = document.querySelector(".access3")

function removeAccess() {
    access1.classList.add("disabled");
    access2.forEach(element => {
        element.classList.add("disabled");
    });
    access3.classList.add("disabled");
}
function addAccess() {
    if (sessionStorage.getItem("accessLevel") === "3") {
        access1.classList.remove("disabled");
        access2.forEach(element => {
            element.classList.remove("disabled");
        });
        access3.classList.remove("disabled");
    }
    else if (sessionStorage.getItem("accessLevel") === "2") {
        access1.classList.remove("disabled");
        access2.forEach(element => {
            element.classList.remove("disabled");
        });
    }
    else {
        access1.classList.remove("disabled");
    }
}
// document.addEventListener('DOMContentLoaded', function() {
//     if (sessionStorage.set)
// });

document.addEventListener('DOMContentLoaded', function () {
    loginButton.addEventListener('click', (event) => {
        if (sessionStorage.getItem("loggedin") !== "true") {
            event.preventDefault();
            wrapper.classList.add('active-popup');
            page.classList.add('no-scroll')
        }
        else {
            sessionStorage.clear();
            btn.innerHTML= "Login"
            console.log("Success")
            usernameInput.value = "";
            passwordInput.value = "";
            removeAccess()
        }
    
    });
    iconClose.addEventListener('click', ()=> {
        wrapper.classList.remove('active-popup')
        page.classList.remove('no-scroll')
    })
    if (sessionStorage.getItem("loggedin") === "true") {
        addAccess();
        btn.innerHTML = "Logout";
    }
    console.log(sessionStorage.getItem("accessLevel"));
});


mainLoginButton.addEventListener('click', function() {
    if (passwordInput.value !== "" && usernameInput.value !== "") {
        inputtedUsername = usernameInput.value;
        const foundCoach = coaches.find(coach => coach.userID === inputtedUsername);

        if (foundCoach) {
            handleLogin(foundCoach)
        }
        else {
            alert("Username not found.")
        }
    }
    else {
        console.log("no username or passoword")
    }
});


















function handleLogin(foundCoach) {
    const accessLevel = foundCoach.AccessLevel;
    sessionStorage.setItem('accessLevel', accessLevel);
    sessionStorage.setItem('loggedin', true)
    wrapper.classList.remove('active-popup')
    page.classList.remove('no-scroll')

    addAccess()
    btn.innerHTML = "Logout";
}


const coaches = [{
    "coachID": 2,
    "userID": "FC2",
    "Name": " Football Coordinator",
    "AccessLevel": 3,
    "Password": "f00tba!!",
    "TeamId": 0,
    "EmailAddress": "xyz@ggmail.ocm"
  },
  {
    "coachID": 27,
    "userID": "JG27",
    "Name": " Jospeh Gillespie",
    "AccessLevel": 2,
    "Password": "f00tba!!",
    "TeamId": 1,
    "EmailAddress": "xyz@ggmail.ocm"
  },
  {
    "coachID": 28,
    "userID": "KC28",
    "Name": " Kenton Chaney",
    "AccessLevel": 1,
    "Password": "f00tba!!",
    "TeamId": 1,
    "EmailAddress": "xyz@ggmail.ocm"
  }]