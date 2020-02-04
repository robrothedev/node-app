const db = require("libs/db");
module.exports = async (req, res) => {
  let numbers = await db("SELECT question.question,question.question_id,sum(response.response) as total FROM response LEFT JOIN question ON question.question_id = response.question_id WHERE type = 'number' and question.event_id = 5 GROUP BY question.question_id ORDER BY order_by", [5]);

  let yardGames = await db("SELECT response, CONCAT(firstname,' ',lastname) as name FROM response LEFT JOIN account_user on account_user.user_id = response.user_id WHERE question_id=69 and response != ''");

  let total = 0;

  numbers.forEach(n => {
    switch (n.question_id) {
      case 72:
        n.question = "Adults";
        total = total + n.total;
        break;

      case 73:
        n.question = "Kids";
        total = total + n.total;
        break;

      case 74:
        n.question = "Gluten Free";
        break;

      case 75:
        n.question = "Vegan";
        break;

      case 76:
        n.question = "Vegetarian";
        break;
    }
  });

  return res.json({
    totals: numbers,
    yardGames: yardGames,
    total: total
  });
};