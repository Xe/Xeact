# Xeact

![enbyware](https://pride-badges.pony.workers.dev/static/v1?label=enbyware&labelColor=%23555&stripeWidth=8&stripeColors=FCF434%2CFFFFFF%2C9C59D1%2C2C2C2C)
![NPM downloads](https://img.shields.io/npm/dw/@xeserv/xeact)
![NPM version](https://img.shields.io/npm/v/@xeserv/xeact)
![dependent repos](https://img.shields.io/librariesio/dependent-repos/npm/@xeserv/xeact)
![license](https://img.shields.io/github/license/Xe/xeact)
![language count](https://img.shields.io/github/languages/count/Xe/xeact)
![repo size](https://img.shields.io/github/repo-size/Xe/xeact)

Xeact is a high performance, developer-efficient and overall ballin'
femtoframework for productive development in Javascript. It will take everything
that is complicated about frontend web development and throw it in the trash.

```javascript
import { g, h, x } from "./xeact.js";

(async () => {
    const resp = await fetch("https://httpbin.org/headers");
    const data = await resp.json();

    // Get element with ID "userAgent" and set its innerText
    g("userAgent").innerText = data.headers["User-Agent"];
    
    // Remove all children from element with ID "headerList"
    let l = g("headerList");
    x(l);
    
    // Create a <li> element for every key in `data.headers`,
    // set the `innerText` property to the contents of each header,
    // and append them all to the header list
    l.append(...Object.entries(data.headers)
        .map(e => h("li", {innerText: `${e[0]}: ${e[1]}`})));
})();
```

The cloud's the limit!
