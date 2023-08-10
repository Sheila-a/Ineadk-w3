import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const RoleContext = createContext();

export function useRole() {
  return useContext(RoleContext);
}

export function RoleProvider({ children }) {
  const [role, setRole] = useState('');

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

RoleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
