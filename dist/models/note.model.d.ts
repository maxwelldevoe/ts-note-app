import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    body: string;
    title: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    body: string;
    title: string;
}> & Omit<{
    body: string;
    title: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    body: string;
    title: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    body: string;
    title: string;
}>> & Omit<mongoose.FlatRecord<{
    body: string;
    title: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default _default;
