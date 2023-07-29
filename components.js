const { useState, useEffect } = React;

function Skills() {
  return (
    <div className="mb-3 mt-5" id="skills">
      <article className="mb-2-3rem p-3 d-flex justify-content-center align-items-center m-0 border border-light border-opacity-10">
        <h1 className="m-0 text-center">Minhas habilidades</h1>
      </article>
      <div className="ps-3 ps-sm-0">
        <div className="category mt-2-3rem">
          <h3 className="text-light-blue category-title">Front-end</h3>
          <div className="grid">
            <div className="mb-3 mb-lg-0" data-tooltip="Intermediário">
              <div className="d-flex align-items-center">
                <HtmlIcon />
                <span className="ms-2">HTML</span>
              </div>
              <progress
                value="2"
                max="3"
                className="skillLevel mt-2"></progress>
            </div>
            <div className="mb-3 mb-lg-0" data-tooltip="Iniciante">
              <div className="d-flex align-items-center">
                <CssIcon />
                <span className="ms-2">CSS</span>
              </div>

              <progress
                value="1"
                max="3"
                className="skillLevel  mt-2"></progress>
            </div>
            <div className="mb-3 mb-lg-0" data-tooltip="Intermediário">
              <div className="d-flex align-items-center">
                <JavascriptIcon />
                <span className="ms-2">Javascript</span>
              </div>

              <progress
                value="2"
                max="3"
                className="skillLevel  mt-2"></progress>
            </div>
          </div>
        </div>
        <div className="category mt-2-3rem">
          <h3 className="text-light-blue category-title">
            Front-end Frameworks
          </h3>

          <div className="grid">
            <div className="mb-3 mb-lg-0" data-tooltip="Intermediário">
              <div className="d-flex align-items-center">
                <ReactIcon />
                <span className="ms-2">React JS</span>
              </div>
              <progress
                value="2"
                max="3"
                className="skillLevel  mt-2"></progress>
            </div>
            <div className="mb-3 mb-lg-0" data-tooltip="Intermediário">
              <div className="d-flex align-items-center">
                <BootstrapIcon />
                <span className="ms-2">Bootstrap</span>
              </div>
              <progress
                value="2"
                max="3"
                className="skillLevel  mt-2"></progress>
            </div>
            <div>
              <div className="d-flex align-items-center"></div>
            </div>
          </div>
        </div>
        <div className="category mt-2-3rem">
          <h3 className="text-light-blue category-title">Back-end</h3>
          <div className="grid">
            <div className="mb-3 mb-lg-0" data-tooltip="Iniciante">
              <div className="d-flex align-items-center">
                <PythonIcon />
                <span className="ms-2">Python</span>
              </div>
              <progress
                value="1"
                max="3"
                className="skillLevel  mt-2"></progress>
            </div>
            <div className="mb-3 mb-lg-0" data-tooltip="Iniciante">
              <div className="d-flex align-items-center">
                <PhpIcon />
                <span className="ms-2">PHP</span>
              </div>
              <progress
                value="1"
                max="3"
                className="skillLevel  mt-2"></progress>
            </div>
            <div className="mb-3 mb-lg-0" data-tooltip="Iniciante">
              <div className="d-flex align-items-center">
                <NodeJSIcon />
                <span className="ms-2">Node JS</span>
              </div>
              <progress
                value="1"
                max="3"
                className="skillLevel  mt-2"></progress>
            </div>
          </div>
        </div>
        <div className="category mt-2-3rem">
          <h3 className="text-light-blue category-title">Databases</h3>

          <div className="grid">
            <div className="mb-3 mb-lg-0" data-tooltip="Intermediário">
              <div className="d-flex align-items-center">
                <MySqlIcon />
                <span className="ms-2">
                  MySql ( <strong>SQL</strong> )
                </span>
              </div>
              <progress
                value="2"
                max="3"
                className="skillLevel  mt-2"></progress>
            </div>
            <div className="mb-3 mb-lg-0" data-tooltip="Iniciante">
              <div className="d-flex align-items-center">
                <FirebaseIcon />
                <span className="ms-2">
                  Firebase
                </span>
              </div>
              <progress
                value="1"
                max="3"
                className="skillLevel  mt-2"></progress>
            </div>
            <div>
              <div className="d-flex align-items-center"></div>
            </div>
          </div>
        </div>

        <div className="category mt-2-3rem">
          <h3 className="text-light-blue category-title">Tools</h3>
          <div className="grid">
            <div className="mb-3 mb-lg-0" data-tooltip="Intermediário">
              <div className="d-flex align-items-center">
                <GitIcon />
                <span className="ms-2">GIT</span>
              </div>
              <progress
                value="2"
                max="3"
                className="skillLevel  mt-2"></progress>
            </div>
            <div>
              <div className="d-flex align-items-center"></div>
            </div>
            <div>
              <div className="d-flex align-items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  const [mailIconContainerTooltip, setMailIconContainerTooltip] =
    useState("Copiar e-mail");
  const email = "nicolasdelimaalves00@gmail.com";

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setMailIconContainerTooltip("E-mail copiado!");
    });
  };

  return (
    <div>
      <h2 className="mb-3">Nícolas Lima</h2>
      <h3 className="text-light-green mb-4">
        Estudante de Desenvolvimento Front-End React JS
      </h3>
      <div className="fs-5">
        <div className="welcomeMessage text-light-blue mb-3">
          <span className="me-2">👋🏼</span> Olá, seja bem vindo ao meu
          portfólio!
        </div>

        <div className="aboutText">
          Sou uma pessoa apaixonada por programação com foco em
          desenvolvimento web e atualmente estou focado em aprimorar minhas
          habilidades como{" "}
          <span className="text-light-green">Desenvolvedor Front-End</span>
          , com especial interesse na tecnologia{" "}
          <span className="text-light-green">React JS</span>. Estou sempre
          em busca de aprimorar minhas habilidades e trabalhar em projetos
          desafiadores. Há um ano, tenho me dedicado também ao estudo de
          tecnologias modernas como{" "}
          <span className="text-light-green">Javascript</span>,{" "}
          <span className="text-light-green">SQL</span> e{" "}
          <span className="text-light-green">GIT</span>.
        </div>

        <div className="mt-3">
          Abaixo, apresentarei minhas{" "}
          <a
            href="#skills"
            className="link-without-formatting text-light-green text-hover-light-blue">
            <span className="me-1 cursor-hover-pointer">habilidades</span>
          </a>
          e também compartilharei algum dos{" "}
          <a
            href="#projects"
            className="link-without-formatting text-light-green text-hover-light-blue">
            <span className="cursor-hover-pointer">projetos</span>
          </a>{" "}
          que desenvolvi.
        </div>
      </div>
      <div id="links">
        <div
          className="mt-3 mailIcon-container w-auto d-inline-block"
          data-tooltip={mailIconContainerTooltip}
          onMouseLeave={() => setMailIconContainerTooltip("Copiar e-mail")}
          onClick={copyEmailToClipboard}>
          <MailIcon />
          <span className="ms-2 email">{email}</span>
        </div>
        <div className="mt-3 d-flex align-items-center link-info">
          <a
            href="https://www.linkedin.com/in/n%C3%ADcolaslima/"
            target="_blank"
            className="remove-focus-background shadow-none bg-transparent">
            <LinkedinIcon />
            <span className="ms-2">Linkedin</span>
          </a>
        </div>
        <div className="mt-3 d-flex align-items-center link-light">
          <a
            href="https://github.com/nicolas-lima"
            className="link-light remove-focus-background shadow-none bg-transparent"
            target="_blank">
            <GithubIcon />
            <span className="ms-2">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="mb-4 mb-md-0 border-light border-bottom border-opacity-10 d-flex justify-content-around py-1">
      <ul>
        <li>
          <a
            href="https://github.com/nicolas-lima"
            className="link-light remove-focus-background"
            id="githubLink"
            target="_blank"
            aria-label="Menu">
            <GithubIcon />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <strong className="fs-5">Nícolas Lima</strong>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/nícolaslima"
            className="link-info remove-focus-background"
            id="linkedinLink"
            target="_blank"
            aria-label="Linkedin">
            <LinkedinIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Projects({ toggleModalLinks }) {
  const projects = [
    {
      technology: "React JS",
      technologyIcon: <ReactIcon />,
      projects: [
        {
          fullName: "Site do meu TCC ( Em Desenvolvimento )",
          name: "Site do meu TCC",
          projectUrl: "https://sitetccinfo.netlify.app/",
          githubUrl: "https://github.com/Nicolas-Lima/site_tcc",
        },
        {
          fullName: "Loja de produtos ( Em Desenvolvimento )",
          name: "Loja de produtos",
          projectUrl: "https://a-product-store.netlify.app/",
          githubUrl: "https://github.com/Nicolas-Lima/product-store",
        },
        {
          fullName: "Prime Flix",
          name: "Prime Flix",
          projectUrl: "https://rdmetas.000webhostapp.com/",
          githubUrl:
            "https://github.com/Nicolas-Lima/Projetos-React-JS/tree/main/Prime%20Flix",
        },
      ],
    },
    {
      technology: "Javascript",
      technologyIcon: <JavascriptIcon />,
      projects: [
        {
          fullName: "Clock App",
          name: "Clock App",
          projectUrl: "projetos/clock_app/index.html",
          githubUrl:
            "https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Clock%20App",
        },
        {
          fullName: "Primeira Game Engine",
          name: "Primeira Game Engine",
          projectUrl: "projetos/game_engine_1/index.html",
          githubUrl:
            "https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Game%20Engine%201",
        },
        {
          fullName: "Segunda Game Engine",
          name: "Segunda Game Engine",
          projectUrl: "projetos/game_engine_2/index.html",
          githubUrl:
            "https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Game%20Engine%202",
        },
        {
          fullName: "Jogo da velha",
          name: "Jogo da velha",
          projectUrl: "projetos/jogoVelha/index.html",
          githubUrl:
            "https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Joguinho%20da%20velha",
        },
        {
          fullName: "To-do List 1",
          name: "To-do List 1",
          projectUrl: "https://nicolas-listatarefas.herokuapp.com/",
          githubUrl:
            "https://github.com/Nicolas-Lima/Projetos-JS/tree/main/To-do%20List%201",
        },
        {
          fullName: "To-do List 2",
          name: "To-do List 2",
          projectUrl: "projetos/to-do-lists/To-do-List-2/index.html",
          githubUrl:
            "https://github.com/Nicolas-Lima/Projetos-JS/tree/main/To-do%20List%202",
        },
      ],
    },
  ];

  return (
    <div className="mb-3 mt-4 mt-md-5" id="projects">
      <article className="mb-4 p-3 d-flex justify-content-center align-items-center m-0 border border-light border-opacity-10">
        <h1 className="m-0">Projetos</h1>
      </article>
      {projects.map(technology => {
        return (
          <div className="row mb-4" key={technology.technology}>
            <h1 className="mb-3 technologyTitle text-center text-md-start">
              <span className="technologyIcon me-3">
                {technology.technologyIcon}
              </span>
              {technology.technology}
            </h1>

            {technology.projects.map(project => {
              return (
                <Project
                  projectFullname={project.fullName}
                  projectName={project.name}
                  projectUrl={project.projectUrl}
                  githubUrl={project.githubUrl}
                  toggleModalLinks={toggleModalLinks}
                  key={project.name}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function Project({
  projectFullname,
  projectName,
  projectUrl,
  githubUrl = "",
  toggleModalLinks,
}) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <article className="project">
        <header className="text-center mb-5">{projectFullname}</header>
        <button
          type="button"
          className="btn btn-outline-primary px-3 py-2 m-2"
          onClick={() =>
            toggleModalLinks({ projectName, projectUrl, githubUrl })
          }>
          Acessar
        </button>
      </article>
    </div>
  );
}

function LinksModal({ toggleModalLinks }) {
  return (
    <dialog id="modal-links" className="p-3">
      <article className="d-flex flex-column align-items-center">
        <a
          onClick={toggleModalLinks}
          aria-label="Close"
          className="close"></a>

        <h3 id="projectName">Acessar</h3>
        <div className="d-flex flex-column align-items-center w-100 px-5 py-2">
          <a
            target="_blank"
            className="w-100 d-block text-decoration-none"
            id="projectUrl">
            <button>
              <SiteIcon />
              <span>Site do projeto</span>
            </button>
          </a>

          <a
            className="w-100 d-block text-decoration-none"
            id="githubUrl"
            target="_blank">
            <button className="secondary">
              <GithubIcon className="mx-2" />
              <span>Repositório no Github</span>
            </button>
          </a>
        </div>
      </article>
    </dialog>
  );
}

function ThemeToggler() {
  const [savedTheme, setSavedTheme] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("@savedTheme") || "dark";
    setSavedTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const dataTheme = htmlElement.getAttribute("data-theme");
    htmlElement.setAttribute(
      "data-theme",
      dataTheme === "dark" ? "light" : "dark"
    );

    setSavedTheme(htmlElement.getAttribute("data-theme"));

    localStorage.setItem(
      "@savedTheme",
      htmlElement.getAttribute("data-theme")
    );
  };

  return (
    <a
      className="shadow-none remove-focus-background rounded"
      id="themeToggler"
      onClick={toggleTheme}
      target="_blank"
      aria-label="theme toggle">
      {savedTheme == "dark" ? <SunIcon /> : <MoonIcon />}
    </a>
  );
}
