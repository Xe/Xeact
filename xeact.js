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

const u = (url = "", data = {}) => Object.assign(new URL(url, window.location.href), data);

const s = (selector) => Array.from(document.querySelectorAll(selector));

const q = (data = {}) => new URLSearchParams(data);

const r = (callback) => window.addEventListener('DOMContentLoaded', callback);
