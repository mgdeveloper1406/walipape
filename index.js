const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const fullImage = function (value, object) {
  console.log("Object", value);
  modal.style.display = "block";
  modalImg.src = value;
};

const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

const snow = document.querySelectorAll(".snow");
const rock = document.querySelectorAll(".rocks");
//const underwat = document.querySelectorAll(".underwater");
const mountainsk = document.querySelectorAll(".mountainskies");
const kolk = document.querySelectorAll(".kolkata");
//const ocea = document.querySelectorAll(".ocean");

const inputSrch = document.querySelector("#search");
inputSrch.addEventListener("keyup", (e) => {
  console.log("Search =>", e.target.value);
  if ("snow" == e.target.value) {
    for (let i = 0; i < rock.length; i++) {
      rock[i].style.display = "none";
    }

    for (let i = 0; i < mountainsk.length; i++) {
      mountainsk[i].style.display = "none";
    }
    for (let i = 0; i < kolk.length; i++) {
      kolk[i].style.display = "none";
    }
  }
  if ("rocks" == e.target.value) {
    for (let i = 0; i < snow.length; i++) {
      snow[i].style.display = "none";
    }
    for (let i = 0; i < mountainsk.length; i++) {
      mountainsk[i].style.display = "none";
    }
    for (let i = 0; i < kolk.length; i++) {
      kolk[i].style.display = "none";
    }
  }
});
