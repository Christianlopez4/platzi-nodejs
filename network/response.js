const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
}

exports.success = (req, res, message, status) => {
    let statusCode = status;
    let statusMessage = message;

    if (!status) {
        statusCode = 200;
    }

    if (!message) {
        statusMessage = statusMessages[statusCode];
    }

    res.status(statusCode).send({
        error: '',
        body: message
    });
}

exports.error = (req, res, message, status, err) => {
    console.error(err);
    let statusCode = status;
    let statusMessage = message;

    if (!status) {
        statusCode = 500;
    }

    if (!message) {
        statusMessage = statusMessages[statusCode];
    }

    res.status(statusCode).send({
        error: message,
        body: ''
    });
}