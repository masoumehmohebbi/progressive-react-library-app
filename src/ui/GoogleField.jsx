const GoogleField = ({ label }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="p-3 w-full rounded-full shadow-secondary-100 hover:shadow-secondary-0 duration-500 cursor-pointer flex gap-x-2 bg-secondary-200 hover:bg-secondary-100 btn btn--primary mb-16 items-center justify-center">
        <img src="/images/Google.svg" alt="" />
        <h2 className="title text-base">{label}</h2>
      </div>
    </div>
  );
};

export default GoogleField;
