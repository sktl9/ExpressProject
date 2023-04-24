import Post from "./Post.js"

class PostService{
    async create(post,picture){
    const createdPost = await Post.create(post)
return createdPost}
   
async getAll(){
    const posts = await Post.find();
    return posts
}
    async getOne(id){
            if(!id){throw new Error('не указан id ')}
            const post = await Post.findById(id);
            return post
        }
    
        async update(updatedPost){
            if(!updatedPost._id){throw new Error('не указан id')}
            const post = await Post.findByIdAndUpdate(updatedPost._id, updatedPost, {new:true})
            return post  
       }
    
       async delete(id) {
        if (!id) {
        throw new Error('Id not found')
        }
        const post = await Post.findByIdAndDelete(id)
        return post
        }

}

export default new PostService()