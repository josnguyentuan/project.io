var products = [{
        name: 'BAG DARK BEIGE',
        img: 'upload-image/product-img/product-img-6.jpg',
        price: 66.50
    },
    {
        name: 'SHOES MAROON',
        img: 'upload-image/product-img/product-img-3.jpg',
        price: 80.99
    },
    {
        name: 'UNISEX CAP',
        img: 'upload-image/product-img/product-img-2.jpg',
        price: 99.99
    },
    {
        name: 'HANDS WINTER',
        img: 'upload-image/product-img/product-img-1.jpg',
        price: 15.00
    },
    {
        name: 'PATTERNED SCARF',
        img: 'upload-image/product-img/product-img-10.jpg',
        price: 33.99
    },
    {
        name: 'TWILL SILK SCARF',
        img: 'upload-image/product-img/product-img-9.jpg',
        price: 49.99
    },
    {
        name: 'MEN CAP',
        img: 'upload-image/product-img/product-img-5.jpg',
        price: 25.00
    },
    {
        name: 'BAG MARRON',
        img: 'upload-image/product-img/product-img-7.jpg',
        price: 75.99
    },
    {
        name: 'BAG MARRON',
        img: 'upload-image/product-img/product-img-8.jpg',
        price: 75.99
    },

];

document.addEventListener('DOMContentLoaded', function() {
    renderProductsShop();
});


function renderProductsShop() {
    var html = '';
    for (var product of products) {
        html += '<div class="col-md-4 col-sm-6 pb-5">';
        html += '<div class="product-img">';
        html += '  <img src="' + product.img + '">';
        html += ' <div class="box-content">';
        html += '<ul class="icon d-flex justify-content-center">';
        html += '<li><a href="#"><i class="fas fa-sshopping-bag"></i></a></li>';
        html += '        <li><a href="#"><i class="fa fa-heart"></i></a></li>';
        html += '        <li><a href="#"><i class="fa fa-search"></i></a></li>';
        html += '     </ul>';
        html += '  </div>';
        html += ' </div>';
        html += ' <div class="product-body text-center">';
        html += '     <div class="product-name">';
        html += '      <a href="#">' + product.name + '</a>';
        html += '  </div>';
        html += '<span> <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></span>';
        html += '  <div class="product-price">';
        html += '<span>' + '$' + product.price + '</span>';
        html += '   </div>';
        html += '</div>';
        html += ' </div>';

    }
    var productsList = document.getElementById("productsShop ");
    productsList.innerHTML = html;
}