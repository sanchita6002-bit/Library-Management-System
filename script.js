
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

  // Open Rent Form and prefill book details
function openRentForm(bookName, authorName) {
    // Show the Rent Book Form
    document.getElementById("rent-book-form").style.display = "block";

    // Scroll to the form
    document.getElementById("rent-book-form").scrollIntoView({ behavior: 'smooth' });

    // Prefill book name and author
    document.getElementById("bookName").value = bookName;
    document.getElementById("authorName").value = authorName;
}

// Attach to navbar rent link
document.querySelector('a[href="#rent"]').addEventListener('click', function(e) {
    e.preventDefault(); // prevent default anchor behavior
    document.getElementById("rent-book-form").style.display = "block";
    document.getElementById("rent-book-form").scrollIntoView({ behavior: 'smooth' });
});

// Handle form submission
document.getElementById("rentForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent actual form submission

    
});

document.getElementById("rentForm").addEventListener("submit", function (e) {
    e.preventDefault(); // page reload rokta hai

    // Form hide karo
    document.getElementById("rent-book-form").style.display = "none";

    // Success popup show karo
    document.getElementById("successMessage").style.display = "flex";

    // Form reset
    this.reset();
});

function closePopup() {
    document.getElementById("successMessage").style.display = "none";
}