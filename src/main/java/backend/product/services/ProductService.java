package backend.product.services;


import backend.domain.Product;
import backend.product.dto.ProductDto;

import java.util.List;
import java.util.UUID;

public interface ProductService {

    List<ProductDto> listAll();

    Product getById(UUID id);

    ProductDto saveOrUpdate(ProductDto product);

    void delete(UUID id);

}
