import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';

describe('BookController', (): void => {
  let controller: BookController;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  it('should be defined', (): void => {
    expect(controller).toBeDefined();
  });

  describe('default response for book routes', (): void => {
    it('should return book', (): void => {
      expect(controller.findAll()).toBe('books');
    });
    it('should return favorites book', (): void => {
      expect(controller.findAllFavorites()).toBe('favorites books');
    });
  });
});
