import Container from "./components/Container";
import FAQItemsList from "./components/FAQItemList";
import ImgSlider from "./components/ImgSlider";
import InfinityString from "./components/InfinityString/InfinityString";
import MindMapGrid from "./components/MindMapGrid";
import MindMapSlider from "./components/MindMapSlider";

export default function Home() {
  return (
    <main className="">
      <InfinityString />
      <section className="mt-[60px] md:mt-[80px] lg:mt-[120px]">
        <Container>
          <h2 className="font-right-grotesk font-bold leading-tini text-4xl md:text-5xl lg:text-6xl uppercase text-center mb-[24px] md:mb-[40px] lg:mb-[80px]">
            MIND map
          </h2>
          <MindMapGrid />
          <MindMapSlider />
        </Container>
      </section>
      <section className="mt-[60px] md:mt-[80px] lg:mt-[120px]">
        <Container>
          <h2 className="font-right-grotesk font-bold leading-tini text-4xl md:text-5xl lg:text-6xl uppercase text-center mb-[24px] md:mb-[40px] lg:mb-[80px]">
            FAQ
          </h2>
          <FAQItemsList />
        </Container>
      </section>
      <section className="mt-[60px] md:mt-[80px] lg:mt-[120px]">
        <Container>
          <h2 className="font-right-grotesk font-bold leading-tini text-4xl md:text-5xl lg:text-6xl uppercase text-center mb-[24px] md:mb-[40px] lg:mb-[80px]">
            COLLECTION
          </h2>
          <ImgSlider />
        </Container>
      </section>
    </main>
  );
}
