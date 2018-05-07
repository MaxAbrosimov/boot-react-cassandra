package backend.converters;

import backend.domain.Product;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.core.convert.converter.Converter;

/**
 * Created by jt on 1/10/17.
 */
@Component
public class ProductFormToProduct implements Converter<Product, Product> {

    @Override
    public Product convert(Product productForm) {
        Product product = new Product();
        if (productForm.getId() != null  && !StringUtils.isEmpty(productForm.getId())) {
            product.setId(productForm.getId());
        }
        product.setName(productForm.getName());
        return product;
    }
}
