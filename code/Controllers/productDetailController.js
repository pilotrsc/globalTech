<<<<<<< HEAD
=======
const path = require('path');
const fs = require('fs');

/*const consoles = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/consoles.json"), "utf-8"));
const accesories = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/peripheralsAccesories.json"), "utf-8"));
const smartPhones = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/smartPhones.json"), "utf-8"));
const laptopsGamers = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/laptopsGamers.json"), "utf-8"));
const hardware = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/hardware.json"), "utf-8"));*/
const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8"));


const productDetailController ={
    productDetail: (req, res) => {
<<<<<<< HEAD
        res.render("productDetail", {consoles, accesories, smartPhones, laptopsGamers, hardware});
=======
        res.render("productDetail", products);
>>>>>>> refs/remotes/origin/main
    },
    detalleCrud: (req, res) => {
        let producto = products.find(products => products.nombre === req.params.nombre)
        res.render("productDetail", producto);
    }
};

module.exports = productDetailController;
>>>>>>> fb504d053c46e383c6d137598b30b8bdb1defe2d
