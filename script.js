const input = document.getElementById('input');
const div = document.getElementById('div');

input.addEventListener('focus', () => {
  div.style.display = 'inline-block';
});
input.addEventListener('blur', () => {
  div.style.display = 'none';
});
