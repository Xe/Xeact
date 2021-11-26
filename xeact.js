/** @type{function(string, Object=, Array.<Node|string>=)} */
const h = (name, data = {}, children = []) => {
    let result = Object.assign(document.createElement(name), data);
    result.append(...children);
    return result;
};

/** @type{function(string): Text} */
const t = (text) => document.createTextNode(text);

/** @type{function(Node)} */
const x = (elem) => {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
};

/** @type{function(string): HTMLElement} */
const g = (name) => document.getElementById(name);

/** @type{function(string): HTMLCollectionOf.<Element>} */
const c = (name) => document.getElementsByClassName(name);

/** @type{function(string): HTMLCollectionOf.<Element>} */
const n = (name) => document.getElementsByName(name);

/** @type{function(string): Array.<HTMLElement>} */
const s = (selector) => Array.from(document.querySelectorAll(selector));

/** @type{function(string=, Object=): string} */
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

export { h, t, x, g, c, n, u, s, r };
