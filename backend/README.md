# Bridge Capital Backend

Backend para el manejo de formularios de contacto de Bridge Capital.

## Requisitos

- Node.js (v14 o superior)
- Cuenta de Zoho Mail

## Instalación

1. Clona el repositorio
2. Navega a la carpeta del backend:
```bash
cd backend
```

3. Instala las dependencias:
```bash
npm install
```

4. Crea un archivo `.env` basado en `.env.example` y configura tus variables de entorno:
```bash
cp .env.example .env
```

5. Edita el archivo `.env` con tus credenciales de Zoho Mail.

## Configuración de Zoho Mail

Para obtener la contraseña de aplicación de Zoho Mail:
1. Inicia sesión en tu cuenta de Zoho Mail
2. Ve a Configuración > Cuentas > Seguridad
3. En "Contraseñas específicas de la aplicación", genera una nueva contraseña
4. Usa esa contraseña en la variable ZOHO_MAIL_PASSWORD del archivo .env

## Uso

Para desarrollo:
```bash
npm run dev
```

Para producción:
```bash
npm start
```

El servidor estará corriendo en `http://localhost:3000` (o el puerto especificado en las variables de entorno).

## Endpoints

### POST /api/contact

Envía un mensaje de contacto.

**Body:**
```json
{
  "name": "Nombre del usuario",
  "email": "correo@ejemplo.com",
  "phone": "123456789", // opcional
  "message": "Mensaje del usuario"
}
```

**Respuesta exitosa:**
```json
{
  "message": "Mensaje enviado exitosamente"
}
```

**Respuesta de error:**
```json
{
  "error": "Mensaje de error"
}
``` 