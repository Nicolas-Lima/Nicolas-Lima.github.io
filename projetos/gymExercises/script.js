const workouts = {
    'nicolas': {
        workout1: {
            exercises: [
                {
                    id: 0,
                    name: 'Peck Deck',
                    videoName: 'peckDeck'
                },
                {
                    id: 1,
                    name: 'Cadeira abdutora',
                    videoName: 'abdutora'
                }
            ]
        },
        workout2: {
            exercises: [
                {
                    id: 0,
                    name: 'Cadeira abdutora',
                    videoName: 'abdutora'
                },
                {
                    id: 1,
                    name: 'Peitoral 2',
                    videoName: 'peckDeck'
                }
            ]
        }
    },
    'person2': {
        workout1: {
            exercises: [
                {
                    id: 0,
                    name: 'Peck Deck 3213',
                    videoName: 'peckDeck'
                },
                {
                    id: 1,
                    name: 'Leg Press 45 3213',
                    videoName: 'peckDeck'
                }
            ]
        },
    }
}

createExerciseBtns('workout1')  
changeExerciseVideo()

document.addEventListener('click', event => {
    const eventTarget = event.target
    if(event.target.classList.contains('workout') || event.target.classList.contains('person') ) 
    {
        toggleSelectedButton(eventTarget)
        let workoutId = eventTarget.id
        if(event.target.classList.contains('person')) {
            workoutId = 'workout1'
            const workoutBtn = document.querySelector(`#workouts > #${workoutId}`)
            workoutBtn.click()
        }
        cleanExercisesElem()
        createExerciseBtns(workoutId)
        changeExerciseVideo()
    }
    if(event.target.classList.contains('exercise') && !(event.target.classList.contains('selectedExercise'))) {
        toggleSelectedButton(eventTarget)
        changeExerciseVideo()
    }
    if(event.target.classList.contains('addExercise')) {
        addExerciseToWorkout()
    }
})

function createExerciseBtn(exercise) {
    const exerciseButton = document.createElement('button')
    exerciseButton.innerText = exercise.name
    exerciseButton.setAttribute('exerciseId', exercise.id)
    exerciseButton.classList.add('btn', 'mb-3', 'exercise')
    if(exercise.id == 0) {
        exerciseButton.classList.add('selectedExercise', 'btn-primary') 
    }
    else {
        exerciseButton.classList.add('btn-outline-primary') 
    }
    return exerciseButton
} 

function createExerciseBtns(workoutId) {
    try 
    {
        const personName = document.querySelector('#people > [checked]').id
        const workoutExercises = workouts[personName][workoutId].exercises
        workoutExercises.forEach(exercise => {
            const exerciseBtn = createExerciseBtn(exercise)
            addExerciseBtn(exerciseBtn)
        })
    }
    catch(error)
    {
        const exercisesElem = document.querySelector('#exercises')
        exercisesElem.innerHTML = '<h3 class="text-danger">Nenhum exercício encontrado!</h3>'
    }
}

function addExerciseBtn(exerciseBtn) {
    const exercisesElem = document.querySelector('#exercises')
    exercisesElem.appendChild(exerciseBtn)
} 

function cleanExercisesElem() {
    const exercisesElem = document.querySelector('#exercises')
    exercisesElem.innerHTML = ''
}

function toggleSelectedButton(eventTarget) {
    let currentSelectedBtn = eventTarget.parentElement.querySelector('[checked]')
    if(eventTarget.classList.contains('exercise')) {
        currentSelectedBtn = document.querySelector('#exercises .selectedExercise')
        currentSelectedBtn.classList.remove('selectedExercise')
        currentSelectedBtn.classList.replace('btn-primary', 'btn-outline-primary')
        eventTarget.classList.add('selectedExercise')
        eventTarget.classList.replace('btn-outline-primary', 'btn-primary')
        return
    }
    currentSelectedBtn.checked = false
    currentSelectedBtn.removeAttribute('checked')
    eventTarget.checked = true
    eventTarget.setAttribute('checked', '')
}

function changeExerciseVideo() {
    const videoContainerElem = document.querySelector('#videoContainer')
    const videoNameElem = videoContainerElem.querySelector('#videoName')
    const videoElem = videoContainerElem.querySelector('video')
    try
    {
        const { personName, workoutId, exerciseId } = {
            workoutId: document.querySelector('#workouts > [checked]').id,
            personName: document.querySelector('#people > [checked]').id,
            exerciseId: document.querySelector('#exercises > .selectedExercise').getAttribute('exerciseId')
        }
        const exerciseObj = workouts[personName][workoutId].exercises.filter(exercise => exercise.id == exerciseId)[0]
        const { videoName } = exerciseObj
        videoElem.classList.remove('d-none')
        videoNameElem.innerText = ` ( ${videoName} )`
        videoElem.setAttribute('src', `exercises/${videoName}.mp4`)
        const videoSrc = `exercises/${videoName}.mp4`
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', videoSrc)
        xhttp.send()
    }
    catch(error) 
    {
        videoElem.classList.add('d-none')
        videoNameElem.innerText = 'Nenhum vídeo encontrado!'
    }
}

function addExerciseToWorkout() {
    const workoutId = document.querySelector('#workouts > [checked]').id
    const personName = document.querySelector('#people > [checked]').id
    const exerciseName = prompt('Nome do exercício')
    const videoName = prompt('Nome do vídeo explicativo')
    const exerciseNameIsValid = ![exerciseName].every(letter => letter == '' || letter == ' ')
    const videoNameIsValid = ![videoName].every(letter => letter == '' || letter == ' ')
    if(exerciseNameIsValid && videoNameIsValid) {
        const lastExerciseOfSelectedWorkout = workouts[personName][workoutId].exercises.slice(-1)[0]
        console.log(lastExerciseOfSelectedWorkout)
        const exerciseObj = {
            id: parseInt(lastExerciseOfSelectedWorkout.id) + 1,
            name: exerciseName,
            videoName: videoName
        }
        workouts[personName][workoutId].exercises.push(exerciseObj)
        console.log(workouts)
        alert(`Exercício adicionado com sucesso! ( Copie e cole o objeto )`)
    }
    else {
        alert(`O nome do exercício ou do vídeo é inválido!

                Nome do exercício: ${exerciseName}
                Nome do vídeo: ${videoName}`)
    }
}