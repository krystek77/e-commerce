"use client"
import {useState} from 'react'
import {TextInput,Checkbox,FormButton,MarketingAgreement} from '@components'
import Link from 'next/link'
import {IoPerson} from '@react-icons/all-files/io5/IoPerson'
import {MdShoppingCart} from '@react-icons/all-files/md/MdShoppingCart'
import {FaFileInvoice} from '@react-icons/all-files/fa/FaFileInvoice'
import {GiGoldBar} from '@react-icons/all-files/gi/GiGoldBar'
import {GiReceiveMoney} from '@react-icons/all-files/gi/GiReceiveMoney'
import {BsPhone} from '@react-icons/all-files/bs/BsPhone'

function Page(){
  const [login,setLogin] = useState({email:"",password:""});
  const [signup,setSignup] = useState({email:"",password:"",status:false,marketing:true})

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    console.log("Zaloguj - formData",Object.fromEntries(formData))
  }
  const handleSignup = (event)=>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    console.log("Załóż konto - formData",Object.fromEntries(formData));
  }
  const handleCheckbox = (event)=>{
    console.log(event.target.name);
    setSignup({...signup,[event.target.name]:!signup[event.target.name]})
  }
  const handleInput = (event)=> {
    console.log(event.target.name)
    if(event.target.id === "signupEmail" || event.target.id === "signupPassword"){
      setSignup({...login,[event.target.name]:event.target.value})
    }
    else if(event.target.id === "loginEmail" || event.target.id === "loginPassword"){
      setLogin({...login,[event.target.name]:event.target.value})
    }
  }
  console.log("LOGIN DATA",login);
  console.log("SIGNUP DATA",signup)
  
    return (
      <>
        <main className="container mx-auto px-4 pt-4 pb-8">
          <div className=" flex justify-center items-stretch">
            {/** login form */}
            <div className="flex-1 mr-12 py-8">
                <p className="font-extrabold font-accent text-3xl mb-8"> Mam już konto </p>
                <form onSubmit={handleLogin} name="loginForm">
                  <TextInput required id="loginEmail" name="email" handleChange={handleInput} value={login.email} type="text" placeholder="Adres email" label="Adres email" error="error" />
                  <TextInput required id="loginPassword" name="password" handleChange={handleInput} value={login.password} type="password"  placeholder="Hasło" label="Hasło" error="" />
                  <FormButton type="submit" label="Zaloguj się"/>
                </form>
                <Link href="/" className="link text-sm" > Nie pamiętam hasła </Link>
              </div>
            {/** benefits */}
            <div className="border-4 max-w-sm border-primary  rounded-xl  flex-1 mr-12 p-8  mb-8">
              <div className="">
                <p className="font-extrabold font-accent text-3xl mb-4"> Korzyści z konta </p>
                <ul className="mb-8">
                  <li className="mb-4 flex justify-start items-center"> <IoPerson className='mr-4 text-primary w-10 h-10'/> <span>Zamawiasz szybciej, bo pamiętamy Twoje dane.</span> </li>
                  <li className="mb-4 flex justify-start items-center"> <MdShoppingCart className='mr-4 text-primary w-10 h-10'/> <span>Możesz łatwiej sprawdzić status zamówienia.</span> </li>
                  <li className="mb-4 flex justify-start items-center"> <FaFileInvoice className='mr-4 text-primary w-10 h-10'/> <span> Masz dostęp do faktur i historii Twoich zakupów. </span> </li>
                  <li className="mb-4 flex justify-start items-center"> <GiReceiveMoney className='mr-4 text-primary w-10 h-10'/> <span> Uzyskasz dostęp do wyjątkowych ofert, promocji i konkursów. </span> </li>
                  <li className="mb-4 flex justify-start items-center"> <GiGoldBar className='mr-4 text-primary w-10 h-10'/> <span> Możesz wstąpić do programu lojalnościowego - to nic nie kosztuje! </span> </li>
                </ul>
              </div>
              <p className="font-extrabold text-lg"> Rejestracja jest łatwa i zajmie Ci tylko chwilę. </p>
            </div>
            {/** sign up form */}
            <div className="flex-1 py-8 ">
                <p className="font-extrabold font-accent text-3xl mb-8"> Nie mam konta </p>
                <form onSubmit={handleSignup} name="signupForm">
                  <TextInput id="signupEmail" name="email" value={signup.email} handleChange={handleInput} required placeholder="Adres email" label="Adres email" />
                  <TextInput id="signupPassword" name="password" value={signup.password} handleChange={handleInput} type="password" required  placeholder="Hasło" label="Hasło" />
                  <Checkbox color="primary" id="status" name="status" stateCheckbox={signup.status} handleCheckbox={handleCheckbox}>
                    <p className='ml-4 text-sm'>
                      [<span className='text-primary'> * </span>] 
                      Akceptuję regulamin serwisu 
                      <Link className='link' href="/">P.P.U.P Pralma sp. z o.o.</Link> 
                      oraz 
                      <Link className='link' href="/polityka-prywatnosci">Politykę prywatności</Link>, 
                      w której zawarto obowiązek informacyjny związany z przetwarzeniam danych
                    </p>
                  </Checkbox>
                  <MarketingAgreement color="primary" id="marketing" name="marketing" stateCheckbox={signup.marketing} handleCheckbox={handleCheckbox}/>
                  <FormButton type="submit" label="Załóż konto"/>
                </form>
                <p className="text-xs max-w-sm mx-auto">
                  Po założeniu konta, na podany przez Ciebie adres wyślemy maila
                  z linkiem do jego weryfikacji. Jeżeli nie otrzymasz maila
                  <Link className='link pl-1' href="/kontakt">skontaktuj się z nami.</Link>
                </p>
            </div>
          </div>
        </main>
        <section className='px-4 py-8 border-t border-b border-black-light'>
          <div className="container mx-auto">
            <div className='flex justify-start items-center'>
              <p className='mr-2 text-lg'>Jeżeli masz problem z zalogowaniem się lub rejestracją, skontaktuj się z nami</p>
              <Link className='flex justify-start items-center' href="tel:602191607"> <BsPhone className='w-10 h-10 text-black'/> <span className='whitespace-nowrap text-lg text-black font-bold'>602 191 607</span> </Link>
            </div>
            <div>
              <div><span className='inline-block min-w-[100px] mr-1'>pon. - pt.:</span><span className='font-bold mr-2'>7:00 - 15:00</span></div>
              <div><span className='inline-block min-w-[100px] mr-1'>sob.:</span><span className='font-bold mr-2'>7:00 - 15:00</span><span className='text-primary underline underline-offset-2 text-sm'>infolinia nieczynna</span></div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Page;