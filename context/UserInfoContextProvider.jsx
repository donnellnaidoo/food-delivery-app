import React, { useState } from 'react'
import UserInfoContext from './UserInfoContext';

const UserInfoContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoContextProvider