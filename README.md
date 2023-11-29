# Next.js Tailwind Saas Template

## Introduction
Welcome to the Next.js Tailwind Saas Template! This project is designed to be easy to set up, customize, and deploy. Follow these instructions to get started.

## Getting Started

### Cloning and Installing
1. **Clone the Repository**
   ```BASH
   git clone https://github.com/Camjo0001/saas-template
   cd saas-template
   ```

2. **Install Dependencies**
   ```BASH
   npm install
   ```

### Customizing Layout
To add or remove component imports:

1. Navigate to the `index` file in the root directory.
2. Add or remove component imports as needed:
   ```JAVASCRIPT
   import YourComponent from './components/YourComponent';
   ```
3. Use these components in your layout.

### Customizing DaisyUI Theme
DaisyUI themes can be customized in the `tailwind.config.ts` file:

1. Open `tailwind.config.ts`.
2. Locate the `daisyui` section and modify the theme as needed:
   ```JAVASCRIPT
   daisyui: {
     themes: ["light", "dark", "cupcake", ...],
   },
   ```
3. Save changes and the theme will update accordingly.

### Deploying via Vercel
To deploy your project with Vercel:

1. Push your code to GitHub.
2. Sign up or log in to [Vercel](https://vercel.com).
3. Choose "New Project" and select your GitHub repository.
4. Follow the setup instructions and deploy your site.

## Support
For support, please open an issue in this repository.

---

Good luck with your project! For any further customization or issues, feel free to raise an issue or submit a pull request.