import  { Schema ,model, models} from "mongoose";

const BlogModel = new Schema({
    title:String,
    description:String,
    date:Date
})

const Blog = models.Blog || model("Blog", BlogModel);

export default Blog;