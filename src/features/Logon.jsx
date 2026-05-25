import { useState } from 'react';

function Logon (onSetEmail, onSetToken) {
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");
	let [authError, setAuthError] = useState("");
	let [isLoggingOn, setIsLoggingOn] = useState(true);
	let loggingState = "Log in"

	const handleSubmit = async () => {
			// e.preventDefault();
		setIsLoggingOn(true);
		try{ 
			const response = await fetch('/api/users/logon', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				body: JSON.stringify({ email, password })
			});
			const data = await response;
			console.log(response.status);
			if (response.status === 200
			 // && data.name && data.csrfToken
			 ) {
				onSetEmail(data.name);
				onSetToken(data.csrfToken);
			} else {
				setAuthError(`Authentication failed: ${data?.message}`);
			}
		} catch (error) {
			setAuthError(`Error: ${error.name} | ${error.message}`);
		} finally {
			setIsLoggingOn(false);
		}

	} 
	return(
		<>
		{isLoggingOn && <h3>Error Logging In</h3>}
		<form>
			<label htmlFor="email">Email</label>
			<input 
				required 
				id="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<label htmlFor="password">Password</label>
			<input 
				required
				id="Password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button onClick={()=>handleSubmit()}>
				{loggingState}
			</button>
		</form>
		</>
		);
}

export default Logon 