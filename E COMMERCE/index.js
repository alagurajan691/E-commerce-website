function shownavbar() {
    document.querySelector('.side-navbar').style.display = 'block';
}

function closenavbar() {
    document.querySelector('.side-navbar').style.display = 'none';
}

// Optional: Hide sidebar by default on page load
window.onload = function() {
    document.querySelector('.side-navbar').style.display = 'none';
}