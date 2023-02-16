class Socket {
  private socket: null | WebSocket = null;

  constructor() {
    this.socket = null;
  }

  connect(url: string) {
    if (!this.socket) {
      this.socket = new WebSocket(url);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  send(message: string) {
    if (this.socket) {
      this.socket.send(JSON.stringify(message));
    }
  }

  on(event: string, callback: (data: any) => void) {
    if (this.socket) {
      this.socket.addEventListener(event, callback);
    }
  }
}

export { Socket };
