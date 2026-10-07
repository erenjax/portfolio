# Portfolio

React and TypeScript portfolio built with Vite.

## Local development

Install dependencies, including the development tools:

```sh
npm ci --include=dev
```

Start the development server:

```sh
npm run dev
```

`npm start` and `npm run start` run the same server. Open the local URL
printed in the terminal (normally http://localhost:5173).

If startup reports `vite: command not found`, rerun the dependency installation
above from this directory.

## Production build

```sh
npm run build
```

The generated site is written to `dist`. To preview it locally:

```sh
npm run preview
```

## Type checking

```sh
npm run tsc
```
