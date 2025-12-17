import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");
const DOCUMENT_ID = "codtech-doc";

function Editor() {
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);
  const [typingUser, setTypingUser] = useState("");

  useEffect(() => {
    socket.on("load-document", data => setText(data));
    socket.on("receive-changes", data => setText(data));

    socket.on("user-typing", name => {
      setTypingUser(`${name} is typing...`);
      setTimeout(() => setTypingUser(""), 1000);
    });

    return () => socket.off();
  }, []);

  const joinDocument = () => {
    if (!username.trim()) return alert("Enter username");
    socket.emit("join-document", { documentId: DOCUMENT_ID, username });
    setJoined(true);
  };

  const handleChange = e => {
    const value = e.target.value;
    setText(value);
    socket.emit("text-change", value);
    socket.emit("typing");
    socket.emit("save-document", value);
  };

  // ✅ JOIN SCREEN
  if (!joined) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f5f5"
        }}
      >
        <div
          style={{
            padding: "40px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            minWidth: "320px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px"
          }}
        >
          <h2 style={{ margin: 0 }}>Enter your name</h2>

          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Your name"
            style={{
              padding: "10px",
              width: "100%",
              fontSize: "16px",
              textAlign: "center"
            }}
          />

          <button
            onClick={joinDocument}
            style={{
              padding: "10px 25px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Join
          </button>
        </div>
      </div>
    );
  }

  // ✅ EDITOR SCREEN
  return (
  <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5"
    }}
  >
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        width: "80%",
        maxWidth: "900px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px"
      }}
    >
      <h3 style={{ margin: 0 }}>Logged in as: {username}</h3>
      <p style={{ margin: 0 }}>{typingUser}</p>

      <textarea
        value={text}
        onChange={handleChange}
        rows="18"
        style={{
          width: "100%",
          fontSize: "16px",
          padding: "10px",
          resize: "none"
        }}
      />
    </div>
  </div>
);

}

export default Editor;
