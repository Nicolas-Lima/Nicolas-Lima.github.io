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

  useEffect(() => {
    const savedTheme = localStorage.getItem("@savedTheme");
    if (savedTheme === "dark" || savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  return (
    <div className="pb-4 pb-md-0 ps-1 ps-sm-0">
      <div className="content">
        <Nav />
        <div className="container mt-2-3rem">
          <About />
          <Skills />
          <Projects toggleModalLinks={toggleModalLinks} />

          <LinksModal toggleModalLinks={toggleModalLinks} />
          {/* <ThemeToggler /> */}
        </div>
      </div>
    </div>
  );
}

// Render the component to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
