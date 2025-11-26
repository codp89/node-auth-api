# API de Autenticación con JWT – Node.js + Express + MongoDB

API REST de autenticación desarrollada con **Node.js**, **Express**, **MongoDB (Mongoose)** y **JWT**.  
Permite registrar usuarios, iniciar sesión y acceder a rutas protegidas mediante tokens JWT.

Ideal para usar como base de sistemas con login, panel de usuarios o integración con frontends en React, Angular, Vue, etc.

---

## Características principales

- Registro de usuarios con contraseña hasheada (bcrypt)
- Login con generación de **JWT**
- Middleware de autenticación para rutas protegidas
- Ruta de perfil protegida (`/api/auth/profile`)
- Manejo de errores básico
- Uso de variables de entorno con `.env`
- Arquitectura organizada (config, modelos, controladores, middleware, rutas)

---

Tecnologías utilizadas

Node.js

Express

MongoDB + Mongoose

JWT (jsonwebtoken)

bcryptjs

dotenv

CORS

Nodemon (modo desarrollo)

Instalación y configuración
1 -Clonar el repositorio
git clone https://github.com/tu-usuario/node-auth-api.git
cd node-auth-api

2 -Instalar dependencias
npm install

3 -Configurar variables de entorno

Crear un archivo .env en la raíz del proyecto basado en .env.example:

MONGODB_URI=mongodb://localhost:27017/auth_db
PORT=5000
JWT_SECRET=coloca_aqui_un_secreto_seguro
JWT_EXPIRES_IN=1h


MONGODB_URI: cadena de conexión a MongoDB (local o Atlas).

JWT_SECRET: clave secreta para firmar los tokens JWT.

JWT_EXPIRES_IN: tiempo de expiración del token (ej: 1h, 2d, etc).

▶Ejecutar la API
Modo desarrollo (con nodemon)
npm run dev

Modo producción
npm start


Por defecto la API queda escuchando en:

http://localhost:5000/


Endpoints
📝 Registro de usuario

POST /api/auth/register

Body JSON de ejemplo:

{
  "name": "Cristian",
  "email": "cristian@example.com",
  "password": "123456"
}


Respuesta de ejemplo:

{
  "message": "Usuario registrado correctamente",
  "user": {
    "id": "65f1c0f1d3...",
    "name": "Cristian",
    "email": "cristian@example.com"
  },
  "token": "eyJhbG..........."
}

Login

POST /api/auth/login

Body JSON:

{
  "email": "cristian@example.com",
  "password": "123456"
}


Respuesta de ejemplo:

{
  "message": "Login exitoso",
  "user": {
    "id": "65f1c0f1d3...",
    "name": "Cristian",
    "email": "cristian@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

-Perfil (ruta protegida)

GET /api/auth/profile

Headers:

Authorization: Bearer TU_TOKEN_AQUI


Ejemplo:

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...


Respuesta de ejemplo:

{
  "_id": "65f1c0f1d3...",
  "name": "Cristian",
  "email": "cristian@example.com",
  "createdAt": "2025-01-01T00:00:00.000Z",
  "updatedAt": "2025-01-01T00:05:00.000Z"
}


Si no se envía el token o es inválido, la API responde:

{
  "message": "No autorizado, falta token"
}


o

{
  "message": "Token inválido o expirado"
}

Modelo de usuario (Mongoose)
{
  name: String,
  email: String,
  password: String,
  createdAt: Date,
  updatedAt: Date
}


La contraseña se almacena hasheada con bcryptjs.

--Comandos útiles
Comando	Descripción
npm install	Instala las dependencias
npm run dev	Ejecuta la API en modo desarrollo
npm start	Ejecuta la API en modo producción

--Posibles mejoras futuras

Refresh tokens

Recuperación de contraseña por email

Roles y permisos (admin / user)

Validación de inputs con Joi / Zod / express-validator

Tests con Jest + Supertest

Documentación con Swagger / OpenAPI

Dockerfile para despliegue

-Autor
Cristian — Desarrollador Full Stack
GitHub: @codp89

