# Person System

Este es un sistema para la evaluación propuesta para ver las habilidades que presenta el candidato
El sistema está hecho en diversas tecnologías como son:

- [node.js], como BanckEnd
- [Express] como framework de nodejs
- [AngularJS], como FrontEnd
- Mysql, como base de datos´
- Docker
- NGinx
## Observaciones

- Se trata de implementar los test unitarios, no se alcanza a realizar debido a la falta de tiempo..

Se crea un backend con node js usando expres, conectado directamente con Mysql. Estas dos instancias se montan a través de una imagen dentro de un contenedor en Docker, comunicandonsen a través de un proxy inverso.
Se usa Angular para el frontend, comunicandose directamente con Node para las peticiones de las rutas expuestas

## Installation

Descarcar primero los dos repositorios que se encontraran en lñas siguientes URLs 
- [BackEnd](https://github.com/PEscobar6/programming-skills) acá se encontrará el repo para la configuración del backend y los archivos para levantar el contenedor de Docker.
- [FrontEnd](https://github.com/PEscobar6/programmin-skills-angular) acá se encontrará el repositorio para el frontend

Install the dependencies and devDependencies and start the server.

### Sólo para el backend
```sh
cd programming-skills | cd programming-skills
npm i
docker-compose build
docker-compose up
```

### Sólo para el frontend

```sh
cd programming-skills | cd programming-skills
npm i
```
##### Running unit tests frontend

Correr el comando `ng test` para ejecutar los test vía [Karma](https://karma-runner.github.io).