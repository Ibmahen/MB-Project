export default function Navbar() {
  return (
    <div className="flex justify-between items-center mt-5 text-black sticky top-0 mx-10">
      <div className="nav-side">
        <a href="/">Logo</a>
      </div>
      <div className="nav-center">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/our-team">Our Team</a>
        <a href="/services">Services</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact" className="bg-[#2C89F3] text-white w-[157px] h-[50px] center-kabeh rounded-[8px]">Get Contact</a>
      </div>
      <div className="nav-side">
        <a href="/sign-in">Sign in</a>
      </div>
    </div>
  );
}
