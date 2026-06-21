async function randomUser(){

const response =
    await fetch("https://randomuser.me/api/");

const data =
    await response.json();

const user =
    data.results[0];

document.getElementById("user-img").src =
    user.picture.large;

document.getElementById("user-name").innerText =
    user.name.first + " " + user.name.last;

document.getElementById("user-gender").innerText =
    user.gender;

document.getElementById("user-email").innerText =
    "📧 " + user.email;

document.getElementById("user-phone").innerText =
    "📞 " + user.phone;

document.getElementById("user-country").innerText =
    "🌍 " + user.location.country;

document.getElementById("user-age").innerText =
    "🎂 Age : " + user.dob.age;

localStorage.setItem(
    "lastEmail",
    user.email
);

let count =
    localStorage.getItem("randomCount") || 0;

count++;

localStorage.setItem(
    "randomCount",
    count
);


}

function copyEmail(){


const email =
    localStorage.getItem("lastEmail");

navigator.clipboard.writeText(email);

alert("Email Copied!");


}

function saveFavorite(){


const name =
    document.getElementById("user-name").innerText;

localStorage.setItem(
    "favoriteUser",
    name
);

alert("Added to Favorites ❤️");


}
