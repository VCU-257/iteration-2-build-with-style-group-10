import { createContext, useContext, useState } from 'react';

const BucketContext = createContext(null);

export function BucketProvider({ children }) {
  const [bucketName, setBucketName] = useState('My First Bucket');
  return (
    <BucketContext.Provider value={{ bucketName, setBucketName }}>
      {children}
    </BucketContext.Provider>
  );
}

export function useBucket() {
  return useContext(BucketContext);
}
