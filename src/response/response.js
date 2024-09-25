exports.success = function (req, res, message, status){
    const statusCode = status || 200;
    const mensajeOk = message || '';
    res.status(statusCode).send({
       error: false,
       status: statusCode,
       body: mensajeOk
    });
}

exports.error = function (req, res, message, status){
    const statusCode = status || 500;
    const mensajeError = message || '';
    res.status(statusCode).send({
       error: false,
       status: statusCode,
       body: mensajeError 
    });
}