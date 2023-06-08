import React from 'react'

const Search = ({ onInputChange }) => {
	return (
		<input
			className="sm:w-full lg:w-1/3 md:w-1/3 border-solid border px-5 py-2 my-10 text-lg text-indigo-800 border-purple-400 placeholder-gray-400 contrast-more:border-purple-500 contrast-more:placeholder-purple-600 rounded-full"
			placeholder="Search for a user"
      onChange={(e) => onInputChange(e)}
		/>
	)
}

export default Search
