
$(document).ready(function(){
    // $('.slider').slider();

    $('#container-general').empty();
    $("#container-general").load('../views/home.html');

    $('#link-home').click(function (params) {
        
        $('#container-general').empty();
        $("#container-general").load('../views/home.html');
        

        $('.carousel').carousel({
            interval: 100
          })
          $('.carousel').carousel('cycle')
        // $('#container-general').css('width','100%');
        // $('#slider-bozha').show();


        // $('#about-us').hide();
        // $('#contact-us').hide();        
        // $('#coffee').hide();
        // $('#food').hide();
        // $('#drink').hide();
    })

    $('#link-about').click(function (params) {
        $('#container-general').empty();
        $("#container-general").load('../views/about.html');

        // $('#slider-bozha').hide();
        // $('#about-us').show();
        // $('#contact-us').hide();        
        // $('#coffee').hide();
        // $('#food').hide();
        // $('#drink').hide();
    });

    $('#link-contact').click(function (params) {
        $('#container-general').empty();
        $("#container-general").load('../views/contact.html');

        // $('#slider-bozha').hide();
        // $('#about-us').hide();
        // $('#contact-us').show();        
        // $('#coffee').hide();
        // $('#food').hide();
        // $('#drink').hide();
    });

    $('#link-coffee').click(function (params) {
        $('#container-general').empty();
        $("#container-general").load('../views/coffee.html');
        // $('#slider-bozha').hide();
        // $('#about-us').hide();
        // $('#contact-us').hide();        
        // $('#coffee').show();
        // $('#food').hide();
        // $('#drink').hide();
    });

    $('#link-food').click(function (params) {
        $('#container-general').empty();
        $("#container-general").load('../views/food.html');
        // $('#slider-bozha').hide();
        // $('#about-us').hide();
        // $('#contact-us').hide();        
        // $('#coffee').hide();
        // $('#food').show();
        // $('#drink').hide();
    });

    $('#link-drink').click(function (params) {
        $('#container-general').empty();
        $("#container-general").load('../views/drink.html');
        // $('#slider-bozha').hide();
        // $('#about-us').hide();
        // $('#contact-us').hide();        
        // $('#coffee').show();
        // $('#food').hide();
        // $('#drink').show();
    });   
    
    $('#link-gallery').click(function (params) {
        $('#container-general').empty();
        $("#container-general").load('../views/gallery.html');
    });    


    $('#right-menu li a').on('click', function(e){
        //e.preventDefault();
        $('li a.activo').removeClass('activo');
        $(this).addClass('activo');
    });
    $('#left-menu li a').on('click', function(e){
        //e.preventDefault();
        $('li a.activo').removeClass('activo');
        $(this).addClass('activo');
    });


    $('#link-es-home').click(function (params) {
        
        $('#container-general').empty();
        $("#container-general").load('../es/home.html');
        

        $('.carousel').carousel({
            interval: 100
          })
          $('.carousel').carousel('cycle')
        // $('#container-general').css('width','100%');
        // $('#slider-bozha').show();


        // $('#about-us').hide();
        // $('#contact-us').hide();        
        // $('#coffee').hide();
        // $('#food').hide();
        // $('#drink').hide();
    })

    $('#link-es-about').click(function (params) {
        $('#container-general').empty();
        $("#container-general").load('../es/about.html');

        // $('#slider-bozha').hide();
        // $('#about-us').show();
        // $('#contact-us').hide();        
        // $('#coffee').hide();
        // $('#food').hide();
        // $('#drink').hide();
    });

    $('#link-es-contact').click(function (params) {
        $('#container-general').empty();
        $("#container-general").load('../es/contact.html');

        // $('#slider-bozha').hide();
        // $('#about-us').hide();
        // $('#contact-us').show();        
        // $('#coffee').hide();
        // $('#food').hide();
        // $('#drink').hide();
    });

    $('#link-es-coffee').click(function (params) {
        $('#container-general').empty();
        $("#container-general").load('../es/coffee.html');
        // $('#slider-bozha').hide();
        // $('#about-us').hide();
        // $('#contact-us').hide();        
        // $('#coffee').show();
        // $('#food').hide();
        // $('#drink').hide();
    });

    $('#link-es-food').click(function (params) {
        $('#container-general').empty();
        $("#container-general").load('../es/food.html');
        // $('#slider-bozha').hide();
        // $('#about-us').hide();
        // $('#contact-us').hide();        
        // $('#coffee').hide();
        // $('#food').show();
        // $('#drink').hide();
    });

    $('#link-es-drink').click(function (params) {
        $('#container-general').empty();
        $("#container-general").load('../es/drink.html');
        // $('#slider-bozha').hide();
        // $('#about-us').hide();
        // $('#contact-us').hide();        
        // $('#coffee').show();
        // $('#food').hide();
        // $('#drink').show();
    });   
    
    $('#link-es-gallery').click(function (params) {
        $('#container-general').empty();
        $("#container-general").load('../es/gallery.html');
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
