const express = require('express');
//let cors = require('cors');
let corsOptions = {
    origin: ['http://localhost:3300', 'http://localhost:3000'],
    //optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const models = require('./models');

class Application {
    constructor() {
        this.expressApp = express();
        //this.expressApp.use(cors(corsOptions));
        this.expressApp.use(express.json());
        this.attachRoutes();
    }

    attachRoutes() {
        let app = this.expressApp;
        //let jsonParser = bodyParser.json();
        this.commentsManager = new models.CommentsManager();

        app.get('/comments/:animeId', this.getCommentsHandler.bind(this));
        app.post('/comments/:animeId', this.postCommentHandler.bind(this));
    }

    getCommentsHandler(req, res) {
        if(!req.params.animeId) {
            req.status(400).json({});
        }
        else {
            let comments = this.commentsManager.getCommentsByAnimeId(req.params.animeId);
            let response = { comments };
            res.json(response);
        }
    }

    postCommentHandler(req, res) {
        const comment = req.body;
        const id = req.params.animeId;
        
        if(!req.params.animeId) {
            res.status(400).json({});
        }
        else {
            let result = this.commentsManager.postComment(id, comment);
            let response = { comment: result};
            res.set('Content-Type', 'application/json');
            res.status(200).json(response);
        }
    }
}

module.exports = Application;
