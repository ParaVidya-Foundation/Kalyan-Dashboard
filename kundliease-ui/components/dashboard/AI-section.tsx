import KundliButton from "./Kundli-buttons";


export default function Aisection() {
  const buttons = [
    {
      text: "Free Kundli",
      color: "#FF5733",
      api: () => console.log("Free Kundli API called!"),
    },
    {
      text: "Premium Kundli",
      color: "#2ECC71",
      api: () => console.log("Premium Kundli API called!"),
    },
    {
      text: "Detailed Kundli",
      color: "#3498DB",
      api: () => console.log("Detailed Kundli API called!"),
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen gap-8">
      {buttons.map((btn, index) => (
        <KundliButton
          key={index}
          text={btn.text}
          color={btn.color}
          api={btn.api}
        />
      ))}
    </div>
  );
}
