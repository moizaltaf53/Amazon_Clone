// JavaScript code

// Function to handle the "Search" button click
function searchAmazon() {
    const searchInput = document.querySelector('.search-input').value;
    // You can add your search functionality here, for example, redirect to search results page.
    alert('Searching for: ' + searchInput);
}

// Function to handle the "Cart" button click
function viewCart() {
    // You can add your cart functionality here, for example, show the user's cart.
    alert('Viewing Cart');
}

// Add event listeners for the search and cart buttons
document.querySelector('.search-icon').addEventListener('click', searchAmazon);
document.querySelector('.nav-cart').addEventListener('click', viewCart);

// Function to toggle the visibility of the panel options
function togglePanelOptions() {
    const panelOptions = document.querySelector('.panel-options');
    panelOptions.classList.toggle('visible');
}

// Add event listener for the "All" button to toggle panel options
document.querySelector('.pane-all').addEventListener('click', togglePanelOptions);
