
const Pool = require("./pool")

async function getMessage() {
    const {rows}= await Pool.query("SELECT * FROM messages");
    return rows;
}

async function InsertMesssage(username, text) {
       await Pool.query("INSERT INTO messages (username, text) VALUES($1,$2) ",[username,text])
}

async function  DeleteMessage(UserId) {
    await Pool.query("DELETE FROM messages WHERE id = $1",[UserId])
}

module.exports={getMessage,InsertMesssage,DeleteMessage}