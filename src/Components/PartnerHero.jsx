export default function PartnerHero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-blue-50">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Become a Partner</h1>
        <p className="mb-6 text-gray-700">
          List your shop and start renting out bikes to customers near you.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">List Your Shop</button>
      </div>
      <img src="/partner-illustration.png" alt="Shop Owner" className="w-80 mt-8 md:mt-0" />
    </section>
  );
}
