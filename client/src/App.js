import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

function App() {
    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });
    }, []);

    return (
        <div className="App">
            <h1>Ludo Africa</h1>
        </div>
    );
}

export default App;

