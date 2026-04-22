import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

const defaultUser = {
  name: 'Angela Pantigozo',
  email: 'angela@example.com',
  friends: 3,
  avatarUrl: `${process.env.PUBLIC_URL}/profile-image.jpeg`,
  buckets: [
    {
      id: 'emergency-fund',
      title: 'Emergency Fund',
      saved: 1200,
      remaining: 300,
      goal: 1500,
    },
    {
      id: 'vacation-savings',
      title: 'Vacation Savings',
      saved: 420,
      remaining: 1080,
      goal: 1500,
    },
    {
      id: 'new-computer',
      title: 'New Computer',
      saved: 200,
      remaining: 1300,
      goal: 1500,
    },
  ],
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(defaultUser);

  function updateUser(updatedFields) {
    setUser((current) => ({
      ...current,
      ...updatedFields,
    }));
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
