# **1️⃣ What is XMLHttpRequest (XHR)?**

* XHR is a **JavaScript API** that allows your webpage to communicate with a server **without reloading the page**.
* Core to **AJAX**, it enables **asynchronous data fetching** — making your app faster and more interactive.
* You can use XHR to:

  * Fetch data from APIs or your own server.
  * Send data to the server (like form submissions).
  * Handle responses in different formats (JSON, XML, etc.).
  * Dynamically update parts of your webpage.
  * Handle errors, timeouts, and security concerns (like CORS).

---

### **2️⃣ How XHR Works (Step by Step)**

1. **Create an XHR Object**

   ```javascript
   const xhr = new XMLHttpRequest();
   ```

2. **Configure the Request**

   ```javascript
   xhr.open("GET", "https://example.com/users", true);
   ```

   * `"GET"` → HTTP method
   * `"URL"` → server endpoint
   * `true` → asynchronous request

3. **Handle the Response**

   ```javascript
   xhr.onload = function() {
       if(xhr.status >= 200 && xhr.status < 400) {
           const users = JSON.parse(xhr.responseText);
           displayUsers(users);
       } else {
           console.error("Server returned an error");
       }
   };
   xhr.onerror = function() {
       console.error("Request failed");
   };
   ```

4. **Send the Request**

   ```javascript
   xhr.send();
   ```

5. **Update the Web Page Dynamically**

   ```javascript
   function displayUsers(users) {
       const userListDiv = document.getElementById("userList");
       const ul = document.createElement("ul");
       users.forEach(user => {
           const li = document.createElement("li");
           li.textContent = user.name;
           ul.appendChild(li);
       });
       userListDiv.innerHTML = "";
       userListDiv.appendChild(ul);
   }
   ```

---

### **3️⃣ Key Points**

* XHR allows **asynchronous requests** → the page doesn’t freeze while waiting for the server.
* Usually, data is sent/received in **JSON** format because it’s easy to work with in JavaScript.
* **Error handling** is crucial (onerror, status checks).
* **Dynamic updates** make your app more responsive and user-friendly.

---

💡 **Tip:** For modern projects, many developers now prefer the **Fetch API** over XHR because it’s cleaner and Promise-based, but XHR is still widely used and important to understand.

