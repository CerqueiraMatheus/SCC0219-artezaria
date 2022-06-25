import ItemCard from './ItemCard';
import Grid from '@mui/material/Grid';
import Carousel from "react-multi-carousel";

const ItemList = ({title, items}) => (
    <>
        {/* Title */}
        <h1 className="left-aligned">{`${title}`}</h1>

        {/* Carousel */}
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={5000}
            centerMode={false}
            className="carousel"
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {/* Items */}
            {items?.map((item) => (
                <Grid item xs={12} sm={6} lg={3} key={item.id}>
                    <ItemCard {...item} />
                </Grid>
            ))}
        </Carousel>
    </>
);

export default ItemList;
