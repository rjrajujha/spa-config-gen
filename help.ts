export const displayHelp = () => {
  console.log(`
Usage: spa-config-gen [options]

Options:
-s, --server <server>      Specify the server type for which to generate the configuration (default: apache).
                           Supported servers: apache, nginx, traefik, caddy, haproxy.
-d, --dir <directory>      Specify the output directory for the configuration file (default: build).
--help                     Display this help message and exit.
-v, --version              Display the version of the tool and exit.

Examples:
spa-config-gen --server nginx --dir dist
spa-config-gen -s apache
spa-config-gen --help
spa-config-gen --version

Description:
This tool generates configuration files for popular reverse proxy servers
to ensure proper routing for single-page applications (SPAs). It supports
multiple servers like Apache, Nginx, Traefik, Caddy, and HAProxy.
`);
};
