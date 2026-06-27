# 🚀 Custom Components

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=20232A)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-264DE4?logo=css3&logoColor=white)

A collection of beautiful, reusable, and highly performant UI components built from scratch using **React**, **TypeScript**, **Vite**, and **Pure CSS**. No bulky UI libraries, just clean code and raw styling.


## ✨ Features

- **Type Safe**: Fully written in TypeScript for robust autocompletion and error checking.
- **Blazing Fast**: Bundled with Vite for an ultra-fast development experience.
- **Zero Dependencies**: Styled using pure CSS to keep the package lightweight.
- **Highly Reusable**: Easily drop these components into any React project.
- **Responsive**: Built with modern CSS (Flexbox/Grid) to look great on all devices.


## 🛠️ Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite (For lightning-fast development)
- **Styling:** Pure CSS (Custom, zero-dependency stylesheets)


## 🚀 Getting Started

> Follow these steps to get a local copy of the project up and running. Make sure you have **Node.js** installed on your machine.

```bash
  # Clone the repository:
   git clone https://github.com/iamx-ariful-islam/custom-components.git

  # Navigate to the project directory:**
   cd custom-components

  # Install dependencies:**
   npm install
   # or
   yarn install
   # or
   pnpm install

  # Start the Vite development server:
  npm run dev
```

> Open [http://localhost:5173](http://localhost:5173) in your browser to see the components in action.


## 📁 Project Structure

```text
custom-components/
├── src/
│   ├── components/       # All reusable UI components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.types.ts
│   │   │   ├── Button.module.css
│   │   │   └── index.ts
│   │   ├── Card/
│   │   └── Icons/        # All reusable icons
│   │       ├── EditIcon.tsx
│   │       ├── BellIcon.tsx
│   │       ├── UserIcon.tsx
│   │       ├── types.ts
│   │       └── index.ts
│   ├── App.tsx           # Showcase / Demo page
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles & variables
├── package.json
└── vite.config.ts
```


## 💻 Usage Example

Here is how you can use a component in your application:

```tsx
import React from 'react';
import { Button } from './components/Button';

const App = () => {
  return (
    <div className="app">
      <Button animated variant="primary" tooltip="Goto the next step">
        <ButtonContent visible>Next Step</ButtonContent>
        <ButtonContent hidden><ArrowRightIcon size={20} /></ButtonContent>
      </Button>
    </div>
  );
};

export default App;
```


## 📸 Interface Preview

Here are some screenshots of this project:

**Components**<br/> 
<img src="screenshots/components.png" alt="Components" width="100%" /><br/> 

**Icons**<br/> 
<img src="screenshots/icons.png" alt="Icons" width="100%" /><br/>


## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👤 Author

**Made with ❤️ by Ariful Islam (iamx-ariful-islam)**

- GitHub: [@iamx-ariful-islam](https://github.com/iamx-ariful-islam)
- LinkedIn: [@iamx-ariful-islam](https://linkedin.com/in/iamx-ariful-islam)
- Twitter: [@iamx_ariful_islam](https://twitter.com/mx_ariful_islam)
