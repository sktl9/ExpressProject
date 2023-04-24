import Post from "./Post.js"
import PostService from "./PostService.js";

class PostController {
    async create(req, res) {
        try {
            console.log(req.files);
            const post = await PostService.create(req.body)
            res.json(post);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body)
            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.json(post)
        } catch (e) {

            return res.status(500).json(e)
        }
    }
    async updateOne(req, res) {
        try {
            const post = req.body
            if (!post._id) { return res.status(400).json({ messege: 'id не указан' }) }
            const UpdPost = await Post.findByIdAndUpdate(post._id, {
                "author": "jedi",
                "title": "hi",
                "content": "hi world!",
                "__v": 0
            }, { new: true })
            const author = post.author
            if (!post.author){ return res.status(400).json({ messege: 'author не указан' }) }
            const FindSerg = await Post.findOneAndDelete(post.author)
            const FindAll = await Post.find()
            return res.status(200).json(FindAll)
        } catch (e) {
            return res.status(500).json(e)
        }
    }


}




export default new PostController()