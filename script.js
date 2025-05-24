// External links open in new tab
const currentOrigin = window.location.origin;

const links = document.querySelectorAll('a[href]');

links.forEach(link => {
  const href = link.getAttribute('href');

  if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;

  let url;
  try {
    url = new URL(href, currentOrigin);
  } catch (e) {
    return;
  }

  if (url.origin !== currentOrigin) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});
