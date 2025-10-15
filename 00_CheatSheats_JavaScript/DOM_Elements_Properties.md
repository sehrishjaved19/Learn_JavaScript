# Common DOM Element Properties
| Property                                    | What it Does                                               | Example                                   |
| ------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------- |
| **`.innerHTML`**                            | Gets/sets HTML content inside the element                  | `div.innerHTML = "<p>Hi</p>"`             |
| **`.outerHTML`**                            | Gets/sets the element **including itself**                 | `div.outerHTML = "<section>Hi</section>"` |
| **`.innerText`**                            | Gets/sets **rendered text** (ignores hidden text with CSS) | `div.innerText = "Hello"`                 |
| **`.style`**                                | Access inline styles                                       | `div.style.color = "red"`                 |
| **`.className`**                            | Get/set element’s class                                    | `div.className = "active"`                |
| **`.id`**                                   | Get/set element’s id                                       | `div.id = "main"`                         |
| **`.value`**                                | For form inputs: get/set value                             | `input.value = "Hello"`                   |
| **`.attributes`**                           | Access all attributes as a NamedNodeMap                    | `console.log(div.attributes)`             |
| **`.parentNode`**                           | Access parent element                                      | `div.parentNode`                          |
| **`.childNodes`**                           | Access all child nodes (including text and comments)       | `div.childNodes`                          |
| **`.children`**                             | Access only child **elements**                             | `div.children`                            |
| **`.firstChild` / .lastChild**              | Get first/last child node (can be text or element)         | `div.firstChild`                          |
| **`.firstElementChild` / lastElementChild** | Get first/last child **element only**                      | `div.firstElementChild`                   |
