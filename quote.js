document.addEventListener('DOMContentLoaded', function()
{
    const quotes = document.querySelectorAll('.quote');

    quotes.forEach(quote => 
    {
        quote.addEventListener('click', function()
         {
           new Audio(quote.getAttribute('sound')).play();
         })
         ;
    });

});