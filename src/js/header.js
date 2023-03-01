// // Отримуємо всі елементи <header> на сторінці
// const headers = document.getElementsByTagName("header");

// // Отримуємо назву поточної сторінки з URL
// const currentPageName = window.location.pathname.split("/").pop().split(".")[0];

// // Перевіряємо, чи поточна сторінка є сторінкою "hotel", "restaurant" або "room"
// if (["hotel", "restaurant", "room"].includes(currentPageName)) {
//   // Проходимось по всіх елементах <header> і додаємо клас "new-class"
//   for (let i = 0; i < headers.length; i++) {
//     headers[i].classList.add("revers");
//   }
// }