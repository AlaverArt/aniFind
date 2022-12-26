const express = require('express');
var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
const bodyParser = require('body-parser');

const models = require('./models');

class Application {
    constructor() {
        this.expressApp = express();
        this.expressApp.use(cors(corsOptions));
        this.attachRoutes();
    }

    attachRoutes() {
        let app = this.expressApp;
        let jsonParser = bodyParser.json();
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
        if(!this.req.params.animeId) {
            res.status(400).json({});
        }
        else {
            let response = { comment: this.commentsManager.postComment(req.params.animeId, req.body) };
            res.json(response);
        }
    }
}

module.exports = Application;