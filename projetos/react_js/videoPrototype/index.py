import eel

eel.init("web")

def fileExists(fileSrc):
    return os.path.exists(fileSrc)

def getDataJson():
    with open('./web/downloadedVideos.json') as file:
        data = json.load(file)
    return data

def getDownloadedVideosJSON():
    dataJson = getDataJson()
    return dataJson["downloadedFiles"]

def getCurrentFileID():
    dataJson = getDataJson()
    return dataJson["currentFileID"]

@eel.expose
def updateAvailableDownloadedVideosInJavascript():
    availableDownloadedVideos = []
    downloadedVideos = getDownloadedVideosJSON()
    for downloadedVideo in downloadedVideos:
        id = downloadedVideo["id"]
        extension = downloadedVideo["extension"]
        videoSrc = f"web/downloadedVideos/file-{id}.{extension}"
        if fileExists(videoSrc):
            availableDownloadedVideos.append(downloadedVideo)
    
    eel.setAvailableDownloadedVideosState(availableDownloadedVideos)

def updateDownloadedVideosJSON(newDownloadedVideo, fileID):
    currentDownloadedFilesObject = getDownloadedVideosJSON()
    currentDownloadedFilesObject.append(newDownloadedVideo)

    newJSON = {
        "downloadedFiles": currentDownloadedFilesObject,
        "currentFileID": fileID
    }

    with open('./web/downloadedVideos.json', 'w') as file:
        # Escreve os dados no arquivo JSON
        json.dump(newJSON, file, indent=2)

@eel.expose
def youtubeSearch(search, option):
    canPlay = True

    if canPlay:
        maxSearchResults = int(option["maxSearchResults"])
        searchResults = YoutubeSearch(search, max_results=maxSearchResults).to_dict()

        englishResults = {
            "videos": []
        }

        for result in searchResults:
            videoTitle = result['title']
            videoLanguageIsEnglish = detect(videoTitle) == "en"
            if videoLanguageIsEnglish:
               englishResults["videos"].append(result)

        eel.setSearchResults(json.dumps(englishResults))

@eel.expose
def downloadYoutubeVideo(url, fileTitle, output_format = "mp4"):

    outputFormatEqualsMp3 = output_format == "mp3"
    # Defina a codificação da saída do console para UTF-8
    sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='utf-8', line_buffering=True)
    sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding='utf-8', line_buffering=True)

    fileID = getCurrentFileID() + 1
    fileName = f"file-{fileID}"

    optionsFormat = "best[height<=720]"
    if(outputFormatEqualsMp3):
        optionsFormat = "best[height<=360][ext=mp4]"
        fileExtension = "mp3"

    # Opções de download
    options = {
        'format': optionsFormat,
        'outtmpl': './web/downloadedVideos/{}.%(ext)s'.format(fileName),
    }

    # Função de gancho de progresso
    def progress_hook(status):
        if status['status'] == 'downloading':
            percentage = status['_percent_str']
            eel.setDownloadingPercentageState(percentage)

        if status['status'] == "finished":
            print("\n\n", status["status"] + "\n\n")
            if(output_format == "mp3"):
                eel.setDownloadingPercentageState("100%")
                extractAudioFromMp4File(fileName)

            else:
                eel.setVideoAsDownloaded("true")
            
    # Crie um objeto YoutubeDL com as opções
    ydl = yt_dlp.YoutubeDL(options)

    # Adicione o gancho de progresso
    ydl.add_progress_hook(progress_hook)

    ydl.download([url])

    # Obtenha a extensão do arquivo baixado
    info_dict = ydl.extract_info(url, download=False)
    filename = ydl.prepare_filename(info_dict)

    if(output_format != "mp3"):
        fileExtension = filename.split('.')[-1]

    channel = info_dict.get("uploader")
    fileSrc = f"./downloadedVideos/file-{fileID}.{fileExtension}"

    newDownloadedVideo = {
        "title": fileTitle, 
        "channel": channel,
        "id": fileID,
        "src": f"./downloadedVideos/file-{fileID}.{fileExtension}",
        "extension": fileExtension,
        "url": url
    }

    updateDownloadedVideosJSON(newDownloadedVideo, fileID)
    eel.setFileSrcState(fileSrc)
    updateAvailableDownloadedVideosInJavascript()

def extractAudioFromMp4File(fileName):
    inputFile = f"./web/downloadedVideos/{fileName}.mp4"
    outputFile = f"./web/downloadedVideos/{fileName}.mp3"

    command = ['ffmpeg', '-i', inputFile, '-vn', '-acodec', 'libmp3lame', '-q:a', '2', outputFile]

    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    
    while True:
        output = process.stdout.readline()
        if process.poll() is not None:
            break
        if output:
            # Aqui você pode fazer algo com a saída do processo, se necessário
            print(output.strip())

    if process.returncode == 0:
        print("Extração de áudio concluída com sucesso!")
        eel.setVideoAsDownloaded("true")
        deleteDownloadedVideo(fileName)

    else:
        print("Ocorreu um erro durante a extração de áudio.")

def deleteDownloadedVideo(fileName):
    directory = "./web/downloadedVideos"
    file_path = f"{directory}/{fileName}.mp4"
    os.remove(file_path)

def get_date_time():
    date_today = datetime.today()
    date_now = datetime.now()
    day = date_today.day
    month = date_today.month    
    year = date_today.year
    hours = date_now.hour
    minutes = date_now.minute

    date_time = {
        'day': day,
        'month': month,
        'year': year,
        'hours': hours,
        'minutes': minutes
    }

    return date_time

@eel.expose
def languageIsDifferentFromPortuguese(text):
    languageIsDifferentFromPortuguese = detect(text) != "pt"
    return languageIsDifferentFromPortuguese

