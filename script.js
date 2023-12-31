var cards = document.querySelectorAll('.card')
var colors = ['#ff0000', '#00ff00', '#0000ff'];


cards.forEach((card) => {
  card.style.backgroundColor = generateRandomNeutralColor()
})

function generateRandomNeutralColor() {
  const red = Math.floor(Math.random() * 100 + 128);
  const green = Math.floor(Math.random() * 100 + 128);
  const blue = Math.floor(Math.random() * 100 + 128);

  // Construct the CSS color string
  return `rgb(${red}, ${green}, ${blue})`;
}