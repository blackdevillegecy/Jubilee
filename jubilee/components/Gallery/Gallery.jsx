import styles from "./Gallery.module.css";
import Image from "next/image";
import Carousel from 'better-react-carousel'

function Gallery() {
    return (
        <div style={{marginBottom: '2vh'}}>
            <Carousel cols={3} rows={1} gap={30}>
            <Carousel.Item>
                <Image src="/gallery/image1.jpeg" width={500} height={345} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/gallery/image2.jpeg" width={500} height={345} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/gallery/image3.jpeg" width={500} height={345} />
            </Carousel.Item>
            {/* ... */}
            <Carousel.Item>
                <Image src="/gallery/image4.jpeg" width={500} height={345} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/gallery/image5.jpeg" width={500} height={345} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/gallery/image6.jpeg" width={500} height={345} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/gallery/image7.jpeg" width={500} height={345} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/gallery/image8.jpeg" width={500} height={345} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/gallery/image1.jpeg" width={500} height={345} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/gallery/image1.jpeg" width={500} height={345} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/gallery/image1.jpeg" width={500} height={345} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/gallery/image1.jpeg" width={500} height={345} />
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Gallery;