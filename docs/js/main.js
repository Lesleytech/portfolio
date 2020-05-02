function handleNavigation(event) {
    event.preventDefault();
    const {
        name
    } = event.target;
    const element = document.getElementById(name.slice(0, -5));
    element.scrollIntoView({
        behavior: "smooth"
    });
}