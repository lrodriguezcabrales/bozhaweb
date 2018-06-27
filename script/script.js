
$(document).ready(function(){
    // $('.slider').slider();

    $('#link-home').click(function (params) {
        $('#slider-bozha').show();
        $('#about-us').hide();
        $('#contact-us').hide();        
        $('#coffee').hide();
        $('#food').hide();
        $('#drink').hide();
    })

    $('#link-about').click(function (params) {
        $('#slider-bozha').hide();
        $('#about-us').show();
        $('#contact-us').hide();        
        $('#coffee').hide();
        $('#food').hide();
        $('#drink').hide();
    });

    $('#link-contact').click(function (params) {
        $('#slider-bozha').hide();
        $('#about-us').hide();
        $('#contact-us').show();        
        $('#coffee').hide();
        $('#food').hide();
        $('#drink').hide();
    });

    $('#link-coffee').click(function (params) {
        $('#slider-bozha').hide();
        $('#about-us').hide();
        $('#contact-us').hide();        
        $('#coffee').show();
        $('#food').hide();
        $('#drink').hide();
    });

    $('#link-food').click(function (params) {
        $('#slider-bozha').hide();
        $('#about-us').hide();
        $('#contact-us').hide();        
        $('#coffee').hide();
        $('#food').show();
        $('#drink').hide();
    });


    $('#link-drink').click(function (params) {
        $('#slider-bozha').hide();
        $('#about-us').hide();
        $('#contact-us').hide();        
        $('#coffee').show();
        $('#food').hide();
        $('#drink').show();
    });    

    $('#left-menu li a').on('click', function(e){
        //e.preventDefault();
        $('li a.activo').removeClass('activo');
        $(this).addClass('activo');
    });

});	

// Initialize and add the map
function initMap() {
    // The location of Uluru
    //10.426848, -75.546058
    var uluru = {
        lat: 10.426848, 
        lng: -75.546058
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 18, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru, 
        map: map,
        title: "Bozha Coffe Bar",
        
    });

    var contentString = '<div id="content">'+
        '<b>Bozha Coffee Bar</b><br/>'+
        'Barrio San Diego<br/>Calle de la Necesidad # 36 36 Local 2'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });

        marker.addListener('click', function() {
    infowindow.open(map, marker);
    });

    infowindow.open(map,marker);

}