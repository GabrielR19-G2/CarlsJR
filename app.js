const express = require('express')
const app = express();
require('dotenv').config({ path: './variables.env' })
const usuarioRoutes = require('./routes/usuarioRouter')
const pagoRoutes = require('./routes/PagoRouter')
const morgan = require('morgan')
const { AppError, globalErrorHandler } = require("./utils/appError")
app.use(express.json())

app.use(morgan('combined'))

app.use('/api/usuarios', usuarioRoutes)
app.use('/api/pagos', pagoRoutes)

app.all("*", (req, res, next) => {
    const error = new AppError('Ruta no encontrada o ha cambiado', 300)
    next(error);
})

app.use(globalErrorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Servidor express escuchando en el puerto: ', PORT);
})