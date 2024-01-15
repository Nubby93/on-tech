function renderHead() {
    document.head.innerHTML += `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Blog</title>
        <!-- Add your stylesheet links and other head elements here -->
    `;
}

function renderNavigation() {
    document.body.innerHTML += `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <!-- Add more navigation items here -->
            </ul>
        </nav>
    `;
}

function renderFooter() {
    document.body.innerHTML += `
        <footer>
            <p>&copy; ${new Date().getFullYear()} My Blog. All rights reserved.</p>
            <!-- Add more footer elements here -->
        </footer>
    `;
}
