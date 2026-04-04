function SectionHeader({ number, title }) {
  return (
    <div className="flex items-center mobile:mb-10 sm:mb-16 md:mb-10">
      <a className="text-red-500 mobile:text-lg sm:text-xl">{number}</a>
      <span className="flex justify-center min-w-[90px] mr-3 text-white-500 font-semibold mobile:text-lg sm:text-2xl">
        {title}
      </span>
      <span className="sm-mobile:flex-1 sm:w-60 md:w-[300px] lg:w-[320px] border-b-[1px] border-white-700/50"></span>
    </div>
  );
}

export default SectionHeader;
