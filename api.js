const express = require('express');
const path = require('path');
const app = express();

// Serve index.html as the default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve doc.html without explicitly showing the file extension in the URL
app.get('/doc', (req, res) => {
    res.sendFile(path.join(__dirname, 'doc.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
