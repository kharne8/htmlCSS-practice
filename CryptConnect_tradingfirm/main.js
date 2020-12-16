let map;

function initMap() {
  const loc = { lat: 40.706005, lng: -74.008827 };
  map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 15,
  });

  const marker = new google.maps.Marker({ position: loc, map: map });
}

$('#navbar a, .btn').on('click', function (e) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
