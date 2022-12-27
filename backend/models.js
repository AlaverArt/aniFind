const commentsStore = require('./commentsStore.json');
const fs = require('fs');
class Comment {
    id;
    author;
    mark;
    message;

    constructor(item) {
        this.id = item?.id ?? null;
        this.author = item?.author ?? null;
        this.mark = item?.mark ?? null;
        this.message = item?.message ?? null;
    }
}

class CommentsManager {
    commentsMap;

    constructor() {
        const map = fs.readFileSync('./commentsStore.json','utf-8');
        this.commentsMap = JSON.parse(map.toString());
        //this.lastCommentId = commentsStore.commentCounter;
    }

    getCommentsByAnimeId(animeId) {
        if(!this.commentsMap.comments[animeId]) return [];
        return this.commentsMap.comments[animeId];
    }

    postComment(animeId, comment) {
        if(!this.commentsMap.comments[animeId]) this.commentsMap.comments[animeId] = [];
        const newComment = new Comment({ id: this.commentsMap.commentsCounter+1, ...comment });
        this.commentsMap.commentsCounter += 1;
        this.commentsMap.comments[animeId].push(newComment);

        fs.writeFileSync('./commentsStore.json', JSON.stringify(this.commentsMap));

        return newComment;
    }
}

module.exports = { CommentsManager };