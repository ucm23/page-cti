# Utiliza una imagen de Node.js específica para tu aplicación
FROM node:18-alpine

# Crea el directorio de trabajo
WORKDIR /cti

# Copia primero solo el archivo de dependencias para aprovechar el caché de Docker
COPY package.json package-lock.json /cti/

# Instala las dependencias, incluyendo las de desarrollo
RUN npm install

# Copia el resto de los archivos
COPY . /cti

# Construye la aplicación
RUN npm run build

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación en modo de producción
CMD ["npm", "start"]