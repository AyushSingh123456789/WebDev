# 🔥 Calorie Counter

A simple, single-page web app that calculates your recommended daily calorie intake for **bulking** or **cutting**, based on the Mifflin-St Jeor equation and your activity level.

## ✨ Features

- **Weight, Height & Age** inputs (kg / cm / years)
- **Gender selection** (Male / Female) — adjusts the BMR formula constant
- **5 activity levels** to choose from:
  - Sedentary (little or no exercise) → × 1.2
  - Lightly Active (1–3 days/week) → × 1.375
  - Moderately Active (3–5 days/week) → × 1.55
  - Very Active (6–7 days/week) → × 1.725
  - Super Active (very hard training/job) → × 1.9
- **Goal selection**:
  - **BULK** → maintenance + 250 to +500 Calories/day (lean surplus)
  - **CUT** → maintenance − 300 to − 500 Calories/day (deficit)
- Result displayed as a calorie range per day

## 🧮 How It Works

1. **Basal Metabolic Rate (BMR)** is calculated using the Mifflin-St Jeor equation:

   ```
   Male:   BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age(years) + 5
   Female: BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age(years) − 161
   ```

2. **Maintenance calories** are estimated by multiplying BMR with the activity factor for the selected lifestyle.

3. A **calorie range** is then derived based on the chosen goal (bulk or cut).

## 📂 Project Structure

```
Calorie_Counter/
├── index.html   — Page structure & form controls
├── index.css    — Styling and layout
├── index.js     — BMR calculation & interaction logic
└── README.md
```

## 🚀 Getting Started

No build step or dependencies required.

```bash
# Clone the repository
git clone <repository-url>

# Open in your browser
open index.html
```

Or simply run a local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 🛠️ Tech Stack

- HTML5
- CSS3 (Flexbox layout)
- Vanilla JavaScript (no frameworks)

## 📌 Usage

1. Enter your **weight**, **height**, and **age**.
2. Select your **gender**.
3. Pick the **activity level** that matches your routine.
4. Choose your goal: **BULK** or **CUT**.
5. The recommended calorie range per day appears at the bottom.

> ⚠️ This tool provides estimates for informational purposes only and is not a substitute for professional dietary or medical advice.
