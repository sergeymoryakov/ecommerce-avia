// type code here
// Assuming you have an array of image URLs from the database
const imageUrls = [
    "./images/img_comp_display_1.png",
    "./images/img_cabin_seat_business_01.png",
    "./images/img_comp_flt_rec_1.png",
    "./images/img_cockpit_watch_1.png",
    "./images/img_eng_01.png",
    "./images/img_eng_04.png",
];

// Function to create a clickable image button dynamically
function createImageButton(src) {
    const button = document.createElement("button");
    button.className = "aside__cart-item-btn";
    button.style.backgroundImage = `url('${src}')`;
    button.addEventListener("click", () => {
        // Add your click event handling logic here
        // For example, you can open a modal or perform an action based on the image clicked
        console.log(`Clicked image: ${src}`);
    });
    return button;
}

// Function to generate and append the image buttons to the cartItems container
function renderCartItems() {
    const cartItemsContainer = document.getElementById("cartItems");
    imageUrls.forEach((imageUrl) => {
        const button = createImageButton(imageUrl);
        cartItemsContainer.appendChild(button);
    });
}

// Call the function to generate the image buttons
renderCartItems();
