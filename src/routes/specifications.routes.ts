import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationsRepository/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/SpecificationService/CreateSpecificationService";

const specificationRoutes = Router();
const specificationsRepository = new SpecificationRepository;

specificationRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(specificationsRepository);

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});

export { specificationRoutes };