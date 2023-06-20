## Redr.me | Open Source URL Redirection Service focused on Anonymity
An Open Source and simple to Use Self Hosted Redirection Service made in Django focused on Anonymity.

To use you can visit: https://redr.me/

## Features
- No Tracking and Instant Redirection
- Open Source
- Easy to Self Host and Customise
- Open API for redr.me Official Instance


## Components

- [API Core](https://github.com/letstream/redr.me)
- Frontend [This Project]

## Requirements
The frontend is built over Vue3 + Vite and Node 16+.
This project also uses Alpha Release version of [Bootstrap Vue Next](https://github.com/bootstrap-vue-next/bootstrap-vue-next) to support the development and usage of Bootstrap 5 with Vue 3.

### Variables
API Base can be configured by passing the `VITE_API_BASE` environment variable using any of the methods described in [official documentation](https://vitejs.dev/guide/env-and-mode.html).

The default value used if the variable is not provided: `https://api.redr.me`

### Running the Local Environment

```bash
# Install Dependencies
npm install

# Run the server
npm run dev
```

### Deploying (Manual)

```bash
# Build the source
npm run build
```

Copy the generated `dist` directory and deploy to your server.

### Deploying (AWS Amplify) (Recommended)

It's easy to deploy the code with AWS Amplify! For more information on how to deploy vue/vite apps in Amplify, follow the guide here (TBD)

### Contributors
<a href="https://github.com/letstream/redr.me-frontend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=letstream/redr.me-frontend" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
