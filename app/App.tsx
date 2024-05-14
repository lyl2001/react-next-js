import React from 'react';
import UserGreeting from './UserGreeting';

const App: React.FC = () => {
    return (
        <div>
            <UserGreeting name="Alice" age={30} />
        </div>
    );
};

export default App;
