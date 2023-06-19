import { Response, Request, NextFunction } from "express";

class UsersController {
    static get = async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (err) {
            next(err);
        }
    }

    static getOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch(err) {
            next(err);
        }
    }

    static post = async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch(err) {
            next(err);
        }
    }

    static put = async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (err) {
            next(err);
        }
    }

    static delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (err) {
            next(err);
        }
    }
}

export default UsersController;