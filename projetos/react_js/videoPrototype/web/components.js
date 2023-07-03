function YoutubeVideo(props) {

  const [videoIsDownloading, setVideoIsDownloading] = useState(false)
  const [videoIsDownloaded, setVideoIsDownloaded] = useState(false)

  const [fileSrc, setFileSrc] = useState("")
  const result = props.result

  const aaa = () => {
   
    setVideoIsDownloaded("true")
    setVideoIsDownloading("false")

  }


  const setVideoAsDownloaded = value => {
    if (value == "true") {
      aaa()
    
      props.updateDownloadedVideosJSONState()
    }
  }
  eel.expose(setVideoAsDownloaded)

  const setFileSrcState = src => setFileSrc(src)
  eel.expose(setFileSrcState)

  return (

    <div className="card text-dark bg-dark border-3 mx-sm-2 mx-md-0 col-md-12 col-lg-9 mb-5" style={{ backgroundColor: '#152B3C', borderColor: '#4B0082' }}>

      {

        (!videoIsDownloading && !videoIsDownloaded) &&
        <VideoInfo result={result} setVideoIsDownloading={setVideoIsDownloading} setVideoIsDownloaded={setVideoIsDownloaded} />

      }

      {

        videoIsDownloading &&
        <VideoDownloadingAnimation result={result} fileSrc={fileSrc} />

      }

      {

        videoIsDownloaded &&
        <DownloadedVideo result={result} fileSrc={fileSrc} handlePlay={ props.handlePlay } />

      }
    </div>

  )

}

function NavItem(props) {

  return (

    <li className="nav-item px-1 px-sm-5 px-md-0 px-md-3">
      <a className={`nav-link ${props.active ? "active" : ""} btn btn-custom ${props.mb}`} href={props.href || "#"} onClick={e => props.setMainContent(e?.target?.attributes.contentName.value)} contentname={props.contentName}>{props.name}</a>
    </li>

  )

}

function VideoInfo(props) {

  const result = props.result
  const videoURL = `https://youtube.com${result.url_suffix}`
  const videoThumbnail = result.thumbnails[1] || result.thumbnails[0]

  const downloadYoutubeVideo = fileFormat => {

    console.log("VER PELO 'FONTES' DO CONSOLE")
    console.log("Depurar código React JS")

    console.log("\n\nCurl Embrapa")

    const fileTitle = result.title
    eel.downloadYoutubeVideo(videoURL, fileTitle, fileFormat)
    props.setVideoIsDownloading(true)

  }

  return (

    <div>

      <img src={videoThumbnail} className="card-img-top" alt="Thumbnail"></img>
      <hr className="border border-1 opacity-50 m-0 hr-color" />
      <div className="card-body">
        <h4 className="card-title mt-2 mb-4 fw-bold" style={{ color: '#6da9d8' }}>Canal: {result.channel}</h4>
        <h5 className="card-subtitle mb-3" style={{ color: '#6da9d8' }}><span className="fw-bold">Título:</span> {result.title}</h5>
        <h5 className="card-text mb-3" style={{ color: '#6da9d8' }}><span className="fw-bold">Tempo de publicação:</span> {result.publish_time}</h5>
        <h5 className="card-text mb-3" style={{ color: '#6da9d8' }}><span className="fw-bold">Duração</span> {result.duration}</h5>
        <h5 className="card-text mb-4" style={{ color: '#6da9d8' }}><span className="fw-bold">Visualizações:</span> {result.views}</h5>

        <div className="downloadOptions mb-3 d-flex">
          <button className="btn d-flex justify-content-center align-items-center downloadMp3" onClick={() => downloadYoutubeVideo("mp3")} style={{ backgroundColor: '#ecaa47', color: '#140014' }}>
            Baixar
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-headphones ms-2" viewBox="0 0 16 16">
              <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z" />
            </svg>
          </button>

          <button className="btn d-flex justify-content-center align-items-center downloadMp4 ms-3" onClick={() => downloadYoutubeVideo("mp4")} style={{ backgroundColor: '#0c6697', color: '#FFFFFF' }}>
            Baixar
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-camera-video-fill ms-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
            </svg>
          </button>
        </div>

      </div>
    </div>

  )

}

