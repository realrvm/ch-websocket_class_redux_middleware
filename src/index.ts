import { Socket } from "./utils/socket";

const socket = new Socket();

socket.connect(
  "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self"
);

socket.send("new_message");

socket.on("open", () => {
  console.log("open connection");
});

socket.on("message", (e: { data: {} }) => {
  console.log("send message", e.data);
});

socket.on("close", () => {
  console.log("close connection");
});

socket.disconnect();
