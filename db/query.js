
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

async function searchMessages(searchTerm) {
    // Correct: Destructuring { rows } here too!
    const { rows } = await Pool.query(
        "SELECT * FROM messages WHERE username ILIKE $1", 
        [`%${searchTerm}%`]
    );
    return rows;
}

// Don't forget to export it!

module.exports={getMessage,InsertMesssage,DeleteMessage,searchMessages}