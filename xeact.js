/** @type{function(string, Object, Array.<HTMLElement>)} */
const h = (name, data = {}, children = []) => {
    let result = Object.assign(document.createElement(name), data);
    result.append(...children);
    return result;
};

/** @type{function(HTMLElement)} */
const x = (elem) => {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
};

/** @type{function(string): HTMLElement} */
const g = (name) => document.getElementById(name);

/** @type{function(string): HTMLElement} */
const c = (name) => document.getElementsByClassName(name);

/** @type{function(string): Array.<HTMLElement>} */
const s = (selector) => Array.from(document.querySelectorAll(selector));

/** @type{function(string, Object): string} */
const u = (url = "", params = {}) => {
    let result = new URL(url, window.location.href);
    Object.entries(params).forEach((kv) => {
        let [k, v] = kv;
        result.searchParams.set(k, v);
    });
    return result.toString();
};

/** @type{function(function())} */
const r = (callback) => window.addEventListener('DOMContentLoaded', callback);

export { h, x, g, c, u, s, r };
