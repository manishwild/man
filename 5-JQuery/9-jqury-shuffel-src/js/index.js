$(document).ready(function () {
    var Shuffle = window.Shuffle;
    var element = document.querySelector('.container')
    
    var shuffleInstance = new Shuffle(element, {
        itemSelector: '.content'
        
        
      }); 
      $('#btnpolitics').click(function (e) { 
        e.preventDefault();
        shuffleInstance.filter("Politic");
    });
    $('#btnsport').click(function (e) { 
        e.preventDefault();
        shuffleInstance.filter('Sport');
    });
      $('#btnall').click(function (e) { 
          e.preventDefault();
          shuffleInstance.filter(Shuffle.ALL_ITEMS);
      });
      
});