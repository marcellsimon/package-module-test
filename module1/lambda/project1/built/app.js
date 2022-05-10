"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
const uuid_1 = require("common/utils/uuid");
const lambdaHandler = async ({ body, }) => {
    console.log(uuid_1.getUuid());
};
exports.lambdaHandler = lambdaHandler;
//# sourceMappingURL=app.js.map