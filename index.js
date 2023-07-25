const { useState, useEffect, useCallback } = React;

function App() {
  const toggleModalLinks = ({ projectName, projectUrl, githubUrl }) => {
    const modalLinks = document.getElementById("modal-links");
    projectName;
    const projectNameElem = modalLinks.querySelector("#projectName");
    const projectUrlElem = modalLinks.querySelector("#projectUrl");
    const githubUrlElem = modalLinks.querySelector("#githubUrl");
    const isOpen = modalLinks.hasAttribute("open");

    if (isOpen) {
      document.body.classList.remove("modal-is-open", "modal-is-opening");
      document.body.classList.add("modal-is-open", "modal-is-closing");
      modalLinks.removeAttribute("open", "");
      document.body.classList.remove("modal-is-open", "modal-is-closing");
      projectUrlElem.classList.remove("d-none");
      githubUrlElem.classList.remove("d-none");
      return;
    }

    projectNameElem.innerText = projectName || "Acessar";

    if (!projectUrl) {
      projectUrlElem.classList.add("d-none");
    }
    if (!githubUrl) {
      githubUrlElem.classList.add("d-none");
    }

    try {
      projectUrlElem.setAttribute("href", projectUrl);
    } catch (error) {}

    try {
      githubUrlElem.setAttribute("href", githubUrl);
    } catch (error) {}

    document.body.classList.add("modal-is-open", "modal-is-opening");
    modalLinks.setAttribute("open", "");
  };

  return (
    <div>
      <Nav />
      <div className="container mt-5">
        <article className="mb-5 p-3 d-flex justify-content-center align-items-center m-0 border border-light border-opacity-10">
          <h1 className="m-0">Projetos</h1>
        </article>
        <Projects toggleModalLinks={toggleModalLinks} />
        <LinksModal toggleModalLinks={toggleModalLinks} />
      </div>
    </div>
  );
}

// Render the component to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
