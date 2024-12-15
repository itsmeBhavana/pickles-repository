import mongoose from "mongoose";

const pickleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
});

const Pickle = mongoose.model("Pickle", pickleSchema);

export default Pickle;
