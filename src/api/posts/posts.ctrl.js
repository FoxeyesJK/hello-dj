const Post = require('models/post');

exports.write = async (ctx) => {
    //Request body can be found from ctx.request.body in REST API
    const { title, body, tags } = ctx.request.body;

    const post = new Post({
        title, body, tags
    });

    try {
        await post.save();
        ctx.body = post;
    } catch(e) {
        ctx.throw(e, 500);
    }
}

exports.list = (ctx) => {

}

exports.read = (ctx) => {

}

exports.remove = (ctx) => {

}

exports.update = (ctx) => {

}