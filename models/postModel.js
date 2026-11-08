import {Schema, model, models} from "mongoose";

const postSchema = new Schema({
   title:String,
   description:String,
   image:String,
   created_at: {
          type: String,
             default: () =>
               new Date().toLocaleDateString("en-IN", {
                     day: "2-digit",
                     month: "long",
                     year: "numeric",
                     timeZone: "Asia/Kolkata",
                  }),

   
}},{toJSON: {virtuals:true}});
postSchema.virtual('short_description').get(function(){
   return this.description.substring(0,80)+'...'
})
// Virtual property
postSchema.virtual("formattedDate").get(function () {
  if (!this.created_at) return "";

  const [year, month, day] = this.created_at.split("-");

  const monthName = new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  ).toLocaleString("en-US", { month: "long" });

  return `${day} ${monthName} ${year}`;
});



const Post = models.Post || model("Post", postSchema);

export default Post;