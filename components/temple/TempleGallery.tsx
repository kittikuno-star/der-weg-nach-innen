import Image from "next/image";

import Container from "@/components/ui/Container";

type TempleGalleryProps = {
  images: string[];
};

export default function TempleGallery({ images }: TempleGalleryProps) {
  return (
    <section className="bg-[#153B36] py-20 text-white lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#D6BC8C]">
            Impressionen
          </p>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
            Den Tempel mit den Augen erleben
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className={`relative overflow-hidden rounded-[24px] bg-white/5 ${
                index === 0
                  ? "col-span-2 aspect-[16/9] lg:row-span-2 lg:aspect-auto lg:min-h-[520px]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes={
                  index === 0
                    ? "(min-width: 1024px) 50vw, 100vw"
                    : "(min-width: 1024px) 25vw, 50vw"
                }
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
