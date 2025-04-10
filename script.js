let colorTheme = "red";

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
        // Solo alterna la clase show si la pantalla es pequeña
        sidebar.classList.toggle('show');
    }
}

// Asegúrate de que la barra esté siempre visible en pantallas grandes
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    const windowWidth = window.innerWidth;

    if (windowWidth > 768) {
        // Quita la clase show y aseguramos que la barra esté visible
        sidebar.classList.remove('show');
        sidebar.classList.remove('closed');
    }
});

document.querySelector("form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const game = document.getElementById("game").value;
    const bug_description = document.getElementById("bug_description").value;

    const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, game, bug_description })
    });

    const data = await response.json();
    alert(data.message);
});


function esRojo(rgb) {
    const match = rgb.match(/\d+/g);
    if (!match || match.length < 3) return false;
    const [r, g, b] = match.map(Number);
    
    // Condición para detectar "tonos rojos"
    return r > 100 && r > g + 25 && r > b + 25;
}

