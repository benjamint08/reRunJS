/**
 * reRunJS
 * 2022 @benjamint08
 * https://github.com/benjamint08/rerunjs
 */

/**
 * 
 * @param {Element} a 
 */
 function rerun(a) {
    if(a.tagName !== "SCRIPT") {
        return console.error("Element given is not a script");
    }
    const b = document.createElement('script');
    if(a.id !== null && a.id !== undefined) {
        b.id = a.id;
    }
    b.innerText = a.innerText;
    const c = a.parentElement;
    c.removeChild(a);
    c.appendChild(b);
    return console.log('Script re-ran');
 }
