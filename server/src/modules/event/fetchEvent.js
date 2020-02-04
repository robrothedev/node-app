const db = require("libs/db");

module.exports = async eventId => {
  let rows = await db("SELECT * FROM event WHERE event_id = ?", eventId);
  return rows[0];
};
