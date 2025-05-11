type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <div className="mx-auto my-12 w-full max-w-[550px]">
      <h1 className="text-center text-Heading-40 font-bold text-counter-neutral-900 md:text-Heading-64 lg:text-Heading-64 dark:text-white">
        {title}
      </h1>
    </div>
  );
};

export default Title;
