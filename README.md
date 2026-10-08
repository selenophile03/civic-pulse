# 🗳️ CivicPulse: The Super-Simplified Bill Visualizer

An open-source, lightweight civic tech dashboard that transforms dense, thousands-of-pages-long legislative data and confusing legal jargon into clear, digestible visual graphics and raw voting scorecards. 

Built completely with **Vanilla JavaScript**, **Tailwind CSS**, and **Chart.js**, CivicPulse operates with zero heavy backend frameworks or complex server architectures—making it ideal for instant serverless deployments.

---



## 📂 Repository Architecture

```text
civic-pulse/
├── data/
│   └── votes.json    # The core database file holding bill and voting records
├── index.html        # Responsive frontend viewport layout using Tailwind CSS CDN
├── app.js            # Engine logic controlling data parsers, state filters, and charts
└── README.md         # Technical project documentation
```

---

## 🚀 Getting Started Locally

Because the engine utilizes the standard browser `fetch()` API to pull local data assets, standard browser security policies (CORS) block direct file access paths (`file://`). To preview it locally, spin up a simple static development server:

### Option A: Using Python (Simplest)
Navigate into the root project directory via your terminal and execute:
```bash
# For Python 3.x
python -m http.server 8000
```
Open your web browser and navigate to: `http://localhost:8000`

### Option B: Using VS Code Extensions
1. Open the project folder inside **VS Code**.
2. Install the **Live Server** extension from the marketplace.
3. Right-click `index.html` and choose **"Open with Live Server"**.


---
