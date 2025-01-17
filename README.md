
# spa-config-gen

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)  
Generate configuration files for deploying Single Page Applications (SPAs) with proper routing support for popular reverse proxies like Apache and Nginx.

## Features

- Generates `.htaccess` for Apache.
- Generates `nginx.conf` for Nginx.
- Supports additional configurations for reverse proxies such as Caddy, Traefik, and HAProxy.
- Customizable output directory and server type.
- Simple CLI interface for quick usage.

## Installation

You can install the package globally using npm:

```bash
npm install -g spa-config-gen
```

Or add it to your project as a development dependency:

```bash
npm install --save-dev spa-config-gen
```

## Usage

### CLI Usage

Run the following command in your terminal:

```bash
spa-config-gen [options]
```

### Options

| Option             | Alias | Description                                                      | Default      |
|--------------------|-------|------------------------------------------------------------------|--------------|
| `--server`         | `-s`  | Specify the server type (`apache`, `nginx`, `caddy`, `traefik`, `haproxy`). | `apache`     |
| `--dir <directory>`| `-d`  | Specify the output directory for the configuration file.         | `build`      |
| `--help`           |       | Display help information.                                        | N/A          |
| `--version`        | `-v`  | Display the current version of the package.                     | N/A          |

### Examples

#### Generate `.htaccess` for Apache
```bash
spa-config-gen --server apache --dir dist
```

#### Generate `nginx.conf` for Nginx
```bash
spa-config-gen -s nginx -d build
```

#### Show Help
```bash
spa-config-gen --help
```

#### Show Version
```bash
spa-config-gen -v
```

## How It Works

1. The tool reads your specified options from the CLI.
2. It validates the provided output directory.
3. Based on the selected server type, it generates the appropriate configuration file (`.htaccess`, `nginx.conf`, etc.) in the specified directory.

## Supported Reverse Proxies

- **Apache**: Generates `.htaccess` for SPAs with fallback to `index.html`.
- **Nginx**: Generates `nginx.conf` with `try_files` for SPA routing.
- **Caddy**: Generates `Caddyfile` for SPAs.
- **Traefik**: Generates configuration for SPAs in `traefik.yml`.
- **HAProxy**: Generates `haproxy.cfg` for SPAs.

## File Structure

```plaintext
spa-config-gen/
├── src/
│   ├── configs/
│   │   ├── apache.js
│   │   ├── nginx.js
│   │   ├── caddy.js
│   │   ├── traefik.js
│   │   └── haproxy.js
│   ├── generate.ts
│   ├── help.ts
│   └── index.ts
├── dist/
│   └── (Compiled JavaScript files)
├── package.json
├── tsconfig.json
├── README.md
└── LICENSE
```

## Development

### Build the Project
Compile the TypeScript source code to JavaScript:

```bash
npm run build
```

### Test the CLI
Run the generated script:

```bash
node dist/index.js --help
```

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request. For major changes, please open an issue first to discuss your idea.

## License

This project is licensed under the [MIT License](LICENSE).

## Questions or Feedback?

Feel free to open an issue on [GitHub](https://github.com/rjrajujha/spa-config-gen/issues) if you have any questions or feedback.

---
