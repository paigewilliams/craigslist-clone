import { Injectable } from '@angular/core';
import { Category } from './models/category.model';
import { CATEGORIES } from './mock-categories';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories() {
    return CATEGORIES;
  }

}
