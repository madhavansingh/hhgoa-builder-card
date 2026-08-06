# Hacker Goa House Builder Card Generator

A web application that allows builders to generate a personalized social pass for Hacker House Goa 2026. Users can upload a photo, enter their details, and export a high-resolution PNG pass ready for sharing.

The application automatically assigns themed attributes including Builder Class, Beach Bag items, a unique Builder ID, and a generated QR code overlay.

---

## Features

- Custom photo upload with real-time positioning and zoom controls
- Automatic Builder Class and Beach Bag attribute generation
- High-resolution PNG export
- Direct sharing to X (Twitter) with pre-formatted post copy
- Responsive design tailored for mobile and desktop screens

---

## Preview

Add screenshots here.

---

## Tech Stack

- React 18
- Vite
- JavaScript (ES6+)
- HTML5 & CSS3
- html-to-image
- qrcode.react

---

## Getting Started

Clone the repository and install dependencies to run the app locally:

```bash
git clone https://github.com/nryadav18/smart-id-generator.git
cd smart-id-generator
npm install
npm run dev
```

Open `http://localhost:5173` in your browser to view the application.

---

## Build

To create a production build:

```bash
npm run build
```

The output files will be generated in the `dist` directory.

---

## Folder Structure

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

## Customization

- **Card Template**: The background template artwork is stored at `public/idCardTemplate.png`.
- **Sticker Assets**: Class stickers are loaded dynamically from `public/stickers/`.
- **Random Data**: Builder Classes and Beach Bag item lists are configured in `src/utils/randomGenerator.js`.

---

## Contributing

Contributions are welcome. Feel free to open an issue or submit a pull request for fixes, improvements, or feature updates.

---

## License

MIT
