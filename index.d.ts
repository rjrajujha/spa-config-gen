declare module "spa-config-gen" {
  /**
   * Configuration for a server.
   */
  export interface ServerConfig {
      fileName: string;
      content: string;
  }

  /**
   * Supported server types.
   */
  export type SupportedServers = "apache" | "nginx" | "caddy" | "traefik" | "haproxy";

  /**
   * CLI Options passed to the tool.
   */
  export interface Options {
      server: SupportedServers;
      dir: string;
      help?: boolean;
      version?: boolean;
  }

  /**
   * Parses CLI arguments and returns options.
   * @param args Command-line arguments (typically `process.argv.slice(2)`).
   * @returns Parsed options object.
   */
  export function parseArgs(args: string[]): Options;

  /**
   * Validates the options and prepares the configuration object.
   * @param options CLI options object.
   * @returns The server configuration and the output directory path.
   */
  export function validateAndPrepareConfig(
      options: Options
  ): Promise<ServerConfig & { outputDir: string }>;

  /**
   * Generates the configuration file.
   * @param config Configuration object with file name, content, and output directory.
   * @returns A promise that resolves once the file is written successfully.
   */
  export function generateConfig(config: {
      fileName: string;
      content: string;
      outputDir: string;
  }): Promise<void>;

  /**
   * Displays the help message in the console.
   */
  export function displayHelp(): void;

  /**
   * Retrieves the version of the package from the package.json file.
   * @returns The version string.
   */
  export function getVersion(): Promise<string>;
}
