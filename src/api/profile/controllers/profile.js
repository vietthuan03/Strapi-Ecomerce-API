"use strict";
/**
 * profile controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::profile.profile', ({ strapi }) => ({
    async createMe(ctx) {
        try {
            const user = ctx.state.user;
            if (!user) {
                return ctx.badRequest({ messages: ["No authorized user found!"] });
            }
            const result = await strapi.entityService.create('api::profile.profile', {
                data: {
                    fullName: ctx.request.body.fullName,
                    email: user.email,
                    user: user.id,
                },
            });
            return result;
        }
        catch (err) {
            return ctx.badRequest({ messages: [{ id: "Error" }] });
        }
    },
    async getMe(ctx) {
        try {
            const user = ctx.state.user;
            if (!user) {
                return ctx.badRequest({ messages: ["No authorized user found!"] });
            }
            const result = await strapi.db.query('api::profile.profile').findOne({
                where: {
                    user: {
                        id: {
                            $eq: user.id,
                        }
                    }
                },
                populate: {
                    image: true
                }
            });
            return result;
        }
        catch (err) {
            return ctx.badRequest({ messages: [{ id: "Error" }] });
        }
    },
}));
