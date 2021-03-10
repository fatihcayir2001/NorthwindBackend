import { Product } from 'src/app/models/product';
import { ResponseModel } from 'src/app/models/responseModel';

export interface ProductResponseModel extends ResponseModel {
  data: Product[]
}
