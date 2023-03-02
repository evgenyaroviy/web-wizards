const currentUrl = window.location.href;
const links = document.querySelectorAll('.header-menu-link, .header-menu-link-revers');

links.forEach(link => {
  if (link.href === currentUrl) {
    if (link.classList.contains('header-menu-link')) {
      link.classList.add('current');
    } else if (link.classList.contains('header-menu-link-revers')) {
      link.classList.add('current-revers');
    }
  } else {
    link.classList.remove('current', 'current-revers');
  }
});