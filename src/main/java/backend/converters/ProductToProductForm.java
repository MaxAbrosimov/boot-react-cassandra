package backend.converters;

import backend.domain.Product;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Created by jt on 1/10/17.
 */
@Component
public class ProductToProductForm implements Converter<Product, Product> {
    @Override
    public Product convert(Product product) {
        Product productForm = new Product();
        productForm.setId(product.getId());
        productForm.setName(product.getName());
        return productForm;
    }
}
