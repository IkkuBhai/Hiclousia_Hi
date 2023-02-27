const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const skillsSchema = new mongoose.Schema(
    {
        userDetailsID: {
            type: ObjectId,
            ref: "user"
        },
        skillTitle: {
            type: String,
            required: true
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model("Skills", skillsSchema);

