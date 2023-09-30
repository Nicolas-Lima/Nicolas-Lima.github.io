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
            <div className="mb-3 mb-lg-0" data-tooltip="Avançado">
              <div className="d-flex align-items-center">
                <JavascriptIcon />
                <span className="ms-2">Javascript</span>
              </div>

              <progress
                value="3"
                max="3"
                className="skillLevel  mt-2"></progress>
            </div>
            <div className="mb-3 mb-lg-0" data-tooltip="Avançado">
              <div className="d-flex align-items-center">
                <HtmlIcon />
                <span className="ms-2">HTML</span>
              </div>
              <progress
                value="3"
                max="3"
                className="skillLevel mt-2"></progress>
            </div>

            <div className="mb-3 mb-lg-0" data-tooltip="Intermediário">
              <div className="d-flex align-items-center">
                <CssIcon />
                <span className="ms-2">CSS</span>
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
            <div className="mb-3 mb-lg-0" data-tooltip="Avançado">
              <div className="d-flex align-items-center">
                <ReactIcon />
                <span className="ms-2">React JS</span>
              </div>
              <progress
                value="3"
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
            <div className="mb-3 mb-lg-0" data-tooltip="Intermediário">
              <div className="d-flex align-items-center">
                <PhpIcon />
                <span className="ms-2">PHP</span>
              </div>
              <progress
                value="2"
                max="3"
                className="skillLevel  mt-2"></progress>
            </div>
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
            <div className="mb-3 mb-lg-0" data-tooltip="Intermediário">
              <div className="d-flex align-items-center">
                <FirebaseIcon />
                <span className="ms-2">Firebase</span>
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
  )
}

function About() {
  const [mailIconContainerTooltip, setMailIconContainerTooltip] =
    useState('Copiar e-mail')
  const email = 'nicolasdelimaalves00@gmail.com'

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setMailIconContainerTooltip('E-mail copiado!')
    })
  }

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
          habilidades como{' '}
          <span className="text-light-green">Desenvolvedor Front-End</span>
          , com especial interesse na tecnologia{' '}
          <span className="text-light-green">React JS</span>. Estou sempre
          em busca de aprimorar minhas habilidades e trabalhar em projetos
          desafiadores. Há um ano, tenho me dedicado também ao estudo de
          tecnologias modernas como{' '}
          <span className="text-light-green">Javascript</span>,{' '}
          <span className="text-light-green">SQL</span> e{' '}
          <span className="text-light-green">GIT</span>.
        </div>

        <div className="mt-3">
          Abaixo, apresentarei minhas{' '}
          <a
            href="#skills"
            className="link-without-formatting text-light-green text-hover-light-blue">
            <span className="me-1 cursor-hover-pointer">habilidades</span>
          </a>
          e também compartilharei algum dos{' '}
          <a
            href="#projects"
            className="link-without-formatting text-light-green text-hover-light-blue">
            <span className="cursor-hover-pointer">projetos</span>
          </a>{' '}
          que desenvolvi.
        </div>
      </div>
      <div id="links">
        <div
          className="mt-3 mailIcon-container w-auto d-inline-block"
          data-tooltip={mailIconContainerTooltip}
          onMouseLeave={() => setMailIconContainerTooltip('Copiar e-mail')}
          onClick={copyEmailToClipboard}>
          <MailIcon />
          <span className="ms-2 email">{email}</span>
        </div>
        <div className="mt-3 d-flex align-items-center link-info">
          <a
            href="https://www.linkedin.com/in/nicolaslimaalv"
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
  )
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
  )
}

