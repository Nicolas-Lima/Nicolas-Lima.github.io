/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("const {\n  useState,\n  useEffect,\n  useCallback\n} = React;\nfunction App() {\n  const toggleModalLinks = ({\n    projectName,\n    projectUrl,\n    githubUrl\n  }) => {\n    const modalLinks = document.getElementById(\"modal-links\");\n    projectName;\n    const projectNameElem = modalLinks.querySelector(\"#projectName\");\n    const projectUrlElem = modalLinks.querySelector(\"#projectUrl\");\n    const githubUrlElem = modalLinks.querySelector(\"#githubUrl\");\n    const isOpen = modalLinks.hasAttribute(\"open\");\n    if (isOpen) {\n      document.body.classList.remove(\"modal-is-open\", \"modal-is-opening\");\n      document.body.classList.add(\"modal-is-open\", \"modal-is-closing\");\n      modalLinks.removeAttribute(\"open\", \"\");\n      document.body.classList.remove(\"modal-is-open\", \"modal-is-closing\");\n      projectUrlElem.classList.remove(\"d-none\");\n      githubUrlElem.classList.remove(\"d-none\");\n      return;\n    }\n    projectNameElem.innerText = projectName || \"Acessar\";\n    if (!projectUrl) {\n      projectUrlElem.classList.add(\"d-none\");\n    }\n    if (!githubUrl) {\n      githubUrlElem.classList.add(\"d-none\");\n    }\n    try {\n      projectUrlElem.setAttribute(\"href\", projectUrl);\n    } catch (error) {}\n    try {\n      githubUrlElem.setAttribute(\"href\", githubUrl);\n    } catch (error) {}\n    document.body.classList.add(\"modal-is-open\", \"modal-is-opening\");\n    modalLinks.setAttribute(\"open\", \"\");\n  };\n  useEffect(() => {\n    const savedTheme = localStorage.getItem(\"@savedTheme\");\n    if (savedTheme === \"dark\" || savedTheme === \"light\") {\n      document.documentElement.setAttribute(\"data-theme\", savedTheme);\n    }\n  }, []);\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"container mt-5\"\n  }, /*#__PURE__*/React.createElement(\"article\", {\n    className: \"mb-5 p-3 d-flex justify-content-center align-items-center m-0 border border-light border-opacity-10\"\n  }, /*#__PURE__*/React.createElement(\"h1\", {\n    className: \"m-0\"\n  }, \"Projetos\")), /*#__PURE__*/React.createElement(Projects, {\n    toggleModalLinks: toggleModalLinks\n  }), /*#__PURE__*/React.createElement(LinksModal, {\n    toggleModalLinks: toggleModalLinks\n  }), /*#__PURE__*/React.createElement(ThemeToggler, null)));\n}\nfunction GithubIcon({\n  className\n}) {\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: \"26px\",\n    height: \"26px\",\n    fill: \"currentColor\",\n    className: `bi bi-github ${className || \"\"}`,\n    viewBox: \"0 0 16 16\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"\n  }));\n}\nfunction SunIcon() {\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: \"30\",\n    height: \"30\",\n    fill: \"#ffc83f\",\n    className: \"bi bi-brightness-high-fill\",\n    viewBox: \"0 0 16 16\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z\"\n  }));\n}\nfunction MoonIcon() {\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: \"30\",\n    height: \"30\",\n    fill: \"#292933\",\n    className: \"bi bi-moon-stars-fill\",\n    viewBox: \"0 0 16 16\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z\"\n  }), /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z\"\n  }));\n}\nfunction LinkedinIcon() {\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: \"26px\",\n    height: \"26px\",\n    fill: \"currentColor\",\n    className: \"bi bi-linkedin\",\n    viewBox: \"0 0 16 16\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z\"\n  }));\n}\nfunction SiteIcon() {\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: \"22\",\n    height: \"22\",\n    fill: \"currentColor\",\n    className: \"bi bi-diagram-3-fill ms-2\",\n    style: {\n      marginRight: \"0.7em\"\n    },\n    viewBox: \"0 0 16 16\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    fillRule: \"evenodd\",\n    d: \"M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z\"\n  }));\n}\nfunction Nav() {\n  return /*#__PURE__*/React.createElement(\"nav\", {\n    className: \"mb-4 mb-md-0 border-light border-bottom border-opacity-10 d-flex justify-content-around py-1\"\n  }, /*#__PURE__*/React.createElement(\"ul\", null, /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(\"a\", {\n    href: \"https://github.com/nicolas-lima\",\n    className: \"link-light remove-focus-background\",\n    id: \"githubLink\",\n    target: \"_blank\",\n    \"aria-label\": \"Menu\"\n  }, /*#__PURE__*/React.createElement(GithubIcon, null)))), /*#__PURE__*/React.createElement(\"ul\", null, /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(\"strong\", {\n    className: \"fs-5\"\n  }, \"N\\xEDcolas Lima\"))), /*#__PURE__*/React.createElement(\"ul\", null, /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(\"a\", {\n    href: \"https://linkedin.com/in/n\\xEDcolaslima\",\n    className: \"link-info remove-focus-background\",\n    id: \"linkedinLink\",\n    target: \"_blank\",\n    \"aria-label\": \"Linkedin\"\n  }, /*#__PURE__*/React.createElement(LinkedinIcon, null)))));\n}\nfunction Projects({\n  toggleModalLinks\n}) {\n  const reactProjects = [{\n    fullName: \"Site do meu TCC ( Em Desenvolvimento )\",\n    name: \"Site do meu TCC\",\n    projectUrl: \"https://sitetccinfo.netlify.app/\",\n    githubUrl: \"https://github.com/Nicolas-Lima/site_tcc\"\n  }, {\n    fullName: \"Loja de produtos ( Em Desenvolvimento )\",\n    name: \"Loja de produtos\",\n    projectUrl: \"https://a-product-store.netlify.app/\",\n    githubUrl: \"https://github.com/Nicolas-Lima/product-store\"\n  }, {\n    fullName: \"Prime Flix\",\n    name: \"Prime Flix\",\n    projectUrl: \"https://rdmetas.000webhostapp.com/\",\n    githubUrl: \"https://github.com/Nicolas-Lima/Projetos-React-JS/tree/main/Prime%20Flix\"\n  }];\n  const javascriptProjects = [{\n    fullName: \"Clock App\",\n    name: \"Clock App\",\n    projectUrl: \"projetos/clock_app/index.html\",\n    githubUrl: \"https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Clock%20App\"\n  }, {\n    fullName: \"Primeira Game Engine\",\n    name: \"Primeira Game Engine\",\n    projectUrl: \"projetos/game_engine_1/index.html\",\n    githubUrl: \"https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Game%20Engine%201\"\n  }, {\n    fullName: \"Segunda Game Engine\",\n    name: \"Segunda Game Engine\",\n    projectUrl: \"projetos/game_engine_2/index.html\",\n    githubUrl: \"https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Game%20Engine%202\"\n  }, {\n    fullName: \"Jogo da velha\",\n    name: \"Jogo da velha\",\n    projectUrl: \"projetos/jogoVelha/index.html\",\n    githubUrl: \"https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Joguinho%20da%20velha\"\n  }, {\n    fullName: \"To-do List 1\",\n    name: \"To-do List 1\",\n    projectUrl: \"https://nicolas-listatarefas.herokuapp.com/\",\n    githubUrl: \"https://github.com/Nicolas-Lima/Projetos-JS/tree/main/To-do%20List%201\"\n  }, {\n    fullName: \"To-do List 2\",\n    name: \"To-do List 2\",\n    projectUrl: \"projetos/to-do-lists/To-do-List-2/index.html\",\n    githubUrl: \"https://github.com/Nicolas-Lima/Projetos-JS/tree/main/To-do%20List%202\"\n  }];\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"mb-3\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row mb-4\"\n  }, /*#__PURE__*/React.createElement(\"h1\", {\n    className: \"mb-4\"\n  }, \"React JS\"), reactProjects.map(project => {\n    return /*#__PURE__*/React.createElement(Project, {\n      projectFullname: project.fullName,\n      projectName: project.name,\n      projectUrl: project.projectUrl,\n      githubUrl: project.githubUrl,\n      toggleModalLinks: toggleModalLinks,\n      key: project.name\n    });\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row mb-4\"\n  }, /*#__PURE__*/React.createElement(\"h1\", {\n    className: \"mb-4\"\n  }, \"Javascript Vanilla\"), javascriptProjects.map(project => {\n    return /*#__PURE__*/React.createElement(Project, {\n      projectFullname: project.fullName,\n      projectName: project.name,\n      projectUrl: project.projectUrl,\n      githubUrl: project.githubUrl,\n      toggleModalLinks: toggleModalLinks,\n      key: project.name\n    });\n  })));\n}\nfunction Project({\n  projectFullname,\n  projectName,\n  projectUrl,\n  githubUrl = \"\",\n  toggleModalLinks\n}) {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col-sm-12 col-md-6 col-lg-4\"\n  }, /*#__PURE__*/React.createElement(\"article\", {\n    className: \"project\"\n  }, /*#__PURE__*/React.createElement(\"header\", {\n    className: \"text-center mb-5\"\n  }, projectFullname), /*#__PURE__*/React.createElement(\"button\", {\n    type: \"button\",\n    className: \"btn btn-outline-primary px-3 py-2 m-2\",\n    onClick: () => toggleModalLinks({\n      projectName,\n      projectUrl,\n      githubUrl\n    })\n  }, \"Acessar\")));\n}\nfunction LinksModal({\n  toggleModalLinks\n}) {\n  return /*#__PURE__*/React.createElement(\"dialog\", {\n    id: \"modal-links\",\n    className: \"p-3\"\n  }, /*#__PURE__*/React.createElement(\"article\", {\n    className: \"d-flex flex-column align-items-center\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    onClick: toggleModalLinks,\n    \"aria-label\": \"Close\",\n    className: \"close\"\n  }), /*#__PURE__*/React.createElement(\"h3\", {\n    id: \"projectName\"\n  }, \"Acessar\"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"d-flex flex-column align-items-center w-100 px-5 py-2\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    target: \"_blank\",\n    className: \"w-100 d-block text-decoration-none\",\n    id: \"projectUrl\"\n  }, /*#__PURE__*/React.createElement(\"button\", null, /*#__PURE__*/React.createElement(SiteIcon, null), /*#__PURE__*/React.createElement(\"span\", null, \"Site do projeto\"))), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"w-100 d-block text-decoration-none\",\n    id: \"githubUrl\",\n    target: \"_blank\"\n  }, /*#__PURE__*/React.createElement(\"button\", {\n    className: \"secondary\"\n  }, /*#__PURE__*/React.createElement(GithubIcon, {\n    className: \"mx-2\"\n  }), /*#__PURE__*/React.createElement(\"span\", null, \"Reposit\\xF3rio no Github\"))))));\n}\nfunction ThemeToggler() {\n  const [savedTheme, setSavedTheme] = useState(\"\");\n  useEffect(() => {\n    const savedTheme = localStorage.getItem(\"@savedTheme\") || \"dark\";\n    setSavedTheme(savedTheme);\n  }, []);\n  const toggleTheme = () => {\n    const htmlElement = document.documentElement;\n    const dataTheme = htmlElement.getAttribute(\"data-theme\");\n    htmlElement.setAttribute(\"data-theme\", dataTheme === \"dark\" ? \"light\" : \"dark\");\n    setSavedTheme(htmlElement.getAttribute(\"data-theme\"));\n    localStorage.setItem(\"@savedTheme\", htmlElement.getAttribute(\"data-theme\"));\n  };\n  return /*#__PURE__*/React.createElement(\"a\", {\n    className: \"shadow-none remove-focus-background rounded\",\n    id: \"themeToggler\",\n    onClick: toggleTheme,\n    target: \"_blank\",\n    \"aria-label\": \"theme toggle\"\n  }, savedTheme == \"dark\" ? /*#__PURE__*/React.createElement(SunIcon, null) : /*#__PURE__*/React.createElement(MoonIcon, null));\n}\n\n// Render the component to the DOM\nReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;