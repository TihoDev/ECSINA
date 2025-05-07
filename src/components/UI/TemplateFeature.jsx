import Image from "next/image";

const TemplateFeature = ({ feature }) => {
  return (
    <div className="flex flex-col items-start md:items-center gap-2 md:gap-4 rounded-2xl p-5 md:p-8 shadow-2xl">
      <Image
        src={feature.icon}
        alt={feature.title}
        className="w-8 h-8 md:w-12 md:h-12"
      />
      <h5 className="text-sm md:text-2xl font-semibold">{feature.title}</h5>
      <p className="text-xs md:text-xl font-normal md:text-center">
        {feature.description}
      </p>
    </div>
  );
};

export default TemplateFeature;
