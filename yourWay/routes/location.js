function obtener(){


}

function guardar(){



}


function getLocation() { 
    console.log("gola")

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

        var a1 = document.getElementById("latitude");
        a1.value = position.coords.latitude; 

        var a2 = document.getElementById("longitude");
        a2.value = position.coords.longitude; 

        var a3 = document.getElementById("username");
        //a3.value = username;

}