// Box.tsx
import React from 'react';

interface BoxProps {
    text: string;
    link: string;
}

const Box: React.FC<BoxProps> = ({ text, link }) => {
    return (
        <div
            onClick={() => window.location.href = link}
            style={{ cursor: 'pointer', margin: '10px', padding: '20px', border: '1px solid black', display: 'inline-block' }}
        >
            {text}
        </div>
    );
};

export default Box;
