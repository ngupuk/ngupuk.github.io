var simplemde = new SimpleMDE({
  element: document.getElementById('edit'),
  spellChecker: false
})

const predict = document.getElementById('predict')
window.SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition
let finalTranscript = ''
let recognition = new window.SpeechRecognition()

recognition.interimResults = true
recognition.maxAlternatives = 10
recognition.continuous = true
recognition.lang = 'id-ID'

recognition.onresult = (event) => {
  let interimTranscript = ''
  for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
    let transcript = event.results[i][0].transcript
    if (event.results[i].isFinal) {
      const pos = simplemde.codemirror.getCursor()
      simplemde.codemirror.replaceRange(' ' + transcript, pos)
    } else {
      interimTranscript += transcript
    }
  }
  predict.innerText = interimTranscript
}

let isRecord = false
const rec = document.getElementById('rec')

recognition.onend = () => {
  isRecord = false
  rec.classList.remove('active')
}

recognition.onerror = () => {
  rec.classList.remove('active')
  isRecord = false
}

rec.addEventListener('click', () => {
  if (isRecord) {
    recognition.stop()
  } else {
    recognition.start()
    isRecord = true
    rec.classList.add('active')
  }
})


const dl = document.getElementById('dl')

dl.addEventListener('click', () => {
  const data = simplemde.value()
  const url = encodeURI(data)
  const a = document.createElement('a')
  a.href = 'data:text/md,' + url
  a.download = 'file.md'
  a.click()
  a.remove()
})