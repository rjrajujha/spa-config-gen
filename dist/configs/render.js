const renderConfig = {
    fileName: "static.json",
    content: JSON.stringify({
        static: {
            error_page: "/index.html",
        },
    }, null, 2 // Indentation for pretty JSON
    ),
};
export default renderConfig;
