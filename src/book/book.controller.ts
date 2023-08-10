import { Controller, Get } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get()
  findAll(): string {
    return 'books';
  }

  @Get('favorites')
  findAllFavorites(): string {
    return 'favorites books';
  }
}
