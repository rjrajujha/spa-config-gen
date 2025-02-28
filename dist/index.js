#!/usr/bin/env node
import { parseArgs, validateAndPrepareConfig, generateConfig } from "./generate.js";
import { displayHelp } from "./help.js";
import fs from "fs/promises";
import path from "path";
// Get version dynamically from package.json
async function getVersion() {
    try {
        const packageJsonPath = path.resolve(process.cwd(), "package.json");
        const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf-8"));
        return packageJson.version || "v1.0.0";
    }
    catch {
        return "unknown";
    }
}
async function handleHelp() {
    displayHelp();
    process.exit(0);
}
async function handleVersion() {
    const version = await getVersion();
    console.log(`spa-config-gen version: ${version}`);
    process.exit(0);
}
async function main() {
    try {
        const args = process.argv.slice(2);
        const options = parseArgs(args);
        // Handle help or version requests
        if (options.help)
            await handleHelp();
        if (options.version)
            await handleVersion();
        // Validate options and generate configuration
        const config = await validateAndPrepareConfig(options);
        await generateConfig(config);
        console.log("Configuration file generated successfully.");
        process.exit(0); // Success
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Failure
    }
}
main();
