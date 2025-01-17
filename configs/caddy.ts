const caddyConfig = {
    fileName: "Caddyfile",
    content: `
:80 {
    root * /
    file_server
    try_files {path} /index.html
}
`,
};

export default caddyConfig;
