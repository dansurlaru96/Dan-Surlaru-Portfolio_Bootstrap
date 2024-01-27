const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const yearChange = document.querySelector("#currentYear");
yearChange.innerHTML = new Date().getFullYear();

let getTimeandDate = () => {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    let timeandDate = `${date} ${time}`;
    return timeandDate;
} 
console.log(getTimeandDate());