# 🩺 Health Articles — JSON, HTML & JavaScript Demo

This small web project displays a list of **health and wellness articles** by fetching data from a local JSON file using **AJAX (XMLHttpRequest)**.
It demonstrates how to **load JSON dynamically** and render structured content like titles, descriptions, bullet lists, and sections inside an HTML page.

---

## 📁 Project Structure

```
health_articles/
│
├── index.html       # Main webpage — displays the health articles
├── script.js        # JavaScript logic to load and render JSON data
├── data.json        # Local JSON file containing article data
└── style.css        # (Optional) Additional styling file if separated
```

---

## 💡 Features

* Fetches JSON data dynamically using **XMLHttpRequest**
* Displays article details including:

  * Title
  * Description
  * “Ways to Achieve” list
  * “Benefits” list
* Clean and minimal design with simple card-like layout
* Example of connecting frontend (HTML) and data layer (JSON)

---

## 🧩 How It Works

1. When the page loads,
   the script sends a **GET request** to `data.json`.

2. Once the response is received successfully,
   the JavaScript code parses the JSON and dynamically creates DOM elements.

3. Each article appears inside a styled container with headings, lists, and text content.

---

## 🖥️ Setup Instructions

1. **Download or clone** the project folder.
2. Make sure the files `index.html`, `data.json`, and `script.js` are in the same directory.
3. Open `index.html` in your browser — the articles will load automatically.

⚠️ If you’re using **VS Code**, use the **Live Server extension** to run it locally.
This ensures that the browser can access the local `data.json` file properly.

---

## 🧠 Key Learning Concepts

* Loading local JSON data using JavaScript
* Parsing and dynamically rendering data in HTML
* Creating and appending DOM elements
* Structuring information-rich data in JSON

---

## 📜 Example Output

Each article section displays like this:

```
The Importance of Regular Exercise
This article discusses the numerous benefits of regular exercise…

Ways to Achieve:
• Engage in at least 150 minutes of moderate activity per week
• Incorporate strength training
• Find enjoyable physical activities

Benefits:
• Enhanced cardiovascular fitness
• Stronger muscles
• Better mood and longer lifespan
```
