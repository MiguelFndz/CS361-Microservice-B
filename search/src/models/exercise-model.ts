import { InferSchemaType, model, Schema } from 'mongoose';

const exerciseSchema = new Schema ({
    title: { type: String, required: true },
    date: { type: Date, required: false },
    sets: { type: Number, required: false },
    reps: { type: Number, required: false },
    duration: { type: Number, required: false}
});

type Exercise = InferSchemaType<typeof exerciseSchema>;

export default model<Exercise>("Exercise", exerciseSchema);