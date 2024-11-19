import { Text } from "@/components/ui/Text";

export const navigation: NavigationProps[] = [
  {
    name: "Home Page",
    href: "/",
  },
  {
    name: "Portfolio",
    href: "#",
  },
  {
    name: "About Us",
    href: "#",
  },
  {
    name: "Inquiries",
    href: "#",
  },
  {
    name: "Pricings",
    href: "#",
  },
  {
    name: "Challenges",
    href: "#",
  },
];

export const testimonials: TestimonialProps[] = [
  {
    name: "Sophie Lloyd",
    body: "I love the tattoo I got from Tattoo Studio. It's so beautiful and unique. I'm so happy with it.",
    image: "/assets/testimonials/sophie.jpg",
  },
  {
    name: "Chris Baker",
    body: "I got a tattoo from Tattoo Studio and it's amazing. The artist was so professional and the tattoo looks great.",
    image: "/assets/testimonials/chris.jpg",
  },
  {
    name: "Cardina Stones",
    body: "I recently had the pleasure of getting a tattoo at Tattoo Studio, and I couldn't be happier with the entire experience. From start to finish, everything about this tattoo shop exceeded my expectations.",
    image: "/assets/testimonials/cardina.png",
  },
  {
    name: "Jennifer Smith",
    body: "Tattoo Studio made me feel at ease with getting my first tattoo. I was so nervous but the artist was so professional and made me feel comfortable.",
    image: "/assets/testimonials/jennifer.jpg",
  },
  {
    name: "Adam Jones",
    body: "I got a cover up done at Tattoo Studio and its amazing. You can't even tell there was a tattoo there before.",
    image: "/assets/testimonials/adam.jpg",
  },
];

export const logos: LogoProps[] = [
  {
    name: "Layers",
    image: "/assets/logos/layers.svg",
  },
  {
    name: "Sisyphus",
    image: "/assets/logos/sisyphus.svg",
  },
  {
    name: "Circooles",
    image: "/assets/logos/circooles.svg",
  },
  {
    name: "Catalog",
    image: "/assets/logos/catalog.svg",
  },
  {
    name: "Quotient",
    image: "/assets/logos/quotient.svg",
  },
  {
    name: "Hourglass",
    image: "/assets/logos/hourglass.svg",
  },
];

export const faq: AccordionItem[] = [
  {
    title: "What is the process?",
    content: (
      <>
        <Text className="leading-[-2%] tracking-[150%]" as="p">
          <strong>1. Consultation:</strong> First, we discuss your tattoo ideas
          and preferences.
        </Text>
        <Text className="leading-[-2%] tracking-[150%]" as="p">
          <strong>2. Design:</strong> Our artists will create a custom design
          based on your vision.
        </Text>
        <Text className="leading-[-2%] tracking-[150%]" as="p">
          <strong>3. Appointment:</strong> Once you&apos;re happy with the
          design, we schedule your tattoo session.
        </Text>
        <Text className="leading-[-2%] tracking-[150%]" as="p">
          <strong>4. Aftercare:</strong> After the tattoo is done, we provide
          aftercare instructions to ensure proper healing.
        </Text>
      </>
    ),
  },
  {
    title: "How you determine price?",
    content: (
      <>
        <Text className="leading-[-2%] tracking-[150%]" as="p">
          <strong>1. Size:</strong> Tattoo prices are often based on the size of
          the tattoo. Larger tattoos generally cost more than smaller ones. Some
          salons may charge per square inch or have set prices for different
          size categories.
        </Text>
        <Text className="leading-[-2%] tracking-[150%]" as="p">
          <strong>2. Complexity:</strong> The complexity of the design plays a
          significant role in pricing. More intricate and detailed designs
          typically require more time and skill, leading to a higher cost.
        </Text>
        <Text className="leading-[-2%] tracking-[150%]" as="p">
          <strong>3. Color:</strong> Tattoos with color typically cost more than
          black and gray tattoos. Vibrant colors can require more work and skill
          to achieve the desired result.
        </Text>
      </>
    ),
  },
  {
    title: "Can you draw any tattoos?",
    content: (
      <>
        <Text className="leading-[-2%] tracking-[150%]" as="p">
          Yes, our talented artists can draw a wide range of tattoo styles, from
          traditional to modern. Whether you have a specific design in mind or
          need inspiration, we can bring your ideas to life!
        </Text>
      </>
    ),
  },
  {
    title: "What is your location?",
    content: (
      <>
        <Text className="leading-[-2%] tracking-[150%]" as="p">
          Our studio is located in the heart of the city at 123 Tattoo Avenue.
          We are open Tuesday to Saturday from 10:00 AM to 8:00 PM. Feel free to
          drop by for a consultation or to browse our portfolio!
        </Text>
      </>
    ),
  },
];
