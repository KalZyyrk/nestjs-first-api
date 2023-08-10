import { Controller, Get } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get()
  findAll(): string {
    return 'book';
  }

  @Get('favorites')
  findAllFavorites(): string {
    return 'favorites book';
  }
}
