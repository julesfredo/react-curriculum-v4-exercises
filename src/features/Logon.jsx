function Lgoon({onSetEmail = () => {}, onSetToken = () => }) {
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");
	let [authError, setAuthError] = useState("");
	let [isLoggingOn, setIsLoggingOn] = useState(false);

	const handleSubmit = async () => {
			e.preventDefault();
			setIsLoggingOn(true);
		try{
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
} 