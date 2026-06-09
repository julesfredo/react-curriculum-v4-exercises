import React, { useState } from 'react';
import { useAuth } from '/src/contexts/AuthContext.jsx';

export default function Logon() {

  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoggingOn, setIsLoggingOn] = useState(false);

  const { token, isAuthenticated, login, logout, email } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setAuthError(null);
    setIsLoggingOn(true);

    try {
      const response = await fetch('/api/users/logon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      (response.status)

      if (response.status === 200
       // && data?.name && data?.csrfToken
      	) {
        onSetEmail(data.name);
        onSetToken(data.csrfToken);
      } else {
        setAuthError(`Authentication Failed: ${data?.message ?? 'Unknown error'}`);
      }
    } catch (err) {
      setAuthError(`Network/Error: ${err?.message ?? 'Unknown error'}`);
    } finally {
      setIsLoggingOn(false);
    }
  // }
};

  return (
    <>
      {authError && <h3>{authError}</h3>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          required
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={isLoggingOn}>
          {isLoggingOn ? 'Logging in…' : 'Log in'}
        </button>
      </form>
    </>
  );
}


// import { useState } from 'react';
// function Logon ({onSetEmail = () => {}, onSetToken = () => {}}) {
// 	let [email, setEmail] = useState("");
// 	let [password, setPassword] = useState("");
// 	let [authError, setAuthError] = useState("");
// 	let [isLoggingOn, setIsLoggingOn] = useState(true);
// 	let loggingState = "Log in"

// 	const handleSubmit = async (event) => {
// 			event.preventDefault();
// 			setIsLoggingOn(true);
// 		try {
// 			await fetch('/api', {
// 				method: 'POST',
// 				headers: {'Content-Type': 'application/json'},
// 				credentials: 'include',
// 				body: JSON.stringify({ email, password })
// 			}
// 			);
// 			const data = await response.json();
// 			(response,json());
// 			if(response.status === 200 && data.name && data.csrfToken) {
// 				onSetEmail(data.name);
// 				onSetPassword(data.csrfToken);
// 			} else {
// 				setAuthError(`Authentication Failed: ${data?.message}`);
// 			}
// 		} catch {
// 			setAuthError('Error:');

// 		} finally {
// 			setIsLoggingOn(false);
// 		}
// 	} 
// 	return(
// 		<>
// 		{isLoggingOn && <h3>Error Logging In</h3>}
// 		<form>
// 			<label htmlFor="email">Email</label>
// 			<input 
// 				required 
// 				id="email"
// 				value={email}
// 				onChange={e => setEmail(e.target.value)}
// 			/>
// 			<label htmlFor="password">Password</label>
// 			<input 
// 			required
// 			id="Password"
// 			value={password}
// 			onChange={e => setPassword(e.target.value)}
// 		/>
// 		<button onClick={handleSubmit}>
// 			Logging State
// 		</button>
// 		</form>
// 		</>
// 	);
// }

// export default Logon 