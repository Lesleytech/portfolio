function handleNavigation(event) {
  event.preventDefault();

  const { id } = event.target;

  const element = document.getElementById(id.split('-').slice(0, -1).join('-'));

  element.scrollIntoView({
    behavior: 'smooth',
  });
}
