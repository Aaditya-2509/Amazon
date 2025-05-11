const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
  const query = document.querySelector('.search-bar input').value;
  alert(`You searched for: ${query}`);
});
