const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between space-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold text-sm">ABOUT</h5>
        <div className="grid sm:grid-cols-3 lg:grid-cols-1 space-y-3 text-base">
          <p className="cursor-pointer hover:underline font-light">
            How Airbnb works
          </p>
          <p className="cursor-pointer hover:underline font-light">Newsroom</p>
          <p className="cursor-pointer hover:underline font-light">
            Airbnb 2021
          </p>
          <p className="cursor-pointer hover:underline font-light">Investors</p>
          <p className="cursor-pointer hover:underline font-light">
            Airbnb Plus
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Airbnb Luxe
          </p>
          <p className="cursor-pointer hover:underline font-light">
            HotelTonight
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Airbnb for Work
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Made possible by Hosts
          </p>
          <p className="cursor-pointer hover:underline font-light">Careers</p>
          <p className="cursor-pointer hover:underline font-light">
            Founders' Letter
          </p>
        </div>
      </div>
      <hr />
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold text-sm">COMMUNITY</h5>
        <div className="grid sm:grid-cols-3 lg:grid-cols-1 space-y-3 text-base ">
          <p className="cursor-pointer hover:underline font-light">
            Diversity & Belonging
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Accessibilty
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Airbnb Associates
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Host Afghan refugees
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Guest Referrals
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Airbnb.org
          </p>
        </div>
      </div>
      <hr />
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold text-sm">HOST</h5>
        <div className="grid sm:grid-cols-3 lg:grid-cols-1 space-y-3 text-base ">
          <p className="cursor-pointer hover:underline font-light">
            Host your home
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Host an Online Experience
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Host an Experience
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Responsible hosting
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Resource Center
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Community Center
          </p>
        </div>
      </div>
      <hr />
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold text-sm">SUPPORT</h5>
        <div className="grid sm:grid-cols-3 lg:grid-cols-1 space-y-3 text-base ">
          <p className="cursor-pointer hover:underline font-light">
            Our COVID-19 Response
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Help Center
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Cancellation options
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Neighbourhood Support
          </p>
          <p className="cursor-pointer hover:underline font-light">
            Trust & Safety
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
