var ciclo;

    function getLocation() {
 
        if (navigator.geolocation) {
          navigator.geolocation.watchPosition(showPosition);
                  } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
        
    }

    function showPosition(position) {

        var x = document.getElementById("demo");
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;

        document.getElementById("latitude").value = position.coords.latitude;
        document.getElementById("longitude").value = position.coords.longitude;
     guardar();

    }

    function iniciar() {
        ciclo = setInterval(getLocation, 1000);
        document.getElementById("iniciar").disabled = true;
        document.getElementById("parar").disabled = false;
    }
    function parar() {
        clearInterval(ciclo);
        document.getElementById("iniciar").disabled = false;
        document.getElementById("parar").disabled = true;
    }

    function guardar() {
        
        
        document.form.latitude.value;
        document.form.longitude.value;
        document.form.submit();
       
    }
