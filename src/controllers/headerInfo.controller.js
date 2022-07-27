import headerInfo from '../views/header.html';
const container = document.getElementById('app');

export default () => {
    const div = document.createElement('div');
    div.innerHTML = headerInfo;
    div.setAttribute('id', 'header');
    div.setAttribute('class', 'container');
    container.appendChild(div);

    return div;
}