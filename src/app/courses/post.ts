export class Post {
    constructor(
        public author: string,
        public content: string,
        public course_id: Number,
        public post_section: string,
        public up_votes: Number,
        public down_votes: Number
    ) {}
}
