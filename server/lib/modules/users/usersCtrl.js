const db = require("libs/db");
module.exports = async (req, res) => {
  let users = await db("SELECT account_user.user_id, firstname,lastname, IF(response.user_id,true,false) AS responded FROM account_user LEFT JOIN response ON response.user_id = account_user.user_id GROUP BY account_user.user_id ORDER BY firstname, lastname");
  /*
  // list of people who have not responded
  let users = await db(
    "SELECT account_user.user_id, firstname, lastname FROM account_user LEFT JOIN response ON response.user_id = account_user.user_id WHERE response.user_id IS NULL GROUP BY account_user.user_id ORDER BY firstname, lastname"
  );
  */

  return res.json(users);
};