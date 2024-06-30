import type { NextPage } from "next";
import { useTheme } from "@mui/material/styles";
import { Seo } from "../app/components/seo";
import { usePageView } from "../app/hooks/use-page-view";
import { Layout as MarketingLayout } from "../app/layouts";
import { HomePrincipal } from "../app/components/blogs/home-principal";
import { HomeReviews } from "../app/components/blogs/home-reviews";
import {HomeText } from "../app/components/blogs/home-text";
import { SliderPrincipal } from "../app/components/slider/slider-principal";
import { Contact } from "../app/components/contact/index";
import { ArticleCenter } from "../app/components/articles/article-center"
import { ArticleLeft } from "../app/components/articles/article-left"
import { ArticleRight } from "../app/components/articles/article-right"
import Grid from '@mui/material/Unstable_Grid2';
import { OverviewTips } from 'src/app/components/slider/slider-test';
import { BannerPrincipal } from 'src/app/components/banner/banner-principal';

interface Item {
  image: string;
  newTab?: boolean;
  path: string;
  subtitle: string;
  title: string;
}

interface Section {
  title: string;
  items: Item[];
}

const SliderData = [
  {
    id: "79f8212e4245e4c11952f2cf",
    title: "IOT with Python",
    urlImage: "/assets/slider-images/python.png",
    content:
      "IOT with Python IOT with Python IOT with Python IOT with Python IOT with Python IOT with Python IOT with Python IOT with Python IOT with Python IOT with Python IOT with Python IOT with Python IOT with Python IOT with PythonIOT with Python",
  },
  {
    id: "78900987676ghyhrf57h",
    title: "PYQT with PYTHON",
    urlImage: "/assets/slider-images/python.png",
    content:
      "PYQT with PYTHON PYQT with PYTHONPYQT with PYTHONPYQT with PYTHONPYQT with PYTHONPYQT with PYTHONPYQT with PYTHONPYQT with PYTHONPYQT with PYTHON",
  },
  {
    id: "78900987676ghyhrf57h",
    title: "React Realidad aumentada",
    urlImage: "/assets/slider-images/react.png",
    content:
      "React Realidad aumentada React Realidad aumentadaReact Realidad aumentadaReact Realidad aumentadaReact Realidad aumentadaReact Realidad aumentadaReact Realidad aumentadaReact Realidad aumentadaReact Realidad aumentadaReact Realidad aumentada React Realidad aumentadaReact Realidad aumentadaReact Realidad aumentada",
  },
  {
    id: "78900987676ghyhrf57h",
    title: "PYQT with PYTHON",
    urlImage: "/assets/slider-images/python.png",
    content:
      "PYQT with PYTHON PYQT with PYTHONPYQT with PYTHONPYQT with PYTHONPYQT with PYTHONPYQT with PYTHONPYQT with PYTHONPYQT with PYTHONPYQT with PYTHON",
  },
];


const Page: NextPage = () => {
  const theme = useTheme();
  usePageView();
  return (
    <>
      <Seo title="Components" />
      <HomePrincipal />
      <BannerPrincipal
        imageUrl="/assets/banner-images/image.jpg"
        title="Welcome to Our Website"
        subtitle="This is the principal banner, Come on take your time to describe your bussiness"
      />
      <ArticleCenter />
      <ArticleLeft />
      <ArticleRight />
      <SliderPrincipal data={SliderData} sx={{ height: '100%' }} />
      <HomeReviews />
      <HomeText />
      <Contact />
    </>
  );
};

Page.getLayout = (page) => <MarketingLayout>{page}</MarketingLayout>;

export default Page;
