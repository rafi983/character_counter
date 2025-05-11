# Character Counter

This project is a character counter application built with React, TypeScript, and Vite. It provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and some ESLint rules. The application allows users to input text and provides various statistics about the text, including word count, character count, sentence count, reading time, and letter density.

## Features

- **Character Count**: Counts the total number of characters in the input text.
- **Word Count**: Counts the total number of words in the input text.
- **Sentence Count**: Counts the total number of sentences in the input text.
- **Reading Time**: Estimates the reading time based on the word count.
- **Letter Density**: Calculates the density of each letter in the input text and displays the percentage of each letter's occurrence.
- **Exclude Spaces**: Option to exclude spaces from the character count.
- **Set Character Limit**: Option to set a character limit for the input text.
- **PWA Support**: The application can be installed as a Progressive Web App for offline use.

## Installation

To get started with the project, clone the repository and install the dependencies:

```sh
git clone https://github.com/pritamtirpude/character-counter.git
cd character-counter
npm install
```

## Running the Application

To run the application in development mode with hot module replacement:

```sh
npm run dev
```

The application will be available at `http://localhost:3000`.

## Building the Application

To build the application for production:

```sh
npm run build
```

The built files will be available in the `dist` directory.

## PWA Support

This application is configured as a Progressive Web App (PWA). To enable PWA support, ensure that the `vite-plugin-pwa` plugin is configured correctly in your `vite.config.ts` file. The application will prompt users to install it as a PWA when they visit the site.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname
    }
  }
});
```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules
  }
});
```

## Screenshots

Here are some screenshots of the application:

![char-count-pwa-app vercel app_](https://github.com/user-attachments/assets/8b7e11ad-1f8e-43a6-b2e2-6dd366ac8ca4)

![char-count-pwa-app vercel app_ (1)](https://github.com/user-attachments/assets/edcc2728-ca7a-4bd5-a895-7dff8d27e2c5)


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [use-debounce](https://www.npmjs.com/package/use-debounce)
- [motion](https://www.framer.com/motion/)

## Contact

If you have any questions or feedback, please feel free to contact me at [pritam.tirpude9601@gmail.com](mailto:pritam.tirpude9601@gmail.com).
