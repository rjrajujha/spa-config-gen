const traefikConfig = {
    fileName: "traefik.yaml",
    content: `
http:
  routers:
    spa-router:
      rule: "PathPrefix(\`/\`)"
      service: spa-service

  services:
    spa-service:
      loadBalancer:
        servers:
          - url: "http://localhost:3000"
`,
};
export default traefikConfig;
