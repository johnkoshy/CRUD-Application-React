import React from 'react';

function Add() {
  return (
    <div>
      <h1>Add New User</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Age" />
        <input type="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Add;