import {Socket} from '../../../src/utils/socket';

export const socketMiddleware =
  (socket: Socket) =>
  (params: any) =>
  (next: any) =>
  (action: { type: string }) => {
    const { dispatch, getState } = params;
    const { type } = action;

    switch (type) {
      case "socket/connect":
        socket.connect("wss://example.com");

        socket.on("open", () => {});
        socket.on("message", (data: any) => {});
        socket.on("close", () => {});
        break;

      case "socket/disconnect":
        socket.disconnect();
        break;

      default:
        break;
    }

    return next(action);
  };
