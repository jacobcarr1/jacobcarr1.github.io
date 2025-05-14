const checkboxes = document.querySelectorAll(".song-checkbox");

const messages = [
  "Aliens Exist was clicked!",
  "What's My Age Again was clicked!",
  "Dumpweed was clicked!",
  "Adam's Song was clicked!",
  "All The Small Things was clicked!"
];

// Attach click event to each checkbox
checkboxes.forEach((box, index) => {
  box.onclick = () => alert(messages[index]);
});

function showEmail() {
    const email = document.getElementById("emailInput").value;
    alert("You entered:" + email);
}

function checkFavorite() {
    const fav = document.getElementById("favMember").value;
    const message = document.getElementById("memberMessage").value;

    if (fav === "Tom") {
        message.innerHTML = "Great choice!";
    } else if (fav === "Mark") {
        message.innerHTML = "Mark’s basslines are great!";
    } else if (fav === "Travis") {
        message.innerHTML = "Travis is a master drummer!";
    } else {
        message.innerHTML = "Please select a member!";
    }
}
