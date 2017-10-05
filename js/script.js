// Code goes here


$( document ).ready(function() {

  function moveL(){
    var leftPos = $('.div-master').scrollLeft();   
      $(".div-master").animate({
          scrollLeft: leftPos - 162
      }, 800);
  }

  function moveR(){
    var leftPos = $('.div-master').scrollLeft();
      $(".div-master").animate({
          scrollLeft: leftPos + 162
      }, 800);
  }

  $('.before').on('click', function(){
    moveL();
  });
  $('.after').on('click', function(){
    moveR()
  });

  function showImages(){
    $(".item-c img").each(function(index) {
      var times = (index*100);
      setTimeout(function(){ $(".item-c img").eq(index).addClass("show-it"); }, times);
    });
  }

  setTimeout(function(){
    showImages();
  },1000);
  
  
  
  
});
