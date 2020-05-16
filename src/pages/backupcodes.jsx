export const getRes = (category) => {
    console.warn("cek dari getRes action", category);
    return async (dispatch) => {
        const response = await axios.get("http://0.0.0.0:5050/product/" + category);

        dispatch({
            type: "REQUEST_LIST_PRODUCT_DETAILS",
            payload: response.data,
        });
    };
};


<div class="col-lg-4 col-sm-6">
    <a class="portfolio-box" href="/"
    ><img class="img-fluid product-type-categories" src={require("../assets/images/macaron-stack.jpg")} alt="type macaron" />
        <div class="portfolio-box-caption">
            <div class="project-category text-white-50">Category</div>
            <div class="project-name">Macarons</div>
        </div></a
    >
</div>
    <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="/"
        ><img class="img-fluid product-type-categories" src={require("../assets/images/bread-rustic.jpg")} alt="type bread" />
            <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Breads</div>
            </div></a
        >
    </div>
    <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="/"
        ><img class="img-fluid product-type-categories" src={require("../assets/images/donut-with-brown-sugar.jpg")} alt="type donut" />
            <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Donuts</div>
            </div></a
        >
    </div>
    <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="/"
        ><img class="img-fluid product-type-categories" src={require("../assets/images/pie-with-pumpkin.jpg")} alt="type pie" />
            <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Pies</div>
            </div></a
        >
    </div>
    <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="/"
        ><img class="img-fluid product-type-categories" src={require("../assets/images/cheese-cake-1765911_1920.jpg")} alt="type cake" />
            <div class="portfolio-box-caption p-3">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Cakes</div>
            </div></a
        >
    </div>
        </div >
      </div >
    </section > 