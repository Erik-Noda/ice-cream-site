'use client'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default function Carousel({ slides }: { slides: any }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className="w-[80vw]">
            <Slider {...settings}>
                {slides.map((slide: any, index: number) => (
                    <div key={index} className="relative w-[100px] h-[500px]">
                        <Image
                            src={slide.img}
                            alt="alt"
                            fill
                            style={{
                                objectFit: 'contain'
                            }}
                        />
                        <div className="flex justify-center items-center bg-primary-300 rounded-full h-10 ">
                            <h3 className="font-fredoka text-xl">
                                {slide.flavor}
                            </h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
