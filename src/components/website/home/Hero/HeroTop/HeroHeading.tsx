function HeroHeading() {
  return (
    <div>
      <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-tight text-(--color-text) sm:text-4xl lg:mt-5 lg:text-5xl lg:leading-[1.15]">
        تجربة حقيقية
        <br />
        <span className="text-(--color-accent)">تحسين مستمر</span>
      </h1>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-(--color-secondary-text) sm:text-[15px] sm:leading-8 lg:mt-6 lg:text-[16px]">
        منصة إعلامية مستقلة توثق التجارب والجولات داخل المملكة وخارجها{" "}
        <br className="max-xl:hidden" />
        لتنقل لك التجربة كما هي بواقعية
      </p>
    </div>
  );
}

export default HeroHeading;