function Projects({ toggleModalLinks }) {
  const projects = [
    {
      technology: 'React JS',
      technologyIcon: <ReactIcon />,
      projects: [
        {
          technologyName: 'React JS',
          fullName: 'Loja de produtos',
          usedTechnologies: [
            <ReactIcon />,
            <BootstrapIcon />,
            <FirebaseIcon />
          ],
          inDevelopment: false,
          name: 'Loja de produtos',
          projectUrl: 'https://a-product-store.netlify.app/',
          githubUrl: 'https://github.com/Nicolas-Lima/product-store'
        },
        {
          technologyName: 'React JS',
          fullName: 'Site do meu TCC',
          usedTechnologies: [
            <ReactIcon />,
            <BootstrapIcon />,
            <FirebaseIcon />
          ],
          inDevelopment: true,
          name: 'Site do meu TCC',
          projectUrl: 'https://sitetccinfo.netlify.app/',
          githubUrl: 'https://github.com/Nicolas-Lima/site_tcc'
        },
        {
          technologyName: 'React JS',
          fullName: 'Repositórios',
          name: 'Repositórios',
          usedTechnologies: [<ReactIcon />, <CssIcon />],
          projectUrl: 'https://projeto-repos-react.netlify.app',
          githubUrl:
            'https://github.com/Nicolas-Lima/Projetos-React-JS/tree/main/projeto-repos'
        },
        {
          technologyName: 'React JS',
          fullName: 'Sistema chamados',
          name: 'Sistema chamados',
          usedTechnologies: [<ReactIcon />, <CssIcon />, <FirebaseIcon />],
          projectUrl: 'https://ni-sistema-chamados.netlify.app',
          githubUrl:
            'https://github.com/Nicolas-Lima/Projetos-React-JS/tree/main/sistema-chamados'
        },
        {
          technologyName: 'React JS',
          fullName: 'Prime Flix',

          name: 'Prime Flix',
          usedTechnologies: [
            <ReactIcon />,
            <BootstrapIcon />,
            <FirebaseIcon />
          ],
          projectUrl: 'https://rdmetas.000webhostapp.com/',
          githubUrl:
            'https://github.com/Nicolas-Lima/Projetos-React-JS/tree/main/Prime%20Flix'
        }
      ]
    },
    {
      technology: 'PHP',
      technologyIcon: <PhpIcon />,
      projects: [
        {
          technologyName: 'PHP',
          fullName: 'Blog Codar',
          name: 'Blog Codar',
          usedTechnologies: [<PhpIcon />, <CssIcon />],
          projectUrl: 'https://nic-php.000webhostapp.com/blogCodar/',
          githubUrl:
            'https://github.com/Nicolas-Lima/Projetos-PHP/tree/main/blogCodar'
        },
        {
          technologyName: 'PHP',
          fullName: 'Agenda',
          name: 'Agenda',
          usedTechnologies: [<PhpIcon />, <BootstrapIcon />, <CssIcon />],
          projectUrl: 'https://nic-php.000webhostapp.com/agenda/',
          githubUrl:
            'https://github.com/Nicolas-Lima/Projetos-PHP/tree/main/agenda'
        }
      ]
    },
    {
      technology: 'Javascript',
      technologyIcon: <JavascriptIcon />,
      projects: [
        {
          technologyName: 'Javascript',
          fullName: 'Clock App',
          name: 'Clock App',
          usedTechnologies: [<JavascriptIcon />, <BootstrapIcon />],
          projectUrl: 'projetos/clock_app/index.html',
          githubUrl:
            'https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Clock%20App'
        },
        {
          technologyName: 'Javascript',
          fullName: 'Primeira Game Engine',
          name: 'Primeira Game Engine',
          usedTechnologies: [<JavascriptIcon />, <CssIcon />],
          projectUrl: 'projetos/game_engine_1/index.html',
          githubUrl:
            'https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Game%20Engine%201'
        },
        {
          technologyName: 'Javascript',
          fullName: 'Segunda Game Engine',
          name: 'Segunda Game Engine',
          usedTechnologies: [<JavascriptIcon />, <CssIcon />],
          projectUrl: 'projetos/game_engine_2/index.html',
          githubUrl:
            'https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Game%20Engine%202'
        },
        {
          technologyName: 'Javascript',
          fullName: 'Jogo da velha',
          name: 'Jogo da velha',
          usedTechnologies: [<JavascriptIcon />, <BootstrapIcon />],
          projectUrl: 'projetos/jogoVelha/index.html',
          githubUrl:
            'https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Joguinho%20da%20velha'
        },
        {
          technologyName: 'Javascript',
          fullName: 'To-do List 1',
          name: 'To-do List 1',
          usedTechnologies: [<JavascriptIcon />, <CssIcon />],
          projectUrl: 'projetos/to-do-lists/To-do-List-2/index.html',
          githubUrl:
            'https://github.com/Nicolas-Lima/Projetos-JS/tree/main/To-do%20List%201'
        }
      ]
    },
    {
      technology: 'Node JS',
      technologyIcon: <NodeJSIcon />,
      projects: [
        {
          technologyName: 'Node JS',
          fullName: 'To-do List 2',
          name: 'To-do List 2',
          usedTechnologies: [<NodeJSIcon />, <JavascriptIcon />],
          projectUrl: 'https://nicolas-listatarefas.herokuapp.com/',
          githubUrl:
            'https://github.com/Nicolas-Lima/Projetos-Node-JS/tree/main/listaTarefas'
        }
      ]
    }
  ]

  const getAllProjects = () => {
    return projects.reduce(
      (allProjects, technology) => [
        ...allProjects,
        ...technology.projects
      ],
      []
    )
  }

  const [selectedTechnology, setSelectedTechnology] =
    useState('allTechnologies')
  const [allProjects, setAllProjects] = useState(getAllProjects())

  const handleSelectTechnology = e => {
    setSelectedTechnology(e.target.value)
    const selectedTechnology = e.target.value

    const renderedProjects = document.body.querySelectorAll(
      '#projects .project'
    )

    if (selectedTechnology === 'allTechnologies') {
      renderedProjects.forEach(project => {
        project.classList.add('fade-out')
        setTimeout(() => {
          project.classList.remove('fade-out')
          setAllProjects(getAllProjects())
        }, 200)
      })

      return
    }

    const selectedTechnologyProjects = projects.filter(
      technology => technology.technology === selectedTechnology
    )[0]?.projects

    renderedProjects.forEach(project => {
      project.classList.add('fade-out')
      setTimeout(() => {
        project.classList.remove('fade-out')
        if (selectedTechnologyProjects) {
          setAllProjects(selectedTechnologyProjects)
        }
      }, 200)
    })
  }

  return (
    <div className="mb-3 mt-4 mt-md-5" id="projects">
      <article className="p-3 d-flex justify-content-center align-items-center m-0 border border-light border-opacity-10">
        <h1 className="m-0">Projetos</h1>
      </article>
      <div className="mt-2-3rem">
        <div className="selectTechnology">
          <label
            htmlFor="technology"
            className="m-0 d-inline-block rounded p-1 px-3">
            Tecnologia
          </label>
          <select
            className="d-block"
            id="technology"
            onChange={handleSelectTechnology}>
            <option value={'allTechnologies'} defaultValue>
              Todas as tecnologias
            </option>
            {projects.map(technology => {
              return (
                <option
                  value={technology.technology}
                  key={`option-${technology.technology}`}>
                  {technology.technology}
                </option>
              )
            })}
          </select>
        </div>
        <div className="row mb-0">
          {allProjects.map(project => {
            return (
              <Project
                inDevelopment={project.inDevelopment}
                selectedTechnology={selectedTechnology}
                technologyName={project.technologyName}
                usedTechnologies={project.usedTechnologies}
                projectFullname={project.fullName}
                projectName={project.name}
                projectUrl={project.projectUrl}
                githubUrl={project.githubUrl}
                toggleModalLinks={toggleModalLinks}
                key={project.name}
              />
            )
          })}
        </div>
      </div>
      {/* {projects.map(technology => {
        return (
          <div className="row mb-0" key={technology.technology}>
            {technology.projects.map(project => {
              return (
                <Project
                  inDevelopment={project.inDevelopment}
                  usedTechnologies={project.usedTechnologies}
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
      })} */}
    </div>
  )
}

