export default class CommentsList {
    comments;

    constructor(comments) {
        this.comments = comments ?? [];
        this.div = document.createElement('div');
        this.div.classList.add('comments-list');
    }

    render() {
        this.div.innerHTML = '';
        this.comments?.forEach(item => {
            this.div.innerHTML += `
                <div class='comment'>
                    <div class='comment__author'>${item?.author ?? ''} ${item?.mark ? '<p class="comment__mark">' + item?.mark + '</p>' : ''}<p></div>
                    <div class='comment__content'>${item?.message ?? ''}</div>
                </div>
            `
        });
        return this.div;
    }
}