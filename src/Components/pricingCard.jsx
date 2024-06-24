export default function PricingCard() {
  const tier = [
    {
      name: "TIER 1 / Basic",
      price: 50000,
      color: "#1ab6f9",
      features: [
        "Mencatat barang masuk",
        "Mencatat barang keluar",
        "Mencatat hasil keuntungan",
      ],
    },
    {
      name: "TIER 2 / Business",
      price: 100000,
      color: "#fc787d",
      features: [
        "Mencatat barang masuk dan kelua",
        "Mencatat Keuntungan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
      ],
    },
    {
      name: "TIER 3 / Entrepreneur",
      price: 150000,
      color: "#00ceb3",
      features: [
        "Mencatat barang masuk dan keluar",
        "Mencatat Keuntungan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
        "Export data ke Excel",
        "AI Prediksi penghasilan",
      ],
    },
  ];
  return (
    <>
      {tier.map((value, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-between  md:w-[450px] border rounded-xl p-10 shadow-lg"
          >
            <div>
              <div className="text-4xl">{value.name}</div>
              <div
                style={{ color: `${value?.color}` }}
                className={`text-6xl mt-5`}
              >
                Rp. {value.price.toLocaleString("ID-id")}
              </div>
              <div className="flex justify-end">/ user / month</div>
              <div className="mt-7">
                <ul className="list-disc list-insid text-xl">
                  {value.features.map((value, index) => {
                    return <li key={index}>{value}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div>
              <button className="w-full border-2 border-[#6fe1ff] rounded-lg bg-[#6fe1ff] text-white text-lg font-bold py-2 px-16 mt-16">
                START NOW
              </button>
              <button className="w-full border-2 border-[#e8ebee] rounded-lg bg-[#f3f4f6] text-[#6fe1ff] text-lg font-bold py-2 px-16 mt-3">
                FREE TRIAL
              </button>
            </div>
          </div>
        );
      })}
    </>
   
  );
} // Reynanda Mayuda Atila Surya
