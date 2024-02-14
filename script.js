
// Modal witch JQuiery//
$(document).ready(function(){
  var currentIndex = 0;
  var items = $('.carousel-item');
  var totalItems = items.length;

  function cycleItems() {
    var item = $('.carousel-item').eq(currentIndex);
    // items.slideUp(400); 
    // item.slideDown(400);
    items.animate({width: 'hide'}, 400);
    item.animate({width: 'show'}, 400);
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

//Form: Data Capture//
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  var $lugar = document.getElementById('lugar').value;
  var $fecha = document.getElementById('fecha').value;
  var $doc = document.getElementById('doc').value;

  var modal = document.getElementById('myModal');
  modal.style.display = "block";
 
  var datosContainer = document.getElementById('datosModal');
  datosContainer.innerHTML = '';

  var lugarElement = document.createElement('p');
  lugarElement.textContent = 'Cuidad: ' + $lugar;
  datosContainer.appendChild(lugarElement);

  var fechaElement = document.createElement('p');
  fechaElement.textContent = 'Fecha: ' + $fecha;
  datosContainer.appendChild(fechaElement);

  var docElement = document.createElement('p');
  docElement.textContent = 'Documento: ' + $doc;
  datosContainer.appendChild(docElement);
});

//Close Modal//
document.getElementsByClassName('close')[0].addEventListener('click', function() {
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
});
