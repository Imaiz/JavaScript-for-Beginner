// const myName = "Varayut";
// let height = 175;
// let isMail = false;
// let city = null;
// let bigNumber = 10n;

// console.log(myName, height, isMail, city, bigNumber);

// // Object
// const person = {
//   name: "Varayut",
//   height: 175,
//   city: "Bangkok",
// };

// console.log(person.name);

// person.height = 180;
// console.log(person);

// person.weight = 70;
// console.log(person);

// // Array
// const numbers = [5, 10, 15, 20];
// console.log(numbers[2]);

// numbers.push(25);
// console.log(numbers);

// numbers.pop();
// console.log(numbers);

// numbers.unshift(1);
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// // Calculate
// let result = 2 ** 3;
// console.log(result);

// // Conditonos
// let password = "";

// if (password === "") {
//   console.log("Password is required");
// } else if (password.length >= 8 && password.length <= 12) {
//   console.log("Password is valid");
// } else {
//   console.log("Password is invalid");
// }

// // Function
// function calculateVat(money, vat) {
//   return (money * vat) / 100;
// }

// const totalVat = calculateVat(100, 7);
// console.log(totalVat);

// const totalVat10 = calculateVat(100, 10);
// console.log(totalVat10);

// // Flow controll
// console.log("F1");
// for (let counter = 0; counter < 10; counter++) {
//   if (counter % 2 === 0) {
//     console.log(counter);
//   }
// }
// console.log("F2");
// for (let counter2 = 0; counter2 < 10; counter2++) {
//   if (counter2 % 2 !== 0) {
//     continue;
//   }
//   console.log(counter2);
// }
// console.log("F3");
// for (let counterBreak = 0; counterBreak < 10; counterBreak++) {
//   if (counterBreak === 5) {
//     break;
//   }
//   console.log(counterBreak);
// }

/////////////////////////////////////////

function appendImageElement(keyword, index) {
  const imgElement = document.createElement("img");
  imgElement.src = `https://source.unsplash.com/400x255/?${keyword}&sig=${index}`;

  const galleryElement = document.querySelector(".gallery");
  galleryElement.appendChild(imgElement);
}

function removePhoto() {
  const galleryElement = document.querySelector(".gallery");
  galleryElement.innerHTML = "";
}

function searchPhoto(event) {
  const keyword = event.target.value;

  if (event.key === "Enter" && keyword) {
    removePhoto();

    for (let i = 1; i <= 3; i++) {
      appendImageElement(keyword, i);
    }
  }
}

function run() {
  const inputElement = document.querySelector("input");
  inputElement.addEventListener("keydown", searchPhoto);
}

run();
