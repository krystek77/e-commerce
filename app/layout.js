import '@styles/globals.css';
import {Advantages,Header} from '@components'


export const metadata = {
    title:"E-commerce",
    description:"Industrial Laundry Systems"
}

export default function RootLayout({children}) {

  return (
    <html lang="pl" className="font-html text-black">
      <body>
        <Advantages />
        <Header />
        {children}
        <div className='max-w-lg mx-auto'>

        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore
          perspiciatis recusandae blanditiis vel pariatur quasi. Nesciunt ullam
          consequatur sunt, totam ab odit, aliquam alias, aperiam vel
          consequuntur voluptatibus unde?
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore
          perspiciatis recusandae blanditiis vel pariatur quasi. Nesciunt ullam
          consequatur sunt, totam ab odit, aliquam alias, aperiam vel
          consequuntur voluptatibus unde?
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore
          perspiciatis recusandae blanditiis vel pariatur quasi. Nesciunt ullam
          consequatur sunt, totam ab odit, aliquam alias, aperiam vel
          consequuntur voluptatibus unde?
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore
          perspiciatis recusandae blanditiis vel pariatur quasi. Nesciunt ullam
          consequatur sunt, totam ab odit, aliquam alias, aperiam vel
          consequuntur voluptatibus unde?
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore
          perspiciatis recusandae blanditiis vel pariatur quasi. Nesciunt ullam
          consequatur sunt, totam ab odit, aliquam alias, aperiam vel
          consequuntur voluptatibus unde?
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore
          perspiciatis recusandae blanditiis vel pariatur quasi. Nesciunt ullam
          consequatur sunt, totam ab odit, aliquam alias, aperiam vel
          consequuntur voluptatibus unde?
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore
          perspiciatis recusandae blanditiis vel pariatur quasi. Nesciunt ullam
          consequatur sunt, totam ab odit, aliquam alias, aperiam vel
          consequuntur voluptatibus unde?
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore
          perspiciatis recusandae blanditiis vel pariatur quasi. Nesciunt ullam
          consequatur sunt, totam ab odit, aliquam alias, aperiam vel
          consequuntur voluptatibus unde?
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore
          perspiciatis recusandae blanditiis vel pariatur quasi. Nesciunt ullam
          consequatur sunt, totam ab odit, aliquam alias, aperiam vel
          consequuntur voluptatibus unde?
        </p>
        </div>
      </body>
    </html>
  );
}