// App.tsx
import React from 'react';
import './App.css';
import BoxList from './BoxList';

const App: React.FC = () => {
    return (
        <div className="App">
            <h2>Tools</h2>
            <BoxList />
        </div>
    );
}

export default App;