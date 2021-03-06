const Post = require('models/post');
const Joi = require('joi');
const { ObjectId } = require('mongoose').Types;

exports.checkObjectId = (ctx, next) => {
    const { id } = ctx.params;

    if(!ObjectId.isValid(id)) {
        ctx.status = 400;
        return null;
    }

    return next();
}

exports.write = async (ctx) => {
    //Request body can be found from ctx.request.body in REST API
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        //genre: Joi.array().items(Joi.string()).required(),
    });

    const result = Joi.validate(ctx.request.body, schema);

    if(result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { name, genre, like } = ctx.request.body;

    const post = new Post({
        name, genre, like
    });

    try {
        await post.save();
        ctx.body = post;
    } catch(e) {
        ctx.throw(e, 500);
    }
}

exports.list = async (ctx) => {
    try {
        const posts = await Post.find().exec();
        ctx.body = posts;
    } catch(e) {
        ctx.throw(e, 500);
    }
}

exports.read = async (ctx) => {
    const { id } = ctx.params;
    try {
        const post = await Post.findById(id).exec();

        if(!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch(e) {
        ctx.throw(e, 500);
    }
}

exports.remove = async (ctx) => {
    const { id } = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch(e) {
        ctx.throw(e, 500);
    }
}

exports.update = async (ctx) => {
    const { id } = ctx.params;
    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true
        }).exec();

        if(!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch(e) {
        ctx.throw(e, 500);
    } 
};