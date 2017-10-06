// Code goes here

$(document).ready(function() {

  function Arrows(){
    function moveL(){
      var leftPos = $('.div-master').scrollLeft();   
        $(".div-master").animate({
            scrollLeft: leftPos - 500
        }, 800);
    }
    
    function moveR(){
      var leftPos = $('.div-master').scrollLeft();
        $(".div-master").animate({
            scrollLeft: leftPos + 500
        }, 800);
    }

    $('.before').on('click', function(){
      moveL();
    });
    $('.after').on('click', function(){
      moveR();
    });
  }

  function showImages(){
    $(".item-c img").each(function(index) {
      var times = (index*100);
      setTimeout(function(){ $(".item-c img").eq(index).addClass("show-it"); }, times);
    });
    
  }
  function showList(){
    $(".item-list img").each(function(index) {
      var times = (index*120);
      setTimeout(function(){ $(".item-list img").eq(index).addClass("show-it"); }, times);
    });
  }
  setTimeout(function(){
    showImages();
    Arrows();
  },1000);
  setTimeout(function(){
    showList();
    Arrows();
  },2000);
  
});
