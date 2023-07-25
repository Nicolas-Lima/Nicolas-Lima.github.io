(()=>{const{useState:e,useEffect:t,useCallback:a}=React;function l(){const e=({projectName:e,projectUrl:t,githubUrl:a})=>{const l=document.getElementById("modal-links"),c=l.querySelector("#projectName"),o=l.querySelector("#projectUrl"),n=l.querySelector("#githubUrl");if(l.hasAttribute("open"))return document.body.classList.remove("modal-is-open","modal-is-opening"),document.body.classList.add("modal-is-open","modal-is-closing"),l.removeAttribute("open",""),document.body.classList.remove("modal-is-open","modal-is-closing"),o.classList.remove("d-none"),void n.classList.remove("d-none");c.innerText=e||"Acessar",t||o.classList.add("d-none"),a||n.classList.add("d-none");try{o.setAttribute("href",t)}catch(e){}try{n.setAttribute("href",a)}catch(e){}document.body.classList.add("modal-is-open","modal-is-opening"),l.setAttribute("open","")};return t((()=>{const e=localStorage.getItem("@savedTheme");"dark"!==e&&"light"!==e||document.documentElement.setAttribute("data-theme",e)}),[]),React.createElement("div",null,React.createElement(c,null),React.createElement("div",{className:"container mt-5"},React.createElement("article",{className:"mb-5 p-3 d-flex justify-content-center align-items-center m-0 border border-light border-opacity-10"},React.createElement("h1",{className:"m-0"},"Projetos")),React.createElement(o,{toggleModalLinks:e}),React.createElement(r,{toggleModalLinks:e})))}function c(){const[a,l]=e("");return t((()=>{const e=localStorage.getItem("@savedTheme")||"dark";l(e)}),[]),React.createElement("nav",{className:"mb-4 mb-md-0 border-light border-bottom border-opacity-10 d-flex justify-content-around py-1"},React.createElement("ul",null,React.createElement("li",null,React.createElement("a",{href:"https://github.com/nicolas-lima",className:"link-light remove-focus-background",id:"githubLink",target:"_blank","aria-label":"Menu"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26px",height:"26px",fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16"},React.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))))),React.createElement("ul",null,React.createElement("li",null,React.createElement("strong",{className:"fs-5"},"Nícolas Lima"))),React.createElement("ul",null,React.createElement("li",null,React.createElement("a",{href:"https://linkedin.com/in/nícolaslima",className:"link-info remove-focus-background",id:"linkedinLink",target:"_blank","aria-label":"Linkedin"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26px",height:"26px",fill:"currentColor",className:"bi bi-linkedin",viewBox:"0 0 16 16"},React.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})))),React.createElement("li",null,React.createElement("a",{className:"link-light shadow-none bg-transparent remove-focus-background ms-2",id:"themeToggler",onClick:()=>{const e=document.documentElement,t=e.getAttribute("data-theme"),a=document.getElementById("themeToggler");e.setAttribute("data-theme","dark"==t?"light":"dark"),a.innerHTML="dark"===t?'<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#292933" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">\n  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>\n  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>\n</svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffc83f" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">\n  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>\n</svg>',localStorage.setItem("@savedTheme",e.getAttribute("data-theme"))},target:"_blank","aria-label":"theme toggle"},"dark"==a?React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",fill:"#ffc83f",class:"bi bi-brightness-high-fill",viewBox:"0 0 16 16"},React.createElement("path",{d:"M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"})):React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",fill:"#292933",class:"bi bi-moon-stars-fill",viewBox:"0 0 16 16"},React.createElement("path",{d:"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"}),React.createElement("path",{d:"M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"}))))))}function o({toggleModalLinks:e}){return React.createElement("div",{className:"mb-3"},React.createElement("div",{className:"row mb-4"},React.createElement("h1",{className:"mb-4"},"React JS"),[{fullName:"Site do meu TCC ( Em Desenvolvimento )",name:"Site do meu TCC",projectUrl:"https://sitetccinfo.netlify.app/",githubUrl:"https://github.com/Nicolas-Lima/site_tcc"},{fullName:"Loja de produtos ( Em Desenvolvimento )",name:"Loja de produtos",projectUrl:"https://a-product-store.netlify.app/",githubUrl:"https://github.com/Nicolas-Lima/product-store"},{fullName:"Prime Flix",name:"Prime Flix",projectUrl:"https://rdmetas.000webhostapp.com/",githubUrl:"https://github.com/Nicolas-Lima/Projetos-React-JS/tree/main/Prime%20Flix"}].map((t=>React.createElement(n,{projectFullname:t.fullName,projectName:t.name,projectUrl:t.projectUrl,githubUrl:t.githubUrl,toggleModalLinks:e,key:t.name})))),React.createElement("div",{className:"row mb-4"},React.createElement("h1",{className:"mb-4"},"Javascript Vanilla"),[{fullName:"Clock App",name:"Clock App",projectUrl:"projetos/clock_app/index.html",githubUrl:"https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Clock%20App"},{fullName:"Primeira Game Engine",name:"Primeira Game Engine",projectUrl:"projetos/game_engine_1/index.html",githubUrl:"https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Game%20Engine%201"},{fullName:"Segunda Game Engine",name:"Segunda Game Engine",projectUrl:"projetos/game_engine_2/index.html",githubUrl:"https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Game%20Engine%202"},{fullName:"Jogo da velha",name:"Jogo da velha",projectUrl:"projetos/jogoVelha/index.html",githubUrl:"https://github.com/Nicolas-Lima/Projetos-JS/tree/main/Joguinho%20da%20velha"},{fullName:"To-do List 1",name:"To-do List 1",projectUrl:"https://nicolas-listatarefas.herokuapp.com/",githubUrl:"https://github.com/Nicolas-Lima/Projetos-JS/tree/main/To-do%20List%201"},{fullName:"To-do List 2",name:"To-do List 2",projectUrl:"projetos/to-do-lists/To-do-List-2/index.html",githubUrl:"https://github.com/Nicolas-Lima/Projetos-JS/tree/main/To-do%20List%202"}].map((t=>React.createElement(n,{projectFullname:t.fullName,projectName:t.name,projectUrl:t.projectUrl,githubUrl:t.githubUrl,toggleModalLinks:e,key:t.name})))))}function n({projectFullname:e,projectName:t,projectUrl:a,githubUrl:l="",toggleModalLinks:c}){return React.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4"},React.createElement("article",{className:"project"},React.createElement("header",{className:"text-center mb-5"},e),React.createElement("button",{type:"button",className:"btn btn-outline-primary px-3 py-2 m-2",onClick:()=>c({projectName:t,projectUrl:a,githubUrl:l})},"Acessar")))}function r({toggleModalLinks:e}){return React.createElement("dialog",{id:"modal-links",className:"p-3"},React.createElement("article",{className:"d-flex flex-column align-items-center"},React.createElement("a",{onClick:e,"aria-label":"Close",className:"close"}),React.createElement("h3",{id:"projectName"},"Acessar"),React.createElement("div",{className:"d-flex flex-column align-items-center w-100 px-5 py-2"},React.createElement("a",{target:"_blank",className:"w-100 d-block text-decoration-none",id:"projectUrl"},React.createElement("button",null,React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",className:"bi bi-diagram-3-fill ms-2",style:{marginRight:"0.7em"},viewBox:"0 0 16 16"},React.createElement("path",{fillRule:"evenodd",d:"M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z"})),React.createElement("span",null,"Site do projeto"))),React.createElement("a",{className:"w-100 d-block text-decoration-none",id:"githubUrl",target:"_blank"},React.createElement("button",{className:"secondary"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",className:"bi bi-github mx-2",viewBox:"0 0 16 16"},React.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})),React.createElement("span",null,"Repositório no Github"))))))}ReactDOM.render(React.createElement(l,null),document.getElementById("root"))})();