import Post from "./Post.js"

class PostService{
    async create(post){
    const createdPost = await Post.create(post)
return createdPost}
   
    async getAll(req,res){
try{
    const posts = await Post.find();
    return res.json(posts);
}catch(e){
    res.status(500).json(e)
}}
    async getOne(id){
            if(!id){throw new Error('не указан id ')}
            const post = await Post.findById(id);
            return post
        }
    
    async update(req,res){
        try{
         const post = req.body
         if(!post._id){return res.status(400).json({messege:'id не передан'})}
         const updatedPost = await Post.findByIdAndUpdate(post._id,post,{new:true})
         return res.json(updatedPost)
        }catch(e){
            res.status(500).json(e)
        }
    }
    async delete(req,res){
        try{
            const {id} = req.params
            if(!id){return res.status(400).json({messege:'id не передан'})}
            const post =await Post.findByIdAndDelete(id)
            return res.json(post)
        }catch(e){
            return res.status(500).json(e)
        } 
    }
     async updateOne(req,res){
       try{
        const post = req.body
        if(!post._id){return res.status(400).json({messege:'id не указан'})}
        const UpdPost = await Post.findByIdAndUpdate(post._id, {
            "_id": "64415f955a8448182baf1efc",
            "author": "Ramil",
            "title": "hi",
            "content": "hi world!",
            "__v": 0
        },{new:true})
        return res.status(200).json(UpdPost)
       }catch(e){
        return res.status(500).json(e)}
     }
}

export default new PostService()