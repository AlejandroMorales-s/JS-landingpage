import headerNavbar from '../views/headerNavbar.html';

const container = document.getElementById('app');

export default () => {
    const div = document.createElement('div');
    div.innerHTML = headerNavbar;
    div.setAttribute('id', 'header-navbar-bg');
    container.appendChild(div);

    return div;
}