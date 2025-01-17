const nginxConfig = {
    fileName: "nginx.conf",
    content: `
server {
    listen 80;
    server_name _;

    root /;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    error_page 404 /index.html;
}
`,
};

export default nginxConfig;
