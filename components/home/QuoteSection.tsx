import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";

export default function QuoteSection() {
  return (
    <section
      aria-labelledby="quote-heading"
      className="bg-[#F7F6F2] py-20 lg:py-28"
    >
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-5xl text-center">
            <p
              id="quote-heading"
              className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]"
            >
              Buddhistische Inspiration
            </p>

            <blockquote className="mt-8">
              <p className="font-serif text-3xl leading-[1.45] text-[#153B36] sm:text-4xl lg:text-6xl">
                &ldquo;Der wahre Frieden beginnt nicht in der Welt, sondern im
                eigenen Geist.&rdquo;
              </p>
            </blockquote>

            <div
              aria-hidden="true"
              className="mx-auto mt-10 h-px w-20 bg-[#B08D57]"
            />

            <p className="mt-6 text-base text-gray-500 lg:text-lg">
              Ein Gedanke zur inneren Ruhe
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}