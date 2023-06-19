import { Response, Request, NextFunction } from "express";

class BusinessController {
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

    static postOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (err) {
            next(err);
        }
    }
}

export default BusinessController;
