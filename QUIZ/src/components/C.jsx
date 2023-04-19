import Card from "./Card";

const colors = [
  "bg-red-400",
  "bg-orange-400",
  "bg-yellow-400",
  "bg-green-400",
  "bg-blue-400",
  "bg-purple-400",
  "bg-main",
];

const C = () => {
  return (
    <div className="flex">
      {colors.map((v, i) => {
        return <Card key={i} color={v} />;
      })}
    </div>
  );
};

export default C;
