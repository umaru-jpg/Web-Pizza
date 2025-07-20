const isLoggedIn = localStorage.getItem('isLoggedIn');
const adminName = localStorage.getItem('adminName');
const loginContainer = document.getElementById('loginContainer');

if (isLoggedIn && adminName && loginContainer) {
  loginContainer.innerHTML = `<a href="profile.html" class="me-2 fw-bold text-danger text-decoration-none">Hello, ${adminName}</a>`;
}
