import { ICategoriesRepository } from "../../repositories/CategoriesRepository/ICategoriesRepository";

interface Irequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ name, description }: Irequest) {
        const categoryAlreadyExist = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExist) {
            throw new Error("Category already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };