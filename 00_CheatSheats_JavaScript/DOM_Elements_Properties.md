# 🧩 DOM HTML-Related Node Types

| **NODE TYPE (TEXT)** | **INTEGER VALUE** | **NODE NAME**        | **NODE VALUE**  | **DESCRIPTION**                       |
| -------------------- | ----------------- | -------------------- | --------------- | ------------------------------------- |
| **Element**          | 1                 | Tag name             | `null`          | Any HTML tag                          |
| **Attribute**        | 2                 | Attribute name       | Attribute value | A name-value pair                     |
| **Text**             | 3                 | `#text`              | Text content    | Text that is contained by the element |
| **Comment**          | 8                 | `#comment`           | Text comment    | HTML comment                          |
| **Document**         | 9                 | `#document`          | `null`          | Document object                       |
| **Document Type**    | 10                | `DOCTYPE`            | `null`          | DTD specification                     |
| **Fragment**         | 11                | `#document fragment` | `null`          | Nodes outside the document            |

---

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
