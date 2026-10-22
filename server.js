import express from "express"
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("servidor rodando!")
});

app.get("/status", (req, res) => {
    res.json({ status: "online", sprint: 1 });
});

app.get("/sobre", (req, res) => {
    res.send("messageiro local - criado no senai");
});


app.listen(PORT, () => {
    console.log(`servidor em http://localhost:${PORT}`);
})
