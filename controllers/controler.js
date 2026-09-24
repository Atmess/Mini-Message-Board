const db = require("../db/query")

async function getMessage(req,res) {
    const messages= await db.getMessage()
    res.send('index', { title: "Mini Messageboard", messages:messages})
}

async function CreateMessageGet(req,res) {
    res.render("form")
}

async function CreateMessagePost(req,res) {
    const {username,text}= req.body;
    await db.InsertMesssage(username,text);
    res.redirect("/");
}

module.exports={getMessage,CreateMessageGet,CreateMessagePost}