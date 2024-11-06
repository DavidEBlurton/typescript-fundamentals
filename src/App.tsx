// App.tsx
import React from 'react';
import BasicTypes from './Types';
import ColorList from './colorlist';
import EvenNumbers from './numbers';
import UserList from './userlist';

const App: React.FC = () => {
  return (
    <div>
      <h1>TypeScript Fundamentals</h1>
      <BasicTypes />
      <ColorList />
      <EvenNumbers />
      <UserList />
    </div>
  );
};

export default App;