function VideoDownloadingAnimation(props) {

  const [downloadingPercentage, setDownloadingPercentage] = useState("0%")
  const setDownloadingPercentageState = downloadingPercentage => setDownloadingPercentage(downloadingPercentage)

  eel.expose(setDownloadingPercentageState)

  function removeColorFormattingFromPython(text) {
    // Regex para remover códigos de escape ANSI
    const ansiRegex = /\u001b\[\d+(;\d+)*m/g;
    return text.replace(ansiRegex, '');
  }

  const result = props.result
  const videoThumbnail = result.thumbnails[1] || result.thumbnails[0]

  const is100Percent = removeColorFormattingFromPython(downloadingPercentage) == "100%"

  return (

    <div>
      <img src={videoThumbnail} className="card-img-top" alt="Thumbnail"></img>
      <div className="card-body" style={{ color: '#6da9d8' }}>
        <h4 className="mt-4 mb-5">{result.title}</h4>
        <div className="progress mb-4 w-100 w-md-75" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
          <div className={`progress-bar progress-bar-striped progress-bar-animated ${is100Percent ? "bg-warning" : "bg-primary"} `} style={{ width: removeColorFormattingFromPython(downloadingPercentage) }}></div>
        </div>

      </div>
    </div>

  )

}

function DownloadedVideo(props) {

  const videoData = props.result
  const isMp3 = props.fileSrc.includes(".mp3")

  return (

    <div className="card-body" style={{ color: '#6da9d8' }}>
      <div className={` ${!isMp3 && "embed-responsive embed-responsive-16by9"} d-flex align-items-center justify-content-center`}>
        {

          !isMp3 ?

            <video className="embed-responsive-item img-fluid rounded p-0 m-0" src={props.fileSrc} controls onPlay={ props.handlePlay }></video> :

            <audio className="p-0 m-0 mt-4 mb-3" src={props.fileSrc} controls onPlay={ props.handlePlay }></audio>

        }
      </div>
      <h4 className="card-title mt-4 mb-4 fw-bold" style={{ color: '#6da9d8' }}>Canal: {videoData.channel}</h4>
      <h5 className="card-subtitle mb-3" style={{ color: '#6da9d8' }}><span className="fw-bold">Título:</span> {videoData.title}</h5>
    </div>

  )

}

function DownloadedVideos(props) {

  return (

    <div className="d-flex flex-column align-items-center">

      <h1 className="text-white mt-4 mb-5">Vídeos baixados</h1>
      {

        props.availableDownloadedVideos.map(video => {

          const isMp3 = video.extension == "mp3"

          return (

            <div className="card text-dark bg-dark border-3 mx-sm-2 mx-md-0 col-md-12 col-lg-9 mb-5" style={{ backgroundColor: '#152B3C', borderColor: '#4B0082', color: '#6da9d8' }}>
              <div className="card-body">

                <div className={` ${!isMp3 && "embed-responsive embed-responsive-16by9"} d-flex align-items-center justify-content-center`}>
                  {

                    !isMp3 ?

                      <video className="embed-responsive-item img-fluid rounded p-0 m-0" src={video.src} controls onPlay={ props.handlePlay }></video> :

                      <audio className="p-0 m-0 mt-4 mb-3" src={video.src} controls onPlay={ props.handlePlay }></audio>

                  }


                </div>
                <h4 className="card-title mt-4 mb-4 fw-bold" style={{ color: '#6da9d8' }}>Canal: {video.channel}</h4>
                <h5 className="card-subtitle mb-3" style={{ color: '#6da9d8' }}><span className="fw-bold">Título:</span> {video.title}</h5>

              </div>
            </div>

          )

        })

      }

    </div>

  )

}

function SearchForYoutubeVideo(props) {

  const { searchInput, setSearchInput, toggleOptions, channelName, setChannelName, showOptions, closeOptions, maxSearchResults, setMaxSearchResults, searchOnYoutube, searchResults, updateDownloadedVideosJSONState, convertToLowerCaseAndRemoveSpaces } = props

  return (

    <div>
      <h1 className="text-secondary mt-4 mb-4 mb-md-4 mx-3">Pesquisar</h1>

      <h1 className="text-danger mt-4 mb-4 mb-md-4 mx-3">Tirar a opção de pesquisar durante o dia. BAIXAR OS VÍDEOS ANTERIORMENTE</h1>

      <h1 className="text-danger mt-4 mb-4 mb-md-4 mx-3">CRIPTOGRAFAR ARQUIVO PYTHON :
        with open("aaaa.py", "w") as file:
        file.write("print('ola world')")</h1>

      <div className="row mb-5">
        <div className="col mx-3">
          <div className="search-form d-flex align-items-center">
            <input
              type="text"
              className="form-control input-field me-4"
              id="searchInput"
              onInput={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              placeholder="Digite sua busca..."
            />
            <div className="input-group-append">
              <button
                className="btn configBtn border-0 shadow-none"
                onClick={toggleOptions}
                style={{ backgroundColor: "#2f906a", color: "white" }}>
                Configuração
              </button>
            </div>
          </div>
          <div className="ms-1 d-flex">
            <div className="my-4">
              <label htmlFor="channelName" className="form-label text-white f-5 mb-3">Nome do canal <span className="text-secondary">(opcional)</span></label>
              <input
                type="text"
                className="form-control"
                id="channelName"
                placeholder="Digite o nome do canal"
                value={channelName}
                onInput={e => setChannelName(e.target.value)}
              />
            </div>
          </div>
          <div className={`offcanvas left rounded-end p-4 ${showOptions ? 'show' : ''}`}>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-secondary">Configurações</h5>
              <button type="button" className="btn-close border-0 shadow-none" onClick={closeOptions} data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div className="mb-4">
                <label htmlFor="maxSearchResults" className="form-label f-5 mb-3">Quantidade máxima de resultados por pesquisa</label>
                <input
                  type="number"
                  className="form-control"
                  id="maxSearchResults"
                  placeholder="Digite o número máximo de resultados por pesquisa"
                  value={maxSearchResults}
                  onChange={e => setMaxSearchResults(e.target.value)}
                  min={1}
                />
              </div>
            </div>

          </div>
          <button className="btn mt-4" onClick={searchOnYoutube} style={{ backgroundColor: "#2f906a", color: "white" }}>
            Pesquisar
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">

          <div className="d-flex flex-column align-items-center">

            {searchResults.map(result => {

              const resultChannel = convertToLowerCaseAndRemoveSpaces(result.channel)
              const _channelName = convertToLowerCaseAndRemoveSpaces(channelName)
              const channelNameIsEmpty = !_channelName.trim()
              const channelNameMatch = resultChannel.includes(_channelName) && !channelNameIsEmpty
              if (channelNameIsEmpty || channelNameMatch) {

                return <YoutubeVideo result={result} key={result.id} updateDownloadedVideosJSONState={updateDownloadedVideosJSONState} handlePlay={ props.handlePlay } addVideoInfo={props.addVideoInfo} videosInfo={ props.videosInfo } />

              }
            })}
          </div>



        </div>
      </div>
    </div>

  )


}

function SvgClock(props) {

  const { fill = "currentColor", scale = 1 } = props

  return (

    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={fill} className="bi bi-clock" viewBox="0 0 16 16" style={{ transform: `scale(${scale})` }}>
      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
    </svg>

  )

}