document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date().toLocaleDateString();
    var dateElements = document.querySelectorAll('.current-date');

    dateElements.forEach(function(element) {
        element.textContent = currentDate;
    });
});
