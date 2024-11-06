// UserList.tsx
import React from 'react';

interface User {
  name: string;
  age: number;
}

const UserList: React.FC = () => {
  const users: User[] = [
    { name: 'Jeff', age: 22 },
    { name: 'Bill', age: 38 },
    { name: 'David', age: 46 }
  ];

  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
