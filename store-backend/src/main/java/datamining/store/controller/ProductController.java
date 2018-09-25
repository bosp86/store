package datamining.store.controller;

// import datamining.store.domain.User;
// import datamining.store.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import datamining.store.service.ProductService;

@RestController()
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;

    private static final Logger LOG = LoggerFactory.getLogger(ProductController.class);

    public static final String HELLO_TEXT = "Hello from Spring Boot Backend!";

    @RequestMapping(path = "/product/list", method = RequestMethod.GET)
    public Object getProductList() {

        return productService.getProductList();

    }

    @RequestMapping(path = "/product/detail", method = RequestMethod.GET)
    public Object getProductDetail(@RequestParam("id") Integer id) {
        LOG.info("id == " + id);

        return productService.getProductDetail(id);

    }

    @RequestMapping(path = "/product/buy", method = RequestMethod.POST)
    public String buyProduct(Object product) {

        return null;
    }

    // @Autowired
    // private UserRepository userRepository;

    // @RequestMapping(path = "/hello")
    // public @ResponseBody String sayHello() {
    // LOG.info("GET called on /hello resource");
    // return HELLO_TEXT;
    // }

    // @RequestMapping(path = "/user", method = RequestMethod.POST)
    // @ResponseStatus(HttpStatus.CREATED)
    // public @ResponseBody long addNewUser(@RequestParam String firstName,
    // @RequestParam String lastName) {
    // User user = new User(firstName, lastName);
    // userRepository.save(user);

    // LOG.info(user.toString() + " successfully saved into DB");

    // return user.getId();
    // }

    // @GetMapping(path = "/user/{id}")
    // public @ResponseBody User getUserById(@PathVariable("id") long id) {
    // LOG.info("Reading user with id " + id + " from database.");
    // return userRepository.findById(id).get();
    // }

}
