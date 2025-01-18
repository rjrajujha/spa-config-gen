const haproxyConfig = {
    fileName: "haproxy.cfg",
    content: `
frontend http_front
    bind *:80
    use_backend spa_backend if { path_beg / }

backend spa_backend
    server spa_server localhost:3000
`,
};
export default haproxyConfig;
