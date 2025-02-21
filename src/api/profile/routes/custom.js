"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: 'GET',
            path: '/profile/me',
            handler: 'profile.getMe',
            config: {},
        },
        {
            method: 'POST',
            path: '/profile/me',
            handler: 'profile.createMe',
            config: {},
        },
    ],
};
