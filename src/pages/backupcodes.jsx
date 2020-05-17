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


<div className="col-lg-4 col-sm-6">
    <a className="portfolio-box" href="/"
    ><img className="img-fluid product-type-categories" src={require("../assets/images/macaron-stack.jpg")} alt="type macaron" />
        <div className="portfolio-box-caption">
            <div className="project-category text-white-50">Category</div>
            <div className="project-name">Macarons</div>
        </div></a
    >
</div>
    <div className="col-lg-4 col-sm-6">
        <a className="portfolio-box" href="/"
        ><img className="img-fluid product-type-categories" src={require("../assets/images/bread-rustic.jpg")} alt="type bread" />
            <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Breads</div>
            </div></a
        >
    </div>
    <div className="col-lg-4 col-sm-6">
        <a className="portfolio-box" href="/"
        ><img className="img-fluid product-type-categories" src={require("../assets/images/donut-with-brown-sugar.jpg")} alt="type donut" />
            <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Donuts</div>
            </div></a
        >
    </div>
    <div className="col-lg-4 col-sm-6">
        <a className="portfolio-box" href="/"
        ><img className="img-fluid product-type-categories" src={require("../assets/images/pie-with-pumpkin.jpg")} alt="type pie" />
            <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Pies</div>
            </div></a
        >
    </div>
    <div className="col-lg-4 col-sm-6">
        <a className="portfolio-box" href="/"
        ><img className="img-fluid product-type-categories" src={require("../assets/images/cheese-cake-1765911_1920.jpg")} alt="type cake" />
            <div className="portfolio-box-caption p-3">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Cakes</div>
            </div></a
        >
    </div>
        </div >
      </div >
    </section > 