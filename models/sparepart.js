import mongoose from 'mongoose';
import URLString from 'mongoose-slug-generator';
mongoose.plugin(URLString, {
  separator: '-',
  lang: 'pl',
});

const sparePartSchema = new mongoose.Schema(
  {
    equipment: { type: String, default: '' },
    type: { type: String, default: '' },
    model: { type: String, default: '', uppercase:true, trim:true, required: [true, 'część musi mieć przypisany model produktu'], },
    assembly: { type: String, default: '' },
    name: { type: String, default: '', required: [true, 'część musi posiadać nazwę'], lowercase:true, trim:true, },
    drawing: { type: String, default: '' },
    position: { type: String, default: '' },
    netPrice: { type: Number, default: 0 },
    netWeight: {type:Number,default:0},
    grossWeight:{type:Number,default:0},
    volume:{type:Number,default:0},
    stock: { type: Number, default: 0 },
    images: { type: Array, default: [] },
    equipmentSlug: { type: String, slug: 'equipment', index:true },
    typeSlug: { type: String, slug: 'type', index:true },
    modelSlug: { type: String, slug: 'model', index:true,uppercase:true },
  },
  { timestamps: true }
);

export const SparePart = mongoose.models.SparePart || mongoose.model("SparePart",sparePartSchema);
export default SparePart;