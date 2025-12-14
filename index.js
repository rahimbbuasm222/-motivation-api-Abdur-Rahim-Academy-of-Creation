const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// কিছু মোটিভেশনাল উক্তির কালেকশন (ডাটাবেসের বদলে আমরা আপাতত এখানেই রাখছি)
const quotes = [
    { id: 1, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { id: 2, text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { id: 3, text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { id: 4, text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { id: 5, text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" }
];

// হোম রাউট
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Motivation API! 🚀</h1><p>Go to <a href="/quote">/quote</a> to see magic.</p>');
});

// র্যান্ডম উক্তি দেখানোর রাউট
app.get('/quote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
});

// সার্ভার রান করা (Render এর পোর্টের জন্য process.env.PORT রাখা জরুরি)
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});