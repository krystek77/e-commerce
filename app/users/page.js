
import {TextInput,Checkbox,FormButton} from '@components'
import Link from 'next/link'
import {IoPerson} from '@react-icons/all-files/io5/IoPerson'
import {MdShoppingCart} from '@react-icons/all-files/md/MdShoppingCart'
import {FaFileInvoice} from '@react-icons/all-files/fa/FaFileInvoice'
import {GiGoldBar} from '@react-icons/all-files/gi/GiGoldBar'
import {GiReceiveMoney} from '@react-icons/all-files/gi/GiReceiveMoney'
function Page(){


    return (
      <>
        <main className="container mx-auto px-4 pt-4 pb-8">
          <div className=" flex justify-center items-stretch">
            {/** login form */}
            <div className="flex-1 mr-12 py-8">
              <div className="">
                <p className="font-extrabold font-accent text-3xl mb-8"> Mam już konto </p>
                <TextInput required id="email" placeholder="Adres email" label="Adres email" error="error" />
                <TextInput required type="password" id="password" placeholder="Hasło" label="Hasło" />
                <FormButton label="Zaloguj się"/>
                <Link href="/" className="link text-sm" > Nie pamiętam hasła </Link>
              </div>
            </div>
            {/** benefits */}
            <div className="border-4 max-w-sm border-primary  rounded-xl  flex-1 mr-12 p-8  mb-8">
              <div className="">
                <p className="font-extrabold font-accent text-3xl mb-4">
                  Korzyści z konta
                </p>
                <ul className="mb-8">
                  <li className="mb-4 flex justify-start items-center">
                    <IoPerson className='mr-4 text-primary w-10 h-10'/>
                    <span>Zamawiasz szybciej, bo pamiętamy Twoje dane.</span>
                  </li>
                  <li className="mb-4 flex justify-start items-center">
                    <MdShoppingCart className='mr-4 text-primary w-10 h-10'/>
                    <span>Możesz łatwiej sprawdzić status zamówienia.</span>
                  </li>
                  <li className="mb-4 flex justify-start items-center">
                    <FaFileInvoice className='mr-4 text-primary w-10 h-10'/>
                    <span>
                      Masz dostęp do faktur i historii Twoich zakupów.
                    </span>
                  </li>
                  <li className="mb-4 flex justify-start items-center">
                    <GiReceiveMoney className='mr-4 text-primary w-10 h-10'/>
                    <span>
                      Uzyskasz dostęp do wyjątkowych ofert, promocji i
                      konkursów.
                    </span>
                  </li>
                  <li className="mb-4 flex justify-start items-center">
                    <GiGoldBar className='mr-4 text-primary w-10 h-10'/>
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
                <p className="font-extrabold font-accent text-3xl mb-8"> Nie mam konta </p>
                <TextInput id="email" required placeholder="Adres email" label="Adres email" />
                <TextInput type="password" required id="password" placeholder="Hasło" label="Hasło" />
                <Checkbox color="primary">
                  <p className='ml-4 text-sm'>
                    [<span className='text-primary'> * </span>] 
                    Akceptuję regulamin serwisu 
                    <Link className='link' href="/">P.P.U.P Pralma sp. z o.o.</Link> 
                    oraz 
                    <Link className='link' href="/polityka-prywatnosci">Politykę prywatności</Link>, 
                    w której zawarto obowiązek informacyjny związany z przetwarzeniam danych
                  </p>
                </Checkbox>
                <Checkbox color="primary">
                  <p className='ml-4 text-sm'>
                    Wyrażam zgodę na przesyłanie przez 
                    <Link className='link' href="/">P.P.U.P Pralma sp. z o.o.</Link> 
                    na mój <b className='font-bold'>email</b> informacji marketingowych i handlowych (w tym poprzez używanie telekomunikacyjnych urządzeń końcowych i automatycznych systemów wywołujących zgodnie z ustawą z dnia 16 lipca 2014 roku <b className='font-bold'>Prawo telekomunikacyjne</b>)
                  </p>
                </Checkbox>
                <FormButton label="Załóż konto"/>
                <p className="text-xs max-w-sm mx-auto">
                  Po założeniu konta, na podany przez Ciebie adres wyślemy maila
                  z linkiem do jego weryfikacji. Jeżeli nie otrzymasz maila
                  <Link className='link pl-1' href="/kontakt">skontaktuj się z nami.</Link>
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