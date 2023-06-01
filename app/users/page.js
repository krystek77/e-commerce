
import {TextInputRounded,Checkbox} from '@components'
import Link from 'next/link'
function Page(){


    return (
      <>
        <main className="container mx-auto px-4 pt-4 pb-8">
          <div className=" flex justify-center items-stretch">
            {/** login form */}
            <div className="flex-1 mr-12 py-8">
              <div className="">
                <p className="font-extrabold font-accent text-3xl mb-8">
                  Mam już konto
                </p>
                <TextInputRounded
                  required
                  id="email"
                  placeholder="Adres email"
                  label="Adres email"
                  error="error"
                />
                <TextInputRounded
                  required
                  type="password"
                  id="password"
                  placeholder="Hasło"
                  label="Hasło"
                />
                <button className="border border-primary-dark bg-primary rounded-full py-2 pl-6 pr-8 w-full font-extrabold font-accent text-2xl text-white mb-4 hover:bg-primary-light transition-element">
                  Zaloguj się
                </button>
                <Link
                  href="/"
                  className="text-sm text-accent-dark underline underline-offset-2 hover:text-accent transition-element"
                >
                  Nie pamiętam hasła
                </Link>
              </div>
            </div>
            {/** benefits */}
            <div className="border-4 max-w-sm border-primary  rounded-xl  flex-1 mr-12 p-8  mb-8">
              <div className="">
                <p className="font-extrabold font-accent text-3xl mb-4">
                  Korzyści z konta
                </p>
                <ul className="mb-8">
                  <li className="mb-2 flex justify-start items-center">
                    <span className="mr-4 text-primary">IKON</span>
                    <span>Zamawiasz szybciej, bo pamiętamy Twoje dane.</span>
                  </li>
                  <li className="mb-2 flex justify-start items-center">
                    <span className="mr-4 text-primary">IKON</span>
                    <span>Możesz łatwiej sprawdzić status zamówienia.</span>
                  </li>
                  <li className="mb-2 flex justify-start items-center">
                    <span className="mr-4 text-primary">IKON</span>
                    <span>
                      Masz dostęp do faktur i historii Twoich zakupów.
                    </span>
                  </li>
                  <li className="mb-2 flex justify-start items-center">
                    <span className="mr-4 text-primary">IKON</span>
                    <span>
                      Uzyskasz dostęp do wyjątkowych ofert, promocji i
                      konkursów.
                    </span>
                  </li>
                  <li className="mb-2 flex justify-start items-center">
                    <span className="mr-4 text-primary">IKON</span>
                    <span>
                      Możesz wstąpić do programu lojalnościowego - to nic nie
                      kosztuje!
                    </span>
                  </li>
                </ul>
              </div>
              <p className="font-extrabold text-lg">
                Rejestracja jest łatwa i zajmie Ci tylko chwilę.
              </p>
            </div>
            {/** sign up form */}
            <div className="flex-1 py-8 ">
              <div className="">
                <p className="font-extrabold font-accent text-3xl mb-8">
                  Nie mam konta
                </p>
                <TextInputRounded
                  id="email"
                  required
                  placeholder="Adres email"
                  label="Adres email"
                />
                <TextInputRounded
                  type="password"
                  required
                  id="password"
                  placeholder="Hasło"
                  label="Hasło"
                />
                <Checkbox
                  color="primary"
                  label="Akceptuję regulamin seriwsu oraz politykę prywatności, w której zawarto obowiązek informacyjny związany z przetwarzaniem danych osobowych"
                />
                <Checkbox
                  color="primary"
                  label="
                            marketingowych i handlowych (w tym poprzez używanie telekomunikacyjnych urządzeń końcowych i automatycznych systemów wywołujących zgodnie z ustawą z dnia 16 lipca 2004 rok - Prawo telekomunikacyjne).
                            "
                />
                <button className="border  border-primary-dark bg-primary rounded-full py-2 pl-6 pr-8 w-full font-extrabold font-accent text-2xl text-white mb-4 hover:bg-primary-light transition-element">
                  Załóż konto
                </button>
                <p className="text-xs">
                  Po założeniu konta, na podany przez Ciebie adres wyślemy maila
                  z linkiem do jego weryfikacji. Jeżeli nie otrzymasz maila
                  skontaktuj się z nami.
                </p>
              </div>
            </div>
          </div>
        </main>
        <section className='px-4 pt-2 pb-8'>
          <div className="container mx-auto">
            <p>Jeżeli masz problem z zalogowaniem się lub rejestracją, skontaktuj się z nami</p>
          </div>
        </section>
      </>
    );
}

export default Page;