document.addEventListener('DOMContentLoaded', function()
{
    const quotes = document.querySelectorAll('.quote');
    let CurrentSound = null;

    quotes.forEach(quote => 
    {
        quote.addEventListener('click', function()
         {
          if(CurrentSound)
          {
            CurrentSound.pause();
          }
          CurrentSound = new Audio(quote.getAttribute('sound'))
          CurrentSound.play();
         })
         ;
    });

});