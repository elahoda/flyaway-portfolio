const balloon = document.getElementById("air-balloon");
const cloudOne = document.getElementById("cloud-one");
const cloudTwo = document.getElementById("cloud-two");
const cloudThree = document.getElementById("cloud-three");
const cloudFour = document.getElementById("cloud-four");
const cloudFive = document.getElementById("cloud-five");
const javascript = document.getElementById("javascript");
const react = document.getElementById("react");
const gql = document.getElementById("gql");

function move() {
  const incrementer = window.scrollY;
  // the 10 refers to the initial position of the balloon,
  // added in the css file.

  balloon.style.bottom = 10 + incrementer * 0.1 + "%";

  cloudOne.style.bottom = 30 + incrementer * 0.2 + "%";
  cloudOne.style.left = 75 + incrementer * 0.1 + "%";

  cloudTwo.style.bottom = 75 + incrementer * 0.12 + "%";
  cloudTwo.style.left = 70 + incrementer * 0.15 + "%";

  cloudThree.style.bottom = 50 + incrementer * 0.1 + "%";
  cloudThree.style.left = 0 + incrementer * -0.12 + "%";

  cloudFour.style.bottom = 60 + incrementer * 0.16 + "%";
  cloudFour.style.left = 20 + incrementer * -0.15 + "%";

  cloudFive.style.bottom = 65 + incrementer * 0.2 + "%";
  cloudFive.style.left = 60 + incrementer * 0.16 + "%";

  javascript.style.left = 20 + incrementer * -2.21 + "%";
  react.style.left = 26 + incrementer * -1.5 + "%";
  gql.style.left = 32 + incrementer * -1 + "%";
}

window.addEventListener("scroll", move);
