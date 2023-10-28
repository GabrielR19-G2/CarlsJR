const ClienteDAO = require('../dataAccess/clienteDAO');
const { AppError } = require('../utils/appError');
const { verifyToken } = require('../middleware/auth');

class ClienteController {
  static async crearCliente(req, res, next) {
    try {
      const { idusuario, nombre, telefono } = req.body;

      if (!idusuario || !nombre || !telefono) {
        next(new AppError('Los campos idusuario, nombre y telefono son obligatorios', 500));
      }

      const clienteData = { idusuario, nombre, telefono };

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
      // Esta es la función que verificará el token JWT antes de permitir el acceso a la ruta.
      verifyToken(req);

      const id = req.params.id;
      const { idusuario, nombre, telefono } = req.body;
      const clienteData = { idusuario, nombre, telefono };

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
      // Esta es la función que verificará el token JWT antes de permitir el acceso a la ruta.
      verifyToken(req);

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
