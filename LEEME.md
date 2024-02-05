## Bot de Telegram Flowise
Bot de Telegram Flowise 🤖 con tecnología Langchain
Este bot de Telegram aprovecha las llamadas a la API de Flowise, proporcionando una variedad de posibilidades a través de la tecnología Langchain.

Como no coder, he observado varios bots de Telegram integrándose con n8n, Make y Activepieces. Sin embargo, creo que menos integraciones pueden llevar a menos problemas. Por lo tanto, me embarqué en la creación de mi propio bot de Telegram utilizando Flowise, con la ayuda de ChatGPT y mis conocimientos limitados de programación, hasta que logré ponerlo en funcionamiento con éxito.

He decidido compartir este bot con la comunidad, con la esperanza de que pueda sufrir más modificaciones. ¡Si deseas contribuir a su mejora, eres más que bienvenido!

#### Guía de Instalación del Bot de Telegram 📔
Sigue estos pasos para configurar y ejecutar tu bot de Telegram en Node.js:

#### Paso 1: Clonar el Repositorio
```
git clone https://github.com/RonAdames/telegram_flowise.git
```
#### Paso 2: Navegar al Directorio del Proyecto
```
cd telegram_flowise
```
#### Paso 3: Instalar Dependencias
Asegúrate de tener Node.js y npm instalados. Luego, instala los paquetes necesarios:
```
npm install
```
#### Paso 4: Crear un Bot de Telegram en BotFather
- Abre Telegram y busca el bot "BotFather".
- Inicia un chat con BotFather y usa el comando /newbot para crear un nuevo bot.
- Sigue las instrucciones para establecer un nombre y un nombre de usuario para tu bot.
- Una vez creado el bot, anota el token de API generado.

#### Paso 5: Configurar el Bot
- Abre el proyecto en tu editor de código preferido.
- Localiza el archivo .env.example y cámbiale el nombre a .env.
- Reemplaza el marcador de posición TELEGRAM_BOT_TOKEN con el token de API obtenido de BotFather.
- En este punto, asumo que tienes Flowise en funcionamiento; de lo contrario, consulta https://flowiseai.com para obtener tu URL y token de API de Flowise.
- Reemplaza tu API_URL y API_TOKEN.

#### Paso 6: Ejecutar el Bot
Ahora es el momento de iniciar tu bot.
```
npm start
```
#### Paso 7: Probar el Bot
Abre Telegram y busca tu bot usando el nombre de usuario proporcionado durante la creación. Inicia un chat con el bot y envía un comando de prueba para asegurarte de que responda correctamente.
¡Felicidades! Tu bot de Telegram está instalado y funcionando correctamente.

Si encuentras algún problema, consulta la documentación del proyecto o busca ayuda en la comunidad.

Recuerda personalizar las instrucciones según la estructura de tu proyecto y los pasos de configuración específicos. Además, proporciona cualquier información adicional o pasos de solución de problemas si es necesario.

### Si necesitas instalar el archivo Docker utilizando la construcción de Docker
ejecuta el siguiente comando
```
docker build -t telegram-bot .
docker run -p 3000:3000 telegram-bot
```
### ¡Espero que lo disfrutes y feliz programación de bots! 🤖
