"use strict";

//chart
// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: ['HTML', 'SCSS', 'CSS', 'JavaScript'],
//         datasets: [{
//             label: 'Cod utilizat',
//             data: [82.8, 7.6, 7.4, 2.2,],
//             backgroundColor: [
//               'RGB(226, 75, 37)',
//               'RGB(197, 83, 139)',
//               'RGB(85, 61, 124)',
//               'RGB(240, 223, 89)',
//             ],
//             borderColor: [
//               'RGB(226, 75, 37)',
//               'RGB(197, 83, 139)',
//               'RGB(85, 61, 124)',
//               'RGB(240, 223, 89)',
//             ],
//             legend: {
//                 display: false
//             },
//             hoverOffset: 4
//         }]
//     }
// });

// Form validation
const forms = document.querySelectorAll(".needs-validation");

Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    },
    false
  );
});

// Tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Scroll to top button
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Change year in footer
const yearChange = document.querySelector("#currentYear");
yearChange.innerHTML = new Date().getFullYear();

// Modal window
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});

// Person object

let person = {
  firstName: `Daniel`,
  lastName: `Surlaru`,
  age: 28,
  email: `surlaru@bk.ru`,
};
console.log(person);

let navItems = document.querySelectorAll(".nav-item");
console.log("navItems", navItems);
