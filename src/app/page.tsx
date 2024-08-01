'use client';
import Slider, {Settings as SliderSettings} from 'react-slick';
import Image from 'next/image';

import BaseLayout from '@/components/BaseLayout';
import Contentwrapper from '@/components/ContentWrapper';
import HeroImageMobile from '@/images/homePage/hero_image_mobile.png';
import HeroImageTablet from '@/images/homePage/hero_image_tablet.png';
import HeroImageDesktop from '@/images/homePage/hero_image_desktop.png';
import SlideImageOne from '@/images/homePage/carouselImages/slide_image_one.png';
import SlideImageTwo from '@/images/homePage/carouselImages/slide_image_two.png';
import SlideImageThree from '@/images/homePage/carouselImages/slide_image_three.png';
import SlideImageFour from '@/images/homePage/carouselImages/slide_image_four.png';
import SlideImageFive from '@/images/homePage/carouselImages/slide_image_five.png';
import HomeImageTabletOne from '@/images/homePage/tablet_image_home_one.png';
import HomeImageTabletTwo from '@/images/homePage/tablet_image_home_two.png';
import HomeImageTabletThree from '@/images/homePage/tablet_image_home_three.png';
import HomeImageTabletFour from '@/images/homePage/tablet_image_home_four.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useMediaQuery from '@/utils/mediaQuery';

export default function Home() {
  const slideImages = [
    {image: SlideImageOne, alt: 'Madhuri Parson New York Yesterday Today'},
    {image: SlideImageTwo, alt: 'Syndicate'},
    {image: SlideImageThree, alt: 'Social Governance'},
    {image: SlideImageFour, alt: 'Madhuri Parson New York Yesterday'},
    {image: SlideImageFive, alt: 'Save the Hazlit'},
  ];

  const homeTabletImages = [
    {image: HomeImageTabletOne, alt: 'Madhuri Parson New York Yesterday Today'},
    {image: HomeImageTabletTwo, alt: 'Syndicate'},
    {image: HomeImageTabletThree, alt: 'Social Governance'},
    {image: HomeImageTabletFour, alt: 'Save the Hazlit'},
  ];

  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

  const jayName = 'Jay William Whittington Barrette';

  const sliderSettings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <BaseLayout>
      <Contentwrapper className="flex items-center">
        <div className="text-center mb-32 md:mb-14">
          <h1 className="font-krub text-base font-semibold md:text-2xl lg:text-4xl">
            {jayName}
          </h1>
          <p className="font-judson text-textLightGrey md:text-xl lg:text-2xl">
            Filmmaker
          </p>
        </div>
        <Image
          className="mb-32 md:justify-self-center md:mb-20"
          alt={jayName}
          src={
            isMobile
              ? HeroImageMobile
              : isTablet
                ? HeroImageTablet
                : HeroImageDesktop
          }
        />
        <div className="mb-20 md:text-center">
          <h2 className="font-krub text-base font-semibold md:mb-6 md:text-2xl lg:text-4xl">
            Bio
          </h2>
          <p className="font-judson text-textLightGrey leading-5 md:text-xl md:leading-6 lg:text-2xl">
            Jay Whittington is a cinematographer with a background in
            photography and performing arts, Canadian born, he completed his
            studies in Quebec and is based in London since 2016. Jay has
            experience working across a range of projects and styles including
            commercials, music videos, and documentaries as well as having
            worked on multiple award winning short films. He occasionally
            directs passion projects to expand on his creative endeavours.
          </p>
        </div>
        {isMobile && (
          <Slider className="mb-20" {...sliderSettings}>
            {slideImages.map(image => (
              <Image key={image.alt} alt={image.alt} src={image.image} />
            ))}
          </Slider>
        )}
        {!isMobile && (
          <div className="grid grid-rows-2 grid-cols-2 gap-4 mb-20">
            {homeTabletImages.map(image => (
              <Image key={image.alt} alt={image.alt} src={image.image} />
            ))}
          </div>
        )}
      </Contentwrapper>
    </BaseLayout>
  );
}
