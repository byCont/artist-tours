$(document).ready(function(){
  var currentIndex = 0;
  var items = $('.carousel-item');
  var totalItems = items.length;

  function cycleItems() {
    var item = $('.carousel-item').eq(currentIndex);
    items.hide();
    item.css('display', 'block');
  }

  $('.carousel-control.prev').click(function() {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = totalItems - 1;
    }
    cycleItems();
  });

  $('.carousel-control.next').click(function() {
    currentIndex += 1;
    if (currentIndex > totalItems - 1) {
      currentIndex = 0;
    }
    cycleItems();
  });
});
