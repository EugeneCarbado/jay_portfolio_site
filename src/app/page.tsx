'use client';
import Slider, {Settings as SliderSettings} from 'react-slick';
import Image from 'next/image';

import BaseLayout from '@/components/BaseLayout';
import Contentwrapper from '@/components/ContentWrapper';
import HeroImage from '@/images/homePage/hero_image.png';
import SlideImageOne from '@/images/homePage/carouselImages/slide_image_one.png';
import SlideImageTwo from '@/images/homePage/carouselImages/slide_image_two.png';
import SlideImageThree from '@/images/homePage/carouselImages/slide_image_three.png';
import SlideImageFour from '@/images/homePage/carouselImages/slide_image_four.png';
import SlideImageFive from '@/images/homePage/carouselImages/slide_image_five.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const slideImages = [
    {image: SlideImageOne, alt: 'Madhuri Parson New York Yesterday Today'},
    {image: SlideImageTwo, alt: 'Syndicate'},
    {image: SlideImageThree, alt: 'Social Governance'},
    {image: SlideImageFour, alt: 'Madhuri Parson New York Yesterday'},
    {image: SlideImageFive, alt: 'Save the Hazlit'},
  ];

  const sliderSettings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <BaseLayout className="">
      <Contentwrapper className="full-width">
        <div className="text-center mb-32">
          <h1 className="font-krub text-base font-semibold">
            Jay William Whittington Barrette
          </h1>
          <p className="font-judson text-textLightGrey">Filmmaker</p>
        </div>
        <Image
          className="mb-32"
          alt="Jay William Whittington Barrette"
          src={HeroImage}
        />
        <div className="mb-20">
          <h2 className="font-krub text-base font-semibold">Bio</h2>
          <p className="font-judson text-textLightGrey leading-5">
            Jay Whittington is a cinematographer with a background in
            photography and performing arts, Canadian born, he completed his
            studies in Quebec and is based in London since 2016. Jay has
            experience working across a range of projects and styles including
            commercials, music videos, and documentaries as well as having
            worked on multiple award winning short films. He occasionally
            directs passion projects to expand on his creative endeavours.
          </p>
        </div>
        <Slider className="mb-60" {...sliderSettings}>
          {slideImages.map(image => (
            <Image key={image.alt} alt={image.alt} src={image.image} />
          ))}
        </Slider>
      </Contentwrapper>
    </BaseLayout>
  );
}
