const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const { Server } = require("socket.io");
const Document = require("./models/Document");
const users = {};

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/collab-editor")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

io.on("connection", socket => {
  console.log("User connected:", socket.id);

  socket.on("join-document", async ({ documentId, username }) => {
    socket.join(documentId);

    users[socket.id] = { username, documentId };

    let document = await Document.findById(documentId);
    if (!document) {
      document = await Document.create({ _id: documentId });
    }

    socket.emit("load-document", document.content);

    socket.to(documentId).emit("user-joined", username);

   socket.on("text-change", text => {
  const user = users[socket.id];
  if (!user) return;

  socket.to(user.documentId).emit("receive-changes", text);
  io.to(user.documentId).emit("last-edited-by", user.username);
});


    socket.on("typing", () => {
      socket.to(documentId).emit("user-typing", username);
    });

    socket.on("save-document", async data => {
      await Document.findByIdAndUpdate(documentId, { content: data });
    });

    socket.on("disconnect", () => {
      const user = users[socket.id];
      if (user) {
        socket.to(documentId).emit("user-left", user.username);
        delete users[socket.id];
      }
    });
  });
});


server.listen(5000, () => {
  console.log("Server running on port 5000");
});
