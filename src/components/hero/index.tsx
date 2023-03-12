import { FC } from "react";

export const Hero: FC = () => {
  return (
    <div className="hero min-h-screen bg-secondary">
      <div className="container mx-auto">
        <div className="hero-content flex-col gap-x-6 lg:flex-row-reverse">
          <img alt="hero" src="/image/img_hero.svg" className="min-w-[200px]" />
          <div>
            <h1 className="text-2xl font-extrabold md:text-4xl lg:text-5xl">
              The Warteg Marketplace!
            </h1>
            <p className="py-6">
              {" "}
              Belanja menu warteg dengan mudah dan nyaman, ngga perlu lagi repot
              pergi keluar untuk belanja di Warteg, kini bisa dipesan secaran
              online!
            </p>
            <button className="btn-primary btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
