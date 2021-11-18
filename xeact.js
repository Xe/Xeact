const h = (name, data = {}, children = []) => {
    let result = Object.assign(document.createElement(name), data);
    result.append(...children);
    return result;
};

const x = (elem) => {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
};

const g = (name) => document.getElementById(name);

const c = (name) => document.getElementsByClassName(name);

const u = (url = window.location.href, data = {}) => Object.assign(new URL(url), data);

const q = (data = {}) => new URLSearchParams(data);
