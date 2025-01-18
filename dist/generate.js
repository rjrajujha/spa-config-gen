import fs from "fs/promises";
import path from "path";
import apacheConfig from "./configs/apache.js";
import nginxConfig from "./configs/nginx.js";
import caddyConfig from "./configs/caddy.js";
import traefikConfig from "./configs/traefik.js";
import haproxyConfig from "./configs/haproxy.js";
import netlifyConfig from "./configs/netlify.js";
import renderConfig from "./configs/render.js";
// Supported server configurations
export const CONFIGS = {
    apache: apacheConfig,
    nginx: nginxConfig,
    caddy: caddyConfig,
    traefik: traefikConfig,
    haproxy: haproxyConfig,
    netlify: netlifyConfig,
    render: renderConfig,
};
// Parse CLI arguments
export function parseArgs(args) {
    const options = {
        server: "apache",
        dir: "build", // Default directory
    };
    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case "-s":
            case "--server":
                if (args[i + 1] && CONFIGS[args[i + 1]]) {
                    options.server = args[i + 1];
                    i++;
                }
                else {
                    throw new Error(`Invalid or missing value for "--server". Supported servers: ${Object.keys(CONFIGS).join(", ")}.`);
                }
                break;
            case "-d":
            case "--dir":
                if (args[i + 1]) {
                    options.dir = args[i + 1];
                    i++;
                }
                else {
                    throw new Error('Missing value for "--dir".');
                }
                break;
            case "--help":
                options.help = true;
                break;
            case "-v":
            case "--version":
                options.version = true;
                break;
            default:
                throw new Error(`Unknown option "${args[i]}". Use --help to see available options.`);
        }
    }
    return options;
}
// Validate and prepare configuration
export async function validateAndPrepareConfig(options) {
    const { server, dir } = options;
    // Check if the server is supported
    if (!CONFIGS[server]) {
        throw new Error(`Unsupported server "${server}". Supported servers: ${Object.keys(CONFIGS).join(", ")}.`);
    }
    // Resolve and validate the output directory
    const outputDir = path.resolve(process.cwd(), dir);
    try {
        await fs.access(outputDir); // Check if the directory exists
    }
    catch {
        throw new Error(`Directory "${outputDir}" not found. Please provide a valid build directory.`);
    }
    return { ...CONFIGS[server], outputDir };
}
// Generate the configuration file
export async function generateConfig({ fileName, content, outputDir, }) {
    const configPath = path.join(outputDir, fileName);
    try {
        await fs.writeFile(configPath, content.trim(), "utf-8");
        console.log(`✅ ${fileName} created successfully in the "${outputDir}" directory.`);
    }
    catch (error) {
        throw new Error(`Failed to write file "${fileName}": ${error.message}`);
    }
}
