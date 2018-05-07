package backend.product.services;

import backend.product.converters.DtoToProduct;
import backend.domain.Product;
import backend.product.converters.ProductToDto;
import backend.product.dto.ProductDto;
import backend.product.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;
    private DtoToProduct dtoToProduct;
    private ProductToDto productToDto;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository, DtoToProduct dtoToProduct, ProductToDto productToDto) {
        this.productRepository = productRepository;
        this.dtoToProduct = dtoToProduct;
        this.productToDto = productToDto;
    }


    @Override
    public List<ProductDto> listAll() {
        List<ProductDto> products = new ArrayList<>();
        productRepository.findAll().forEach(product -> products.add(productToDto.convert(product)));
        return products;
    }

    @Override
    public Product getById(UUID id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public ProductDto saveOrUpdate(ProductDto dto) {
        productRepository.save(dtoToProduct.convert(dto));
        return dto;
    }

    @Override
    public void delete(UUID id) {
        productRepository.deleteById(id);
    }
}
