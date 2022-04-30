import React from 'react';

const Form = () => (
  <div className="form-container">
    <h1>ADD NEW BOOK</h1>
    <form className="form">
      <input type="text" name="title" placeholder="title" required />
      <input type="text" name="author" placeholder="author" required />
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
