# Xeact

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
