document.querySelectorAll('.subscribe').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.innerHTML === 'Subscribe') { button.innerHTML = 'Subscribed';
    button.classList.add('subscribe-clicked');}
  else {
    button.innerHTML = 'Subscribe';
    button.classList.remove('subscribe-clicked');
  }
  });
});


document.querySelectorAll('.follow').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.innerHTML === 'Follow') { button.innerHTML = 'Following';
    button.classList.add('follow-clicked');}
  else {
    button.innerHTML = 'Follow';
    button.classList.remove('follow-clicked');
  }
  });
});
