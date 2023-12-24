const first_name = document.getElementById("first_name"),
    middle_name = document.getElementById("middle_name"),
    last_name = document.getElementById("last_name"),
    email = document.getElementById("email"),
    phone_number = document.getElementById("phone_number"),
    input_file = document.getElementById("input_file"),
    input_message = document.getElementById("input_message");
function validate() {
    if (first_name.value <= 0) {
        alert("Fill the first name");
        return false;
    }
    if (middle_name.value <= 0) {
        alert("Fill the middle name");
        return false;
    }
    if (last_name.value <= 0) {
        alert("Fill the last name");
        return false;
    }
    if (email.value <= 0) {
        alert("Fill the email name");
        return false;
    }
    if (input_message.value <= 0) {
        alert("Fill your message");
        return false;
    }

}

function scrollToSection(sectionId, offset) {
    const section = document.getElementById(sectionId);
    if (section) {
        console.log(section.offsetTop)
        window.scrollTo({
            top: section.offsetTop - offset,
            behavior: "smooth"
        })
    }
}