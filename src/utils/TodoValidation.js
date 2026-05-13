export function isValidTodoTitle(title) {
	if(title.trim()!== '') {
		return true;
	}
	return false;
}
