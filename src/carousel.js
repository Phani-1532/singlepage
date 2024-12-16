function Carousel() {
    return (
        <div>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://media.istockphoto.com/id/477291181/photo/dunfermline-church.jpg?s=612x612&w=0&k=20&c=fJRy-cBSFExMQ1krXPRyW_XdZyeJ1bmkixaQf4lHpaY="></img>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.shutterstock.com/shutterstock/videos/3453980429/thumb/12.jpg?ip=x480"></img>
                    </div>
                    <div class="carousel-item">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/051/735/626/small_2x/of-a-flat-stone-with-nature-landscape-in-the-background-photo.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel;