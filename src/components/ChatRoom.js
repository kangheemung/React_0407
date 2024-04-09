import React, { useState, useEffect } from 'react';

function ChatRoom({ roomId }) {
  const serverUrl = 'https://localhost:1234'; 

  useEffect(() => {
    const createConnection = (url, id) => {
      return {
        connect: () => {
          // Logic to establish connection
        },
        disconnect: () => {
          // Logic to disconnect the connection
        }
      };
    };

    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return null;
}

export default ChatRoom;
