package backend;

import backend.domain.Product;
import backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(value = "/api")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping(value = "/products/save", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity<Product> saveProduct(@RequestBody Product product) {

        return new ResponseEntity<>(productService.saveOrUpdate(product), OK);
    }

    @GetMapping(value = "/products/all", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity<List<Product>> list() {
        return new ResponseEntity<>(productService.listAll(), OK);
    }

}
