const commentsStore = require('./commentsStore.json');

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
        this.commentsMap = new Map(Object.entries(commentsStore.comments));
        this.lastCommentId = commentsStore.commentCounter;
    }

    getCommentsByAnimeId(animeId) {
        if(!this.commentsMap.has(animeId)) return [];
        return this.commentsMap.get(animeId);
    }

    postComment(animeId, comment) {
        if(!this.commentsMap.has(animeId)) this.commentsMap.set(animeId) = [];
        const newComment = new Comment({ id: ++this.lastCommentId, ...comment });
        this.commentsMap.get(animeId).push(newComment);
        return newComment;
    }
}

module.exports = { CommentsManager };