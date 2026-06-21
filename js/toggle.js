let male = true;

function toggle() {

    if (male) {

        document.getElementById("user-img").src =
            "../image/jane.png";

        document.getElementById("user-name").innerText =
            "Jane Doe";

        document.getElementById("user-gender").innerText =
            "Female";

    } else {

        document.getElementById("user-img").src =
            "../image/john.png";

        document.getElementById("user-name").innerText =
            "John Doe";

        document.getElementById("user-gender").innerText =
            "Male";
    }

    male = !male;
}