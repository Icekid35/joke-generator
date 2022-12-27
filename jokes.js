const generateBtn = document.querySelector(".generate")
const jokeEle = document.querySelector(".joke")
const emojiEle = document.querySelector(".emoji")
const emojis = ["😅", "😂", "🤣", "😝", "😬", "🤯", "😹", "😸", "🙀", "🙊", "🙉", "🙈"]
let randomjokeUrl = `https://v2.jokeapi.dev/joke/Programming?type=twopart`
generateBtn.onclick = regenerate
async function regenerate() {
  const randomEmoji = emojis[Math.floor((emojis.length - 1) * Math.random())]
  const text = await fetch(randomjokeUrl)
  const {
    error,
    setup,
    delivery
  } = await text.json()
  if (error) return alert("unexpected error occured")
  jokeEle.innerHTML = `

					<div class="question" >
${setup}
</div>
					<div class="answer" >
${delivery}
</div>
`
  emojiEle.innerText = randomEmoji
}