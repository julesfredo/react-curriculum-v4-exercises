import {} from 'react';

function SortBy({ sortBy, sortDirection, onSortByChange, onSortDirectionChange }) {
	return (
		<>	
		<label for="sortBy">Sort By:</label>
		<select value={sortBy} onChange={onSortByChange} id="sort" name="SortSelect">
			<option value="creationDate">Creation Date</option>
			<option value="title">Title</option>
		</select>


		<label for="Order">Order:</label>
		<select value={ sortDirection } onChange={ onSortDirectionChange } id="order" name="Order">
			<option value="desc">Descending</option>
			<option value="asc">Ascending</option>
		</select>
		</>
		)
}
export function SortBy