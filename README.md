# Xeact

Xeact is a high performance, developer-efficient and overall ballin'
femtoframework for productive development in Javascript. It will take everything
that is complicated about frontend web development and throw it in the trash.

```javascript
(async () => {
    const resp = await fetch("https://httpbin.org/headers");
    const data = await resp.json();
    g("userAgent").innerText = data.headers["User-Agent"];
    
    let l = g("headerList");
    x(l);
    
    l.append(...Object.entries(data.headers)
        .map(e => h("li", {innerText: `${e[0]}: ${e[1]}`})));
})();
```

The cloud's the limit!
