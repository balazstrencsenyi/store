function createHeader () {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header-container');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');

  const title = document.createElement('h1');
  title.classList.add('title');

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuLinks = document.createElement('ul');
  menuLinks.classList.add('menu-links');

  const home = document.createElement('li');
  home.classList.add('home');
  home.textContent = 'Home';

  const about = document.createElement('li');
  about.classList.add('about');
  about.textContent = 'About';

  const contact = document.createElement('li');
  contact.classList.add('contact');
  contact.textContent = 'Contact';

  menuLinks.append(home, about, contact);
  menu.appendChild(menuLinks);
  titleContainer.appendChild(title);

  headerContainer.append(titleContainer, menu);

  return headerContainer;


}

export default createHeader;