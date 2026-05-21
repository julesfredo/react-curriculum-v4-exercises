import { useState } from 'react';
function Logon ({onSetEmail = () => {}, onSetToken = () => {}}) {
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");
	let [authError, setAuthError] = useState("");
	let [isLoggingOn, setIsLoggingOn] = useState(true);
	let loggingState = "Log in"

	const handleSubmit = async () => {
			e.preventDefault();
			setIsLoggingOn(true);
		try {
			await fetch('api/users/logon', {
				method: 'POST',
				headers: {'ContentType': 'application/json'},
				credentials: 'include',
				body: JSON.stringify({ email, password })
			}
			);
			const data = await response.json();
			if(response.json === 200 && data.name && data.csrfToken) {
				onSetEmail(data.name);
				onSetPassword(data.csrfToken);
			} else {
				setAuthError(`Authentication Failed: ${data?.message}`);
			}
		} catch {
			setAuthError(`Error: ${error.name} | ${error.message}`)

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
			Logging State
		</button>
		</form>
		</>
	);
}

export default Logon 