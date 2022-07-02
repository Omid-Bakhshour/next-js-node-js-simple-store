export default function Home() {
  return (
    <div className="grid gap-4 md:grid-cols-12 md:grid-row-2">
      <div className="bg-blue-200 hidden md:block md:row-span-2 md:col-span-3">
        category desktop
      </div>
      <div className="bg-blue-200 hidden md:block md:col-span-9 ">
        sort desktop
      </div>
      <div className="bg-blue-200 md:col-span-9">blogs lajjd</div>
    </div>
  );
}
