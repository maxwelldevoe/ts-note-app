import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    title: string;
    body: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    title: string;
    body: string;
}> & Omit<{
    title: string;
    body: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    body: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title: string;
    body: string;
}>> & Omit<mongoose.FlatRecord<{
    title: string;
    body: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default _default;
