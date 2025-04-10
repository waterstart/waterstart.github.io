document.addEventListener('DOMContentLoaded', function() {

    const CurrentMessage = document.getElementById('TickerObject');
    fetch('TickerText.txt')
    .then(Respose =>Respose.text())
    .then(InnerText =>{CurrentMessage.textContent = InnerText})
  });