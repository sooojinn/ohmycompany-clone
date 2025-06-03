export default function NavIconWrapper({ category }: { category: string }) {
  return (
    <div className="w-16 h-16 bg-gray-100 flex justify-center items-center rounded-3xl">
      <span
        style={{
          backgroundImage: `url(/assets/icons/page.main.home.category.${category}.svg)`,
        }}
        className="inline-block w-8 h-8 bg-contain bg-center bg-no-repeat"
      ></span>
    </div>
  );
}
