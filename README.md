# Guia despliegue

Instalar dependencias

### `yarn install` o `npm install`

Para ejecutar el servidor en modo desarrollo puede correr el comando

### `yarn start` o `npm run start`

Para ejecutar el build del proyecto ejecute el siguiente comando:

### `yarn build` o `npm run build`

Luego de que el archivo "**build**" se cree, proceda a instalar globalmente la dependencia **serve**

### `yarn global add serve` o `npm install-g serve`

Finalmente inicie el servidor con la carpeta generada "**build**", ejecutando el siguente comando en la raiz del proyecto

### `serve -s build`

## Notas:

- El proyecto maneja random data con faker.js la cual se crea desde el archivo **src/data/salesData.js**
- Recargar la pagina para probar responsive(Si se prueba en navegador)
