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
    alert("You entered: " + email);
}
