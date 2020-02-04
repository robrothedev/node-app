require("app-module-path").addPath(__dirname);
const express = require("express");
const helmet = require("helmet");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const verifyJWT = require("./libs/jwt/verify");
const accessControl = require("./config/accessControl");
const fetchEvent = require("./modules/event/fetchEventCtrl");
const answerQuestions = require("./modules/questions/answerQuestionsCtrl");
const users = require("./modules/users/usersCtrl");
const responses = require("./modules/responses/responsesCtrl");
const userResponses = require("./modules/responses/byUserCtrl");

const http = require("http");
const socketIo = require("socket.io");
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
  socket.on("disconnect", () => console.log("Client disconnected"));
});

// event id for the questions
global.EVENT_ID = 5;

app
// express.js http headers security
.use(helmet())

// cross-site domain access
.use(cors())

// read cookies
.use(cookieParser())

// cors access
.use(accessControl)

// user auth via jwt in request cookie
.use(verifyJWT)

// parses the body of post requests
.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true })).use((req, res, next) => {
  req.eventId = 5;
  next();
}).use((req, res, next) => {
  req.io = io;
  next();
});

// get the event with questions
app.get("/event", fetchEvent);

// post a response
app.post("/response", answerQuestions);

// admin routes
app.get("/users", users);
app.get("/users/:userId/responses", userResponses);
app.get("/responses", responses);

server.listen(4000);