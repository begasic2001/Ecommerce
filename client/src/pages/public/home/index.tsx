import { NewFeature, SaleFeature, SlideshowFeature, SpecialFeature } from '~/features/public/home';

function Home() {
  return (
    <section className="home">
      <SlideshowFeature />
      <SaleFeature />
      <SpecialFeature />
      <NewFeature />
    </section>
  );
}

export default Home;
