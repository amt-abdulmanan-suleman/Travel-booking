"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    const { accessToken } = req.cookies;
    if (!accessToken) {
        res.status(401).json({ success: false, message: 'Unauthorized' });
        return;
    }
    jsonwebtoken_1.default.verify(accessToken, process.env.SECRET, (err, user) => {
        if (err) {
            res.status(401).json({ success: false, message: 'Unauthorized' });
            return;
        }
        else {
            req.user = user;
            next();
        }
    });
};
exports.verifyToken = verifyToken;
const verifyUser = (req, res, next) => {
    var _a;
    (0, exports.verifyToken)(req, res, next);
    if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) === req.params.id) {
        next();
    }
    else {
        res.status(401).json({ success: false, message: 'Not authenticated' });
    }
};
exports.verifyUser = verifyUser;
