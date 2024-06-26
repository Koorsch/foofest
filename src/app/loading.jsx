import Section from "./components/Section";
import Image from "next/image";

function Loading() {
  return (
    <Section  title={null} customStyle="mx-auto items-center justify-center">
      <Image src={"/assets/img/FooFestLogo.webp"} alt={"logo"} width={900} height={600}></Image>
      <h2>Vent venligst vi loader din side</h2>
    </Section>
  )
}

export default Loading;