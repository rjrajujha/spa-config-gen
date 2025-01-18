const netlifyConfig = {
    fileName: "netlify.toml",
    content: `
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

`,
};

export default netlifyConfig;
