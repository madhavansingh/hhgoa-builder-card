# Hacker Goa House Builder Card Generator

🌴 Create your personalized Hacker Goa House Builder Card in seconds.

---

Upload your photo, enter your name and stack, and generate a custom social card for Hacker House Goa 2026. Packed with beach vibes, random builder stats, and high-res PNG export.

---

## Features

📸 **Upload & Position Photo**  
Add your photo with instant circular crop preview, drag positioning, and zoom controls.

🌊 **Random Builder Class**  
Every card gets a unique class and matching sticker—from *Cache Raider* to *Terminal Surfer*.

🏖 **Beach Bag Essentials**  
Packed with three random items for your Goa journey, from *Coffee & VS Code* to *Feni & Rust*.

🪪 **Builder ID & QR Code**  
Automatic unique Builder ID stamping and QR code generation on every pass.

🚀 **Share to X**  
One-click export that downloads your pass and opens a pre-formatted X post ready to publish.

📱 **Responsive Design**  
Smooth two-step experience designed to look great on desktop, tablet, and mobile screens.

---

## Preview

Placeholders for screenshots:

- **Landing Page** (Step 1 form)
- **Generated Builder Card** (Step 2 view)
- **Mobile View**

---

## Tech Stack

| Technology | Role |
| :--- | :--- |
| **React 18** | UI component framework |
| **Vite** | Fast frontend build tool |
| **JavaScript** | Core application logic |
| **CSS3** | Custom responsive styling |
| **html-to-image** | High-resolution PNG export |
| **qrcode.react** | QR code generation |

---

## Project Structure

```text
public/
  ├── idCardTemplate.png
  ├── stickers/
  └── favicon.png
src/
  ├── components/
  ├── styles/
  └── utils/
```

---

## Local Setup

Run the project locally in three quick steps:

```bash
git clone https://github.com/nryadav18/smart-id-generator.git
cd smart-id-generator
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Customization

- **Card Template**: Background graphic artwork is at `public/idCardTemplate.png`.
- **Stickers**: Class stickers are loaded from `public/stickers/`.
- **Builder Data**: Class names and Beach Bag items can be customized in `src/utils/randomGenerator.js`.

---

## Contributing

Found a bug or have a fun idea to make this even better?  
Open an issue or submit a pull request. Let's build together!

---

See you on the beach in Goa! 🌴🌊
