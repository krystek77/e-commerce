import {BannerShowcase,LastWatched,Popular,Featured,Newsletter,ContactForm,AboutUs} from '@containers';
import {TextInput} from '@components'
export default function Home() {
  return (
    <>
      {/** temporary stuff */}
      <TextInput
        id="title"
        label="tytuł"
        name="title"
        value=""
        onChaneg={() => {}}
        placeholder="some placeholder"
        required
        // error="Tytuł musi posiadać co najmniej 10 znaków"
      />
      <TextInput
        id="model"
        label="model"
        name="model"
        value=""
        onChaneg={() => {}}
        placeholder="some placeholder"
        error="Model musi posiadać co najmniej 3 znaki"
      />
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

