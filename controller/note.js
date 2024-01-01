const { Note } = require("../model/note");


// Note fating is handled here ---------------------------------------
exports.fetchNotes = async(req, res) => {
    try {
        const doc = await Note.find().exec();
        res.status(200).json(doc);
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        })
    }
}

//Note Creation is handeled here -------------------------------------

exports.createNotes = async (req, res) => {

    const {title, content} = req.body;

    if( !title || !content ){
        console.log( title, content)
        res.status(400).json({
            success: false,
            error: "Send all fields"
        })
    }
    else{
        try {
            const doc = await new Note(req.body);
            await doc.save();

            res.status(201).json(doc);

        } catch (error) {
            res.status(400).json({
                success: false,
                error : error
            })
        }
    }

}




// Fatching note by ID is handeled here ---------------------------------------

exports.fetchNotesById = async ( req, res ) => {
    try {
        const { id } = req.params;
        const doc = await Note.findById(id).exec();

        if( !doc ){
            res.status(404).json({
                success: false,
                error: "No Data found on this Given ID"
            })
        }
        else{
            res.status(200).json(doc);
        }

    } catch (error) {
        res.status(400).json({
            success : false,
            error : error
        })
    }
}


// Updating the data is handled here ---------------------------------------

exports.updateContent = async( req, res ) => {
    try {
        const id = req.params.id;
        const content = req.body.content;

        // Chaking The content is empty or not
        if( !content ) {
            res.status(400).json({
                success : false,
                error : "Send Content field with request"
            })
        }
        else{

            const doc = await Note.findByIdAndUpdate(id, {content : content}, {new : true} );

            if( !doc ){
                res.status(404).json({
                    success: false,
                    error: "Data Not found on this ID, Try with anathor ID"
                })
            }
            else{
                res.status(201).json(doc);
            }

        }

    } catch (error) {
        //Handling if any error occours in time of updating
        res.status(400).json({
            success : false,
            error : error
        })
    }
}


// Deleteing data is handeled here 
exports.deleteNoteById = async( req, res) => {

    try{
        const id = req.params.id;

        const doc = await Note.findByIdAndDelete(id);

        //Checking the document is present or not
        if( !doc ){
            console.log( 'run ');
            res.status(400).json({
                success : false,
                error : "No Data found from this ID"
            })
        }
        else{
            res.status(200).json(doc);
        }
    } catch ( error ){
        //Handling if any error occours in time of updating
        res.status(400).json({
            success : false,
            error : error
        })
    }

}