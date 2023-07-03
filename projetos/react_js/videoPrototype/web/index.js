const { useState, useEffect, useCallback } = React;

const App = () => {
  const [maxSearchResults, setMaxSearchResults] = useState(10)
  const [channelName, setChannelName] = useState("")
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResultsState] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [availableDownloadedVideos, setAvailableDownloadedVideos] = useState([])
  const [downloadedVideosJSON, setDownloadedVideosJSON] = useState([])
  const [mainContent, setMainContent] = useState("youtubeSearch")
  const [currentMediaPlaying, setCurrentMediaPlaying] = useState("")
  const [ studySessionSeconds, setStudySessionSeconds ] = useState(0)
  const [ watchingTimeSeconds, setWatchingTimeSeconds ] = useState(0)
  const [ isAtStudySession, setIsAtStudySession ] = useState(true)
  const [ videosInfo, setVideosInfo] = useState({})
  const setSearchResults = searchResults => setSearchResultsState(JSON.parse(searchResults).videos);

  eel.expose(setSearchResults);

  const setAvailableDownloadedVideosState = availableDownloadedVideos => {

    setAvailableDownloadedVideos(availableDownloadedVideos)

  }

  eel.expose(setAvailableDownloadedVideosState)

  const startStudySession = useCallback(() => {

    setIsAtStudySession(true)

    const ONE_SECOND_IN_MILLISECONDS = 1000
    const ONE_HOUR_IN_SECONDS = 3600
    let studySessionSeconds = 0
    const studySessionInterval = setInterval(() => {

      studySessionSeconds++
      setStudySessionSeconds(studySessionSeconds)

      if(studySessionSeconds >= ONE_HOUR_IN_SECONDS) {

        setStudySessionSeconds(0)
        stopStudySession(studySessionInterval)
        
      }

    }, ONE_SECOND_IN_MILLISECONDS)

  })

  const stopStudySession = timerHandler => {

    console.log("Sessão de estudos finalizada!")
    setIsAtStudySession(false)
    clearInterval(timerHandler)
    startWatchingTime()

  }

  const startWatchingTime = () => {

    const ONE_SECOND_IN_MILLISECONDS = 1000
    const TEN_MINUTES_IN_SECONDS = 600
    
    let watchingTimeInSeconds  = 0
    
    const watchingTimeInterval = setInterval(() => {

      watchingTimeInSeconds++
      setWatchingTimeSeconds(watchingTimeInSeconds)

      if(watchingTimeInSeconds >= TEN_MINUTES_IN_SECONDS) {

        setWatchingTimeSeconds(0)
        stopWatchingTime(watchingTimeInterval)
        

      }

    }, ONE_SECOND_IN_MILLISECONDS)

  }

  const stopWatchingTime = timerHandler => {

    clearInterval(timerHandler)
    startStudySession()
    
  }

  const updateDownloadedVideosJSONState = () => {

    fetch("downloadedVideos.json")
      .then(response => response.json())
      .then(json => setDownloadedVideosJSON(json.downloadedFiles))
      .catch(error => console.log(error))

  }

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const closeOptions = () => {
    setShowOptions(false);
  };

  const searchOnYoutube = async() => {

    const searchInputIsEmpty = !searchInput.trim()
    const languageIsDifferentFromPortuguese  = await eel.languageIsDifferentFromPortuguese(searchInput)()
    if (!searchInputIsEmpty && languageIsDifferentFromPortuguese) {

      const config = {

        maxSearchResults

      }
      eel.youtubeSearch(searchInput, config);
    }

  };

  const handlePlay = event => {

    const eventTarget = event.target

    if (eventTarget == currentMediaPlaying) {

      return

    }

    else if (currentMediaPlaying) {

      currentMediaPlaying.pause()

    }

    setCurrentMediaPlaying(eventTarget)

  }

  const convertToLowerCaseAndRemoveSpaces = string => {

    return string.toLowerCase().replace(/\s/g, "")

  }

  const getMinutesAndSecondsFromSeconds = useCallback(totalSeconds => {

    let seconds = String(totalSeconds % 60).padStart(2, '0');
    let minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');

    const formattedTime = `${minutes}:${seconds}`
    return formattedTime 

  })

  const addVideoInfo = useCallback(videoId => {

    console.log(videoId)
    const newVideosInfos = Object.assign({}, videosInfo)
    console.log(newVideosInfos)
    newVideosInfos[videoId] = {
      "isDownloading": false,
      "isDownloaded": false
    }

    console.log(newVideosInfos)

    setVideosInfo(newVideosInfos)

    console.log(videosInfo)

  })

  useEffect(() => {

    updateDownloadedVideosJSONState()
    eel.updateAvailableDownloadedVideosInJavascript()
    
    startStudySession()

  }, [])

  useEffect(() => {
    if (showOptions) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showOptions]);

  return (
    <div className={`container-fluid ${showOptions ? "offcanvas-open" : ""}`}>
      {

        !isAtStudySession ?

          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3 order-md-1">
              <div className="sidebar">
                <ul className="nav flex-column mt-5">
                  <NavItem active={true} mb="mb-3" name="Pesquisar" setMainContent={setMainContent} contentName="youtubeSearch" />
                  <NavItem mb="mb-3" name="Vídeos baixados" setMainContent={setMainContent} contentName="downloadedVideos" />
                </ul>
              </div>
            </div>

            {/* Main content */}
            <div className="col-md-9 order-md-2">
              <div className="content p-2 p-md-4">

                {/* Watching Time Clock */}
                <div className="d-flex align-items-center ms-4 mt-4">
                  <SvgClock fill="white" scale={1.7} />
                  <h1 className="text-white ms-4 p-3 rounded">{ getMinutesAndSecondsFromSeconds(watchingTimeSeconds) }</h1>

                </div>

                {

                  mainContent == "youtubeSearch" &&

                  <SearchForYoutubeVideo searchInput={searchInput} setSearchInput={setSearchInput} toggleOptions={toggleOptions} channelName={channelName} setChannelName={setChannelName} showOptions={showOptions} closeOptions={closeOptions} maxSearchResults={maxSearchResults} setMaxSearchResults={setMaxSearchResults} searchOnYoutube={searchOnYoutube} searchResults={searchResults} updateDownloadedVideosJSONState={updateDownloadedVideosJSONState} convertToLowerCaseAndRemoveSpaces={convertToLowerCaseAndRemoveSpaces} handlePlay={handlePlay} addVideoInfo={addVideoInfo} videosInfo={ videosInfo } />

                }

                {

                  mainContent == "downloadedVideos" &&

                  <DownloadedVideos availableDownloadedVideos={availableDownloadedVideos} handlePlay={handlePlay} />

                }
              </div>

            </div>
          </div> :

          <div className="row">

            <div className="col-12 p-5">

                {/* Study Session Clock */}
                <div className="d-flex align-items-center ms-4 mb-4">
                  <SvgClock fill="white" scale={1.7} />
                  <h1 className="text-white ms-4">{ getMinutesAndSecondsFromSeconds(studySessionSeconds) }</h1>

                </div>

                <h1 className="text-danger mb-5">Study Time</h1>

                <h1 className="text-white mb-5">Colocar senha em partição e colocar esse app lá dentro.</h1>

                <h1 className="text-white mb-5">Ter vídeos baixados para ver em alguma hora do dia. ( Verificar condições por um objeto )</h1>

            </div>

          </div>

      }
    </div>
  );
};

// Render the component to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
