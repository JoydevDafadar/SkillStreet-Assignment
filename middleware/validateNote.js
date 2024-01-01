
// contnet validation is handled here -------------------------------------------------------------------------

exports.validateContnet = (req, res, next) => {

    const content = req.body.content;

    // Checking the contet is coming or not
    if( !content ){
        res.status(400).json({
            success: false,
            error : "Send Content field with request "
        })
    }

    // Checking the string length is appropiate or not
    else if(content.length < 5 || content.length > 1000 ){
        res.status(400).json({
            success: false,
            error : "Content field should be in btween 5 to 1000 characters"
        })
    }
    else{
        next();
    }
}

// Title validation is handled here -------------------------------------------------------------------------

exports.validateTitle = (req, res, next) => {

    const title = req.body.title;

    // Checking the contet is coming or not
    if( !title ){
        res.status(400).json({
            success: false,
            error : "Send title field with request "
        })
    }

    // Checking the string length is appropiate or not
    else if( title.length < 5 || title.lenth > 50 ){
        res.status(400).json({
            success: false,
            error : "title field should be in btween 5 to 50 characters"
        })
    }
    else{
        next();
    }
}
