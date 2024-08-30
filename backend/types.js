const zod = require("zod");
const schema = zod.string();

const createType = zod.object({
    title: zod.string(),
    description: zod.string()
});

const updateType = zod.string();

module.exports={createType : createType,updateType: updateType};