// Variables to keep track of the cart items count
let cartCount = 0;
console.log(cartCount);

// Adding event listener for all "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
        // Increment the cart count
        cartCount++;
        
        // Display the cart count as a red bubble
        const cartIcon = document.querySelector(".fa-shopping-bag");
        let bubble = document.querySelector(".cart-bubble");
        if (!bubble) {
            bubble = document.createElement("div");
            bubble.className = "cart-bubble";
            cartIcon.parentNode.appendChild(bubble);
        }
        bubble.textContent = cartCount;

        // Alert message
        alert("Your item has been added to the cart!");
    });
});

// Subscribe functionality
document.querySelector(".input-btn button").addEventListener("click", () => {
    const emailInput = document.querySelector(".input-btn input").value;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
        alert("Please enter a valid email address.");
    } else {
        alert("Subscribed successfully!");
    }
});

// Add smooth scroll behavior to footer links
document.querySelectorAll(".footer-links a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});
