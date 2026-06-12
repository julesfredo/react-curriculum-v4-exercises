import React from 'react';

function AboutPage() {
  return (
    <>
      <h1>The About Page</h1>

      <div>
        <h3>Features</h3>
        <ul>
          <li>Login Feature</li>
          <li>Add Tasks</li>
          <li>Edit Tasks</li>
          <li>Delete Tasks</li>
          <li>Query server for new tasks (POST & GET)</li>
        </ul>
      </div>

      <div>
        <h3>Technologies</h3>
        <ul>
          <li>React v19</li>
          <li>React Router</li>
          <li>API queries & responses</li>
          <li>Vite for configuration</li>
        </ul>
      </div>
    </>
  );
}

export default AboutPage;
