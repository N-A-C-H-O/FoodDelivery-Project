import { Response, Request, NextFunction } from "express";
import BusinessManager from "../../domain/managers/businessManager";

class BusinessController {
  static get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const manager = new BusinessManager();
      const result = await manager.list();
      res.status(200).send({ status: "success", data: result });
    } catch (err) {
      next(err);
    }
  };

  static getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { bid } = req.params;
      const manager = new BusinessManager();
      const result = await manager.getOne(bid);
      res.status(200).send({ status: "success", data: result });
    } catch (err) {
      next(err);
    }
  };

  static post = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const manager = new BusinessManager();
      const result = await manager.create(req.body);
      res.status(201).send({ status: "success", data: result });
    } catch (err) {
      next(err);
    }
  };

  static postOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { bid } = req.params;  
      const manager = new BusinessManager();  
      const result = await manager.addProduct(bid, req.body);
      res.status(200).send({ status: "success", data: result });
    } catch (err) {
      next(err);
    }
  };
}

export default BusinessController;
