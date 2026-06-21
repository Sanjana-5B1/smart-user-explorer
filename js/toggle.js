let isMale = true;

function toggle(){


const img = document.getElementById("user-img");
const name = document.getElementById("user-name");
const gender = document.getElementById("user-gender");

let count =
    localStorage.getItem("toggleCount") || 0;

count++;
localStorage.setItem("toggleCount", count);

if(isMale){

    img.src = "../image/jane.png";
    name.innerText = "Jane Doe";
    gender.innerText = "Female";

    isMale = false;
}
else{

    img.src = "../image/john.png";
    name.innerText = "John Doe";
    gender.innerText = "Male";

    isMale = true;
}


}
