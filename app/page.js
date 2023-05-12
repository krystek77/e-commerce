import {Button, OutlineButton, ProductCard} from '@components'

export default function Home(){
  return <>
    <ProductCard/>
    <br/>
    <Button type="button" label="zobacz ofertę"/>
    <br/>
    <OutlineButton type="button" label="wyloguj"/>
  </>
}

