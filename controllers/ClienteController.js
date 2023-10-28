<<<<<<< HEAD
    //Manejo de errores
    const { AppError } = require("../utils/appError")
    const  clienteDAO  = require("../dataAccess/clienteDAO")


    // usuario: DataTypes.STRING,
    // contraseña: DataTypes.STRING
    class clienteController {

        static async addCliente(req, res, next) {
            try {
                const { nombre, telefono } = req.body

                if (!nombre || !telefono) {
                    throw new AppError('¡Faltan campos obligatorios!', 500)
                }
                const clienteData = { nombre, telefono }
                const cleinte = await clienteDAO.crearCliente(clienteData);
                res.status(201).json(cleinte)
            } catch (err) {
                next(new AppError('Error al crear cliente', err))
                throw err;
            }
        }

        static async getClientes(req, res, next) {
            try {
                const limit = req.params.limit || 10
                const clientes = await clienteDAO.obtenerClientes(limit)
                res.status(200).json(clientes)
            } catch (err) {
                next(new AppError('Error al obtener los clientes', err))
                throw err;
            }
        }

        static async getClientePorId(req, res, next) {
            try {
                const id = req.params.id
                const cliente = await clienteDAO.obtenerClientePorId(id)
                if(!cliente){
                    next(new AppError('Cliente no encontrado',500))
                }
                res.status(200).json(cliente)
            } catch (error) {
                next(new AppError('Error al obtener cliente o cliente inexistente', 500))
            }
        }

        //elimina por id
        static async deleteCliente(req, res, next) {
            try {
              const id = req.params.id;
              const clienteEliminado = await clienteDAO.eliminarCliente(id);
          
              if (!clienteEliminado) {
                next(new AppError('No se encontró el cliente', 404));
                return;
              }
          
              res.status(200).json({ message: 'Cliente eliminado con éxito!' });
            } catch (error) {
              next(new AppError('Error al eliminar cliente', error));
            }
          }

        static async updateCliente(req, res,next) {
            try {
                const id = req.params.id
                const clienteData = req.body;
                const cliente = await clienteDAO.actualizarCliente(id, clienteData)
                if (!cliente) {
                    next(new AppError('No se encontró el cliente', 500))
                }
                res.status(200).json(cliente)
            } catch (error) {
                next(new AppError('Error al actualizar el cliente', error))
                throw error
            }
        }
    }

    module.exports = clienteController;
=======
const ClienteDAO = require('../dataAccess/clienteDAO');
const { AppError } = require('../utils/appError');

class ClienteController {
  static async crearCliente(req, res, next) {
    try {
      const { idusuario, nombre, telefono } = req.body;

      if (!idusuario || !nombre || !telefono) {
        next(new AppError('Los campos idusuario, nombre y telefono son obligatorios', 500));
      }

      const clienteData = { idusuario, nombre, telefono};

      const cliente = await ClienteDAO.crearCliente(clienteData);
      res.status(201).json(cliente);
    } catch (error) {
      console.log(error);
      next(new AppError('Error al crear el cliente', 500));
    }
  }

  static async obtenerClientePorId(req, res, next) {
    try {
      const id = req.params.id;

      const cliente = await ClienteDAO.obtenerClientePorId(id);

      if (!cliente) {
        next(new AppError('No se encontró el cliente'));
      }

      res.status(200).json(cliente);
    } catch (error) {
      console.log(error);
      next(new AppError('No se logró obtener el cliente', 500));
    }
  }

  static async obtenerClientes(req, res, next) {
    try {
      const clientes = await ClienteDAO.obtenerClientes();

      res.status(200).json(clientes);
    } catch (error) {
      console.log(error);
      next(new AppError('No se logró obtener los clientes', 500));
    }
  }

  static async actualizarCliente(req, res, next) {
    try {
      const id = req.params.id;
      const { idusuario, nombre, telefono } = req.body;

      const clienteData = {idusuario, nombre, telefono};

      const cliente = await ClienteDAO.actualizarCliente(id, clienteData);

      if (!cliente) {
        next(new AppError('No se encontró el cliente', 500));
      }

      res.status(200).json(cliente);
    } catch (error) {
      console.log(error);
      next(new AppError('Error al actualizar cliente', 500));
    }
  }

  static async eliminarCliente(req, res, next) {
    try {
      const id = req.params.id;

      const cliente = await ClienteDAO.eliminarCliente(id);

      if (!cliente) {
        next(new AppError('No se encontró el cliente', 500));
      }

      res.status(200).json({ message: 'Cliente eliminado correctamente' });
    } catch (error) {
        console.log(error);
      next(new AppError('Error al eliminar cliente', 500));
    }
  }
}

module.exports = ClienteController;
>>>>>>> 65285be97f6d0e50fcb61ae84455b899444b9fa1