function Project({
  inDevelopment = false,
  selectedTechnology,
  technologyName,
  projectFullname,
  projectName,
  projectUrl,
  githubUrl = '',
  toggleModalLinks,
  usedTechnologies
}) {
  const UsedTechnologies = ({
    className = 'mt-4',
    usedTechnologies = []
  }) => {
    return (
      <>
        {usedTechnologies && (
          <div className={`usedTechnologies ${className}`}>
            <div className="d-flex justify-content-center align-items-center">
              {usedTechnologies.map((usedTechnology, index) => {
                return (
                  <div
                    className="usedTechnology"
                    key={`usedTechnology-${projectFullname}-${index}`}>
                    {usedTechnology}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </>
    )
  }
  const SubmitButton = () => {
    return (
      <button
        type="button"
        className="btn btn-outline-primary px-3 py-2 m-2 mt-4"
        onClick={() =>
          toggleModalLinks({ projectName, projectUrl, githubUrl })
        }>
        Acessar
      </button>
    )
  }

  return (
    <div
      className={`col-sm-12 col-md-6 col-lg-4 ${
        (selectedTechnology === technologyName ||
          selectedTechnology === 'allTechnologies') &&
        'fade-in'
      }`}>
      <article className={`project`}>
        {inDevelopment ? (
          <header
            className="d-flex justify-content-center align-items-center inDevelopment"
            data-tooltip="Em desenvolvimento">
            {projectFullname}

            <span>
              <HammerIcon />
            </span>
          </header>
        ) : (
          <header className="text-center">{projectFullname}</header>
        )}

        <SubmitButton />
        <UsedTechnologies usedTechnologies={usedTechnologies} />
      </article>
    </div>
  )
}

function LinksModal({ toggleModalLinks }) {
  return (
    <dialog id="modal-links" className="p-3">
      <article className="d-flex flex-column align-items-center">
        <a
          onClick={toggleModalLinks}
          aria-label="Close"
          className="close"
          style={{
            transform: 'scale(1.4)',
            marginRight: '5px'
          }}></a>

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
  )
}

function ThemeToggler() {
  const [savedTheme, setSavedTheme] = useState('')

  useEffect(() => {
    const savedTheme = localStorage.getItem('@savedTheme') || 'dark'
    setSavedTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    const htmlElement = document.documentElement
    const dataTheme = htmlElement.getAttribute('data-theme')
    htmlElement.setAttribute(
      'data-theme',
      dataTheme === 'dark' ? 'light' : 'dark'
    )

    setSavedTheme(htmlElement.getAttribute('data-theme'))

    localStorage.setItem(
      '@savedTheme',
      htmlElement.getAttribute('data-theme')
    )
  }

  return (
    <a
      className="shadow-none remove-focus-background rounded"
      id="themeToggler"
      onClick={toggleTheme}
      target="_blank"
      aria-label="theme toggle">
      {savedTheme == 'dark' ? <SunIcon /> : <MoonIcon />}
    </a>
  )
}
