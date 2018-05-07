package backend.product.converters;

import backend.domain.Product;
import backend.product.dto.ProductDto;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.core.convert.converter.Converter;

@Component
public class DtoToProduct implements Converter<ProductDto, Product> {

    @Override
    public Product convert(ProductDto dto) {
        Product product = new Product();
        if (dto.getId() != null  && !StringUtils.isEmpty(dto.getId())) {
            product.setId(dto.getId());
        }
        product.setName(dto.getName());
        return product;
    }
}
