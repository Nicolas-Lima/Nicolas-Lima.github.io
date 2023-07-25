const { useState, useEffect, useCallback } = React;

function App() {
  return (
  <div>
    <Nav />
      <div className="container mt-5">
        <article
          className="mb-5 p-3 d-flex justify-content-center align-items-center m-0 border border-light border-opacity-10">
          <h1 className="m-0">Projetos</h1>
        </article>

        <Projects />
        
        
        
        </div>
  </div>
    )
}

// Render the component to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
