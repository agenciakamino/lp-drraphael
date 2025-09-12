document.addEventListener('DOMContentLoaded', () => {
  const inner = document.querySelector('.marquee__inner');
  if (!inner) return;
  inner.innerHTML += inner.innerHTML; // duplica para loop
});
