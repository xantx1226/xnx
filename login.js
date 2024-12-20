// JavaScript Document
document.getElementById('registerBtn').onclick = function() {
  document.getElementById('registerModal').style.display = 'block';
};
document.getElementById('loginBtn').onclick = function() {
  document.getElementById('loginModal').style.display = 'block';
};
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
};