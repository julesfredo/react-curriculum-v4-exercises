import React from 'react';
import { useAuth } from '/src/contexts/AuthContext.jsx';

function Header () {
  const { token, isAuthenticated, login, logout, email } = useAuth();
	return(
		<h1>TodoList</h1>
	);
}
 export default Header;