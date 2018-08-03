# proyecto1
@author: David Lemus
@email: dlemusg@eafit.edu.co

# Descripción de aplicación

Aplicacion en node js de geolocalizacion, la cual permite guardar la ubicacion constante de algunos puntos de mim rota desde el dispositivo movil que permita compartir la ubicación.


# 1. Analisis

## 1.1 Requisitos
  1. Obtener y guardar ubicación
  2. Consultar ruta en el mapa
  
## 1.2 Tecnologias
  - Lenguaje de programación: JavaScript
  - Entorno y Framework backend: NodeJS - Express
  - Framework frontend: Boostrap
  - Base de datos: MonngoDB
  - Web server: NodeJS
  
 # 2. Desarrollo
 
 # 3 Diseño
 ## 3.1 Modelo de datos
 User:

 {UserSchema: {username: String, password: String, email: String, name: String, date: Date }}
 
 Location:

{LocationSchema:{username: String, latitude: Number, longitude: Number, date: Date}}

## 3.2 Servicios web

  1. http://server/users/register

    Método: POST

    Descripción:  Crear Cuenta de usuario.

    Datos de entrada:

    user, password, username, email, date

  2. http://server/users/login

    Método: GET

    Descripción:  Auntentificación de usarios.

  3. http://server/users/location

    Método: POST

    Descripción:  Obterner y guardar ubicación

    Datos de entrada:

    username, latitud, longitud, date

  4. http://localhost:3000/index

    Método: GET

    Descripción:  Obterner ubicaciones de usuario



# Despligue en un Servidor Centos 7.x en el DCA

* [Desliegue en el DCA](deploy-on-DCA.md)



# Despligue con Docker

   * [Desliegue en docker](deploy-on-docker.md)

   