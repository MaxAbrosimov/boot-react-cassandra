package backend.product;

import backend.domain.Product;
import backend.product.dto.ProductDto;
import backend.product.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(value = "/api")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping(value = "/products/save", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity<ProductDto> saveProduct(@RequestBody ProductDto productDto) {
        return new ResponseEntity<>(productService.saveOrUpdate(productDto), OK);
    }

    @GetMapping(value = "/products/all", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity<List<ProductDto>> list() {
        return new ResponseEntity<>(productService.listAll(), OK);
    }

    @GetMapping(value = "/products/{pid}", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity<Product> load(@PathVariable String pid) {
        return new ResponseEntity<>(productService.getById(UUID.fromString(pid)), OK);
    }

    @DeleteMapping(value = "/products/{pid}", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity delete(@PathVariable String pid) {
        productService.delete(UUID.fromString(pid));
        return new ResponseEntity(OK);
    }

}
