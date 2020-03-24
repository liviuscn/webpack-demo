
import _ from 'lodash';
import './style.css';
import a from "./a";
import b from "./b";
a()
b()
function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script// Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());