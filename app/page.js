import {BannerShowcase,LastWatched,Popular,Featured,Newsletter,ContactForm,AboutUs} from '@containers';

export default function Home() {
  return (
    <>
      <BannerShowcase />
      <LastWatched />
      <Popular />
      <Featured />
      <AboutUs />
      <Newsletter />
      <ContactForm />
    </>
  );
}

