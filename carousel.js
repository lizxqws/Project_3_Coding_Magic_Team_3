const students = [
    { name: "Коля", description: "Інформація про роботу Колі", image: "" },
    { name: "Лiза", description: "Інформація про роботу Лiзи", image: "" },
    { name: "Георгiй", description: "Інформація про роботу Георгiя", image: "" }
];

let currentIndex = 0;

function updateCarousel() {
    document.getElementById('studentName').textContent = students[currentIndex].name;
    document.getElementById('studentDescription').textContent = students[currentIndex].description;
}

function next() {
    currentIndex = (currentIndex + 1) % students.length;
    updateCarousel();
}

function previous() {
    currentIndex = (currentIndex - 1 + students.length) % students.length;
    updateCarousel();
}

updateCarousel();
