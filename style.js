function getAgeSuffix(age) {
  if (age % 10 === 1 && age !== 11) {
    return "st";
  } else if (age % 10 === 2 && age !== 12) {
    return "nd";
  } else if (age % 10 === 3 && age !== 13) {
    return "rd";
  } else {
    return "th";
  }
}

function myFunction() {
  let ageInput = document.getElementById("myInput").value;
  let age = parseInt(ageInput, 10);
  let suffix = getAgeSuffix(age);
  document.getElementById(
    "result"
  ).textContent = `Happy ${ageInput}'${suffix} birthday`;

  document.getElementById("card2").style.display = "none";
  document.getElementById("hearts").style.visibility = "visible";

  document.getElementById("card").style.display = "flex";
  let audio = document.getElementById("sound");
  audio.play();
}
