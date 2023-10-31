import React, {useRef} from 'react';

function Search({ filterUpdate }) {
  // TODO: Update the input variable to use the useRef() hook
  const inputRef = useRef(null);

  function handleChange() {
    // TODO: Update the value of the filter with the input from the textbox
    // Hint: You will need to use the "current" property of the input variable
    const inputVal = inputRef.current.value;
    filterUpdate(inputVal);
  }

  return (
    // TODO: Add a ref attribute to the input tag
    // TODO: Add an onChange attribute to the input tag
    <form>
      <input 
        type="text"
        placeholder="Type to Filter"
        ref={inputRef}
        onChange={handleChange}
      />
    </form>
  );
}
export default Search;
