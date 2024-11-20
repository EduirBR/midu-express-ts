# Clase backend Midu Dev

## iniciar el proyecto
npm init -y
## instalar TS
npm i typescript -D
<p>-D porque es una dependencia de desarrollo</p>

### configurar tsc en el package.json
```json
{
  "scripts": {
    ...
    "tsc": "tsc",
    ...
  }
}
```
## iniciar tsconfig
npm run tsc -- --init
<p> -- --init para que el --init sea al tsc y no al npm </p>

## instalar express
npm i express -E
<p>guarda la dependencia exacta</p>

### instalar el tipado para express
npm i @types/express -D

#### node mon para TS
npm i ts-node-dev -D
