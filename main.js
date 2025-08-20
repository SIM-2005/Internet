let subscribe = document.querySelector(".subscribe");

function subs() {
  if (subscribe.innerHTML === 'Subscribe') { subscribe.innerHTML = 'Subscribed';
    subscribe.classList.add('subscribe-clicked');}
  else {
    subscribe.innerHTML = 'Subscribe';
    subscribe.classList.remove('subscribe-clicked');
  }
}


let follow = document.querySelector(".follow");

function follow() {
  if (follow.innerHTML === 'Follow') { 
    follow.innerHTML = 'Following';
    follow.classList.add('follow-clicked');}
  else {
    follow.innerHTML = 'Follow';
    follow.classList.remove('follow-clicked');
  }
}
