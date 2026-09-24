
const Pool = require("./pool")

async function getMessage() {
    const {rows}= await Pool.query("SELECT * FROM messages");
    return rows;
}

async function InsertMesssage(username, text) {
       await Pool.query("INSERT INTO messages VALUES($1,$2) ",[username,text])
}

module.exports={getMessage,InsertMesssage}