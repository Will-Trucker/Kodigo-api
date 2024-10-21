
# Bootcamp API

Este proyecto es una API básica para gestionar usuarios y bootcamps. Permite registrar, iniciar sesión y realizar operaciones CRUD sobre bootcamps.

## Requisitos

- Node.js (v14 o superior)
- npm o yarn

## Configuración del entorno

1. Clona este repositorio:

```bash
git clone https://github.com/usuario/Kodigo-api.git
```

2. Navega al directorio del proyecto:
```bash
 
cd nombre-repo
```

3. Instala las dependencias:
```bash
 
npm install
# o
yarn install
```

4. Inicia el servidor:
```bash
 
npm start
# o
yarn start
```
El servidor estará corriendo en http://localhost:5000.


# Documentación de Endpoints

Este documento describe los endpoints disponibles en la API para gestionar usuarios y bootcamps.

## - **Autenticación**

### Registro de nuevo usuario

- **URL****: `/register`
- **Metodo**: `POST`
- **Descripción****: Crea un nuevo usuario en el sistema.
- ** - ** Body ****:
  ```json
  {
    "username": "usuario",
    "password": "contraseña"
  }
- Respuestas:
201: Usuario registrado correctamente.
400: El usuario ya existe.

## **Inicio de sesión**
- **URL****: /login
- **Metodo**: POST
- **Descripción**: Permite a un usuario autenticarse.
- ** Body **:
```json
 
{
  "username": "usuario",
  "password": "contraseña"
}
```
- Respuestas:
200: Devuelve un token de Autenticación.
400: Credenciales inválidas.

## ** BOOTCAMPS **

## Obtener todos los bootcamps
- **URL**: /bootcamps/all
- **- **Metodo****: GET
- **Autenticación**: Bearer Token
- **Descripción**: Devuelve una lista de todos los bootcamps.
- Respuestas:
200: Devuelve un array de bootcamps.

## Crear un nuevo bootcamp
- **URL**: /bootcamps/create
- **- **Metodo****: POST
- **Autenticación**: Bearer Token
- **Descripción**: Crea un nuevo bootcamp.
 - ** Body **:
```json
{
  "name": "nombre",
  "description": "- **Descripción**",
  "technologies": ["tecnología1", "tecnología2"]
}
```
- Respuestas:
200: Bootcamp creado correctamente.
200: El bootcamp ya existe y se activo correctamente.

## Actualizar un bootcamp
- **URL**: /bootcamps/update/:id
- **Metodo**: PUT
- **Autenticación**: Bearer Token
- **Descripción**: Actualiza un bootcamp existente por su ID.
 - ** Body **:
```json
{
  "name": "nuevo nombre",
  "description": "nueva - **Descripción**",
  "technologies": ["nueva tecnología"]
}
```
- Respuestas:
200: Bootcamp actualizado correctamente.
404: Bootcamp no encontrado.

## Desactivar un bootcamp (Soft Delete)
- **URL**: /bootcamps/delete/:id
- **Metodo**: DELETE
- **Autenticación**: Bearer Token
- **Descripción**: Desactiva un bootcamp por su ID (no lo borra permanentemente).
- Respuestas:
200: Bootcamp desactivado correctamente.
404: Bootcamp no encontrado.
