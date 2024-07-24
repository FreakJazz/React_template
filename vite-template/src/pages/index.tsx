import { usePageView } from '../hooks/use-page-view';
import { HomeCta } from '../sections/home/home-cta';
import { HomeFaqs } from '../sections/home/home-faqs';
import { HomeFeatures } from '../sections/home/home-features';
import { HomeHero } from '../sections/home/home-hero';
import { HomeModule } from '../sections/home/home-module';
import { HomeReviews } from '../sections/home/home-reviews';
import { Slider } from '../layouts/marketing/slider';

const Page = () => {
  usePageView();

  return (
      <main>
        <Slider />
        <HomeModule />
        {/* <HomeHero />
        <HomeFeatures />
        <HomeReviews />
        <HomeCta />
        <HomeFaqs /> */}
      </main>
  );
};

export default Page;
