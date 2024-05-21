import React from "react";
import Title from "../components/Title";
import Hero from "../components/Hero";

const page = () => {
  return (
    <div className="">
      <Hero
        title="About Us"
        description="Need assistance? Our support team is here to help with product inquiries, technical support, sales information, and general questions. Reach out via email at support@lapti.com or call us at +88 01755772447. We're available Monday to Friday, 9:00 AM - 6:00 PM."
      />
      <main className="p-8 pt-10 text-justify">
        <Title
          title="let's Know About Us"
          subTitle="Learn about our passion for innovation, our commitment to quality, and the milestones that have shaped us. Join us as we continue to push the boundaries of what's possible in the tech world."
          position={false}
        />
        <section className="mb-8 ">
          <h2 className="text-2xl font-semibold text-sky-500">
            Welcome to Lapti.js – Your Premier Destination for Laptops
          </h2>
          <p className="text-lg mt-4">
            At <strong>Lapti.js</strong>, we are passionate about technology and
            committed to bringing you the best laptops on the market. Our
            mission is to provide a seamless shopping experience, combining
            top-notch products with exceptional customer service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-500">Our Brands</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Samsung</strong>: Combining cutting-edge technology with
              sleek design, Samsung laptops are perfect for both work and play.
            </li>
            <li>
              <strong>Asus</strong>: Renowned for their robust build and
              high-performance components, Asus laptops cater to gamers,
              professionals, and everyday users.
            </li>
            <li>
              <strong>Acer</strong>: Delivering a balance of performance and
              affordability, Acer laptops are ideal for students and
              budget-conscious consumers.
            </li>
            <li>
              <strong>HP</strong>: With a focus on versatility and power, HP
              laptops are designed to meet the demands of business and personal
              use.
            </li>
            <li>
              <strong>Lenovo</strong>: Known for their durability and advanced
              features, Lenovo laptops are a favorite among professionals and
              tech enthusiasts.
            </li>
            <li>
              <strong>Apple</strong>: Combining elegant design with powerful
              hardware, Apple laptops are perfect for creatives and those who
              value a premium user experience.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-500">
            Our Commitment
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Quality Products</strong>: We carefully select each laptop
              model to ensure it meets our high standards for quality and
              performance.
            </li>
            <li>
              <strong>Customer Satisfaction</strong>: Your satisfaction is our
              top priority. Our customer support team is always ready to assist
              you with any inquiries or concerns.
            </li>
            <li>
              <strong>Competitive Pricing</strong>: We offer competitive prices
              on all our laptops, ensuring you get the best value for your
              money.
            </li>
            <li>
              <strong>Secure Shopping</strong>: Your security is important to
              us. Our website uses advanced encryption technology to protect
              your personal information.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-500">
            Why Choose Lapti.js?
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Expert Guidance</strong>: Our knowledgeable staff is here
              to help you find the perfect laptop to meet your needs.
            </li>
            <li>
              <strong>Wide Selection</strong>: With a variety of brands and
              models, you’re sure to find the ideal laptop at Lapti.js.
            </li>
            <li>
              <strong>Fast Shipping</strong>: We offer quick and reliable
              shipping to get your new laptop to you as soon as possible.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-500">Contact Us</h2>
          <p className="text-lg mt-4">
            Have questions or need assistance? Feel free to reach out to our
            customer service team at{" "}
            <a
              href="mailto:support@lapti.js"
              className="text-sky-500 underline"
            >
              support@lapti.js
            </a>
            .
          </p>
          <div className="mt-4">
            <p>
              Stay connected with us on social media for the latest updates and
              promotions:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <a href="#" className="text-sky-500 underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-500 underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-500 underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
