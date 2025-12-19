import mongoose , {Schema , Document} from "mongoose";

export interface  todoData extends Document{
    title: string ;
    message: string;
    createArt ?: Date
}

const todoSchema: Schema<todoData> = new Schema (
    {
        title :{
            type: 'string' ,
            required: true
        },
        message : {
            type: 'string',
            required: true
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model<todoData>('todo details' , todoSchema)
