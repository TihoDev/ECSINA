import Commnet from "../UI/Commnet";

const allComents = [
  {
    id: 1,
    name: "امیررضا کاظمیان",
    role: "بنیانگذار استارتاپ فناوران",
    description:
      "فرم بیزینس پلنی که پر کرده بودم بعد از بازبینی خیلی کامل‌تر شد. توی جلسه ارائه واقعاً بهم کمک کرد. کاش زودتر با این سرویس آشنا می‌شدم.",
    rate: 4.8,
  },
  {
    id: 2,
    name: "امیررضا کاظمیان",
    role: "بنیانگذار استارتاپ فناوران",
    description:
      "فرم بیزینس پلنی که پر کرده بودم بعد از بازبینی خیلی کامل‌تر شد. توی جلسه ارائه واقعاً بهم کمک کرد. کاش زودتر با این سرویس آشنا می‌شدم.",
    rate: 4.8,
  },
  {
    id: 3,
    name: "امیررضا کاظمیان",
    role: "بنیانگذار استارتاپ فناوران",
    description:
      "فرم بیزینس پلنی که پر کرده بودم بعد از بازبینی خیلی کامل‌تر شد. توی جلسه ارائه واقعاً بهم کمک کرد. کاش زودتر با این سرویس آشنا می‌شدم.",
    rate: 4.8,
  },
  {
    id: 4,
    name: "امیررضا کاظمیان",
    role: "بنیانگذار استارتاپ فناوران",
    description:
      "فرم بیزینس پلنی که پر کرده بودم بعد از بازبینی خیلی کامل‌تر شد. توی جلسه ارائه واقعاً بهم کمک کرد. کاش زودتر با این سرویس آشنا می‌شدم.",
    rate: 4.8,
  },
];

const AllComments = () => {
  return (
    <div className="container mt-16 md:mt-48">
      <p className=" text-xl md:text-4xl font-bold flex items-center justify-center">
        نظرات همراهان ما
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 md:mt-24">
        {allComents.map((comment) => (
          <Commnet key={comment.id} commnet={comment} />
        ))}
      </div>
    </div>
  );
};

export default AllComments;
