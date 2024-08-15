const dotCount = 10;
const animationTime = 2.5;
const loadingDots = document.getElementById('loading-dots');

for (let i = 1; i <= dotCount; i++) {
  const li = document.createElement('li');
  li.style.transform = `rotate(${(i - 1) * (360 / dotCount)}deg)`;
  li.style.animationDelay = `${animationTime * i / dotCount / 2}s`;
  const span = document.createElement('span');
  span.style.animationDelay = `${animationTime * i / dotCount / 2}s`;
  li.appendChild(span);
  loadingDots.appendChild(li);
}