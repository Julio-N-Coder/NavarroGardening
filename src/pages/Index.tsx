import "./index.css";
import { NavButton } from "../components/Buttons/NavButton";

export default function Home() {
  return (
    <main className="main">
      <section className="introduction center textSize">
        <h2 className="title font-bold">
          Welcome to Navarro Gardening&apos;s Website, Your Local Landscaping
          Experts!
        </h2>
        <article>
          We specialize in creating beautiful, sustainable outdoor spaces. With
          over 12 years of experience in the SLO County area, we&apos;re
          committed to delivering top-quality landscaping services tailored to
          your needs. Want to contact us quickly, just click here --&gt;{" "}
          <NavButton
            page="contact-me"
            className="p-3 sm:px-6 rounded text-sm sm:text-xl font-bold text-white bg-green-900 hover:bg-green-800 active:bg-green-500"
            text="Contact Me"
          />
        </article>
      </section>
      {/* Services Section */}
      <section className="servicesContainer center textSize">
        <h2 className="title font-bold">Services</h2>
        <article>
          At Navarro Gardening, we offer a comprehensive range of yard services
          designed to keep your outdoor spaces looking their best. Our team of
          experienced professionals is committed to delivering top-quality
          service and exceptional results. Here&apos;s what we can do for you:
        </article>
        <div className="services">
          <article className="service">
            <span className="bold">Mowing:</span> Regular mowing is essential
            for a healthy and attractive lawn. We provide reliable, professional
            mowing services tailored to your lawn&apos;s specific needs.
          </article>
          <article className="service">
            <span className="bold">Trimming Hedges:</span> Well-trimmed hedges
            not only look good but also contribute to the overall health of the
            plants. Our experianced profesional has the skills and equipment to
            trim your hedges to perfection.
          </article>
          <article className="service">
            <span className="bold">Irrigation:</span> Proper watering is crucial
            for a thriving yard. We offer irrigation services to ensure your
            plants get the right amount of water they need to flourish
          </article>
          <article className="service">
            <span className="bold">Clean-ups:</span> Whether it&apos;s spring
            cleaning, preparing for winter, or maintaining a clean and tidy yard
            year-round, We can handle it. We&apos;ll remove leaves, branches,
            and other debris to keep your yard looking its best.
          </article>
          <article className="service">
            <span className="bold">Other Yard Services:</span> We also offer a
            variety of other yard services. Whether you need help with planting,
            mulching, fertilizing, or any other yard care tasks, we&apos;ve got
            you covered.
          </article>
        </div>
      </section>
      {/* Location and Pricing Section */}
      <section className="locationPricing textSize">
        {/* location section */}
        <div className="location">
          <h2 className={`font-bold text-5xl`}>Service Location</h2>
          <article>
            We Serve in the North County SLO area. More specifically, anywere
            around the Atascadero and San Miguel area
          </article>
        </div>
        {/* Pricing section */}
        <div className="pricing">
          <h2 className="title font-bold">Pricing</h2>
          <article className="article">
            We charge $65 - $80 an hour depending on services
          </article>
        </div>
      </section>
    </main>
  );
}
