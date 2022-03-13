function Game () {
    const html = document.getElementsByTagName("html")[0]
    Object.assign(html.style, {width: "100%", height: "100%"})

    const body = document.getElementsByTagName("body")[0]
    Object.assign(body.style, {width: "100%", height: "100%", margin: "0px"})

    function getComputedStyleNumber(element, attribute) {
        return Number(getComputedStyle(element)[attribute].split("px")[0])
    }

    let screen = document.getElementById("gameArea")

    this.characters = []
    this.objects = []

    this.gameArea = (width, height, edgeDistance) => {
        let unitMeasurement = ""
        
        if (width.includes("px")) unitMeasurement = "px"
    
        else if (width.includes("%")) unitMeasurement = "%"
        
        edgeDistance = edgeDistance + "px"

        const gameArea = document.createElement("div")
        gameArea.id = "gameArea"

        const gameAreaStyle = {width, height, position: "relative", padding: edgeDistance, boxSizing: "border-box", overflow: "hidden"}

        Object.assign(gameArea.style, gameAreaStyle)

        body.append(gameArea)
        screen = document.getElementById("gameArea")
    }

    this.gameStyle = function(ObjectStyles = {}) {
        try {
            Object.assign(screen.style, ObjectStyles)
        } 
        catch (err) {
            throw err
        }  
    }

    this.character = (width, height, characterName) => {
        const character = document.createElement("div")
        character.id = characterName

        const CharacterStyle = {width: width, height: height, position: "absolute"}

        Object.assign(character.style, CharacterStyle)

        screen.append(character)

        this.characters.push(character)

        return document.getElementById(character.id)
    }

    this.characterStyle = function(characterID, characterStyles = {}) {
        const character = document.getElementById(characterID) || characterID

        try {
            Object.assign(character.style, characterStyles)
        } 
        catch (err) {
            throw err
        }  
    }

    this.characterMovement = (characterName, velocity) => {
        const character = document.getElementById(characterName)
  
        onkeydown = (event) => {
            const key = event.key.toLowerCase()
            const edgeDistance = getComputedStyleNumber(screen, "padding")

            const characterComputedStyles = {
                PositionTop: getComputedStyleNumber(character, "top"),
                PositionLeft: getComputedStyleNumber(character, "left"),
                Height: getComputedStyleNumber(character, "height"),
                Width: getComputedStyleNumber(character, "width")
            }

            const gameAreaComputedStyles = {
                Height: getComputedStyleNumber(screen, "height"),
                Width: getComputedStyleNumber(screen, "width"),

                GameAreaHeightLessCharacterHeight() {
                    return this.Height - characterComputedStyles.Height
                },

                GameAreaWidthLessCharacterWidth() {
                    return this.Width - characterComputedStyles.Width
                }
            }
            
            if (key == "w" || key == "arrowup") {
                if (characterComputedStyles.PositionTop - velocity <= edgeDistance) {
                    character.style.top = edgeDistance + "px"
                }
            
                else if (characterComputedStyles.PositionTop - velocity > edgeDistance) {
                    character.style.top = characterComputedStyles.PositionTop - velocity + "px"
                }
            }

            else if (key == "s" || key == "arrowdown") {
                if (characterComputedStyles.PositionTop + velocity >= gameAreaComputedStyles.GameAreaHeightLessCharacterHeight() - edgeDistance) {
                    character.style.top = gameAreaComputedStyles.GameAreaHeightLessCharacterHeight() - edgeDistance + "px"
                }
            
                else if (characterComputedStyles.PositionTop + velocity < gameAreaComputedStyles.GameAreaHeightLessCharacterHeight() - edgeDistance) {
                    character.style.top = characterComputedStyles.PositionTop + velocity + "px"
                }
            }

            else if (key == "a" || key == "arrowleft") {
                if (characterComputedStyles.PositionLeft - velocity <= edgeDistance) {
                    character.style.left = edgeDistance + "px"
                }
            
                else if (characterComputedStyles.PositionLeft - velocity > edgeDistance) {
                    character.style.left = characterComputedStyles.PositionLeft - velocity + "px"
                }
            }

            else if (key == "d" || key == "arrowright") {
                if (characterComputedStyles.PositionLeft + velocity >= gameAreaComputedStyles.GameAreaWidthLessCharacterWidth() - edgeDistance) {
                    character.style.left = gameAreaComputedStyles.GameAreaWidthLessCharacterWidth() - edgeDistance + "px"
                }
            
                else if (characterComputedStyles.PositionLeft + velocity < gameAreaComputedStyles.GameAreaWidthLessCharacterWidth() - edgeDistance) {
                    character.style.left = characterComputedStyles.PositionLeft + velocity + "px"
                }
            }

            const element1 = document.getElementById("element1")
            // Lado esquerdo
            // console.log(getComputedStyleNumber(character, "left") + characterComputedStyles.Width >= 300)


            // Lado direito
                                                                                    // Element.left + Element.width

            console.log(getComputedStyleNumber(character, "left") + characterComputedStyles.Width >= getComputedStyleNumber(element1, "left") + getComputedStyleNumber(element1, "width") + characterComputedStyles.Width)
        }
    } 

    this.teste = (width, height, top, left, elementName) => {
        const element = document.createElement("div")
        element.id = elementName
        
        Object.assign(element.style, {width, height, top, left, backgroundColor: "darkblue", position: "absolute", zIndex: "1"})

        screen.append(element)
    }
}  
    