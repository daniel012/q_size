import React, { useState } from 'react';
import PropTypes from 'prop-types';



const UserContext = React.createContext({});
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    return (
        <UserContext.Provider
          value={{
            user,
            setUser
          }}
        >
          {children}
        </UserContext.Provider>
      );
    };

UserContextProvider.propTypes = {
    children: PropTypes.node,
    };
      
export { UserContext, UserContextProvider };