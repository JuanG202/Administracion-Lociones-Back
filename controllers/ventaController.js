const Venta = require("../models/Venta");

const obtenerVentas = async (req, res) => {
  try {
    const ventas = await Venta.find().sort({ createdAt: -1 });

    res.json(ventas);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

const crearVenta = async (req, res) => {
  try {
    const venta = new Venta(req.body);

    await venta.save();

    res.status(201).json(venta);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

const actualizarVenta = async (req,res)=>{

    try{

        const venta = await Venta.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new:true,
                runValidators:true
            }

        );

        if(!venta){

            return res.status(404).json({
                mensaje:"Venta no encontrada"
            });

        }

        res.json(venta);

    }catch(error){

        res.status(500).json({
            mensaje:error.message
        });

    }

}

const eliminarVenta = async (req, res) => {
  try {
    await Venta.findByIdAndDelete(req.params.id);

    res.json({
      mensaje: "Venta eliminada",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

const marcarPago = async (req, res) => {
  try {
    const { metodo } = req.body;

    const venta = await Venta.findById(req.params.id);

    if (!venta) {
      return res.status(404).json({
        mensaje: "Venta no encontrada",
      });
    }

    venta.estado = "Pago";
    venta.cuanto = venta.total;
    venta.metodo = metodo;

    await venta.save();

    res.json(venta);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

module.exports = {
  obtenerVentas,
  crearVenta,
  actualizarVenta,
  eliminarVenta,
  marcarPago,
};