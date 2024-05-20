const Footer = () => {
  return (
    <footer className="footer md:grid-cols-2 grid-cols-1 lg:grid-cols-4 p-10 bg-gray-700 text-sky-500 font-semibold">
      <nav>
        <h6 className="footer-title text-xl">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="hidden md:block">
        <h6 className="footer-title  text-xl">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="hidden md:block">
        <h6 className="footer-title text-xl">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Privacy Service</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav className="hidden md:block">
        <h6 className="footer-title text-xl">Social</h6>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Github</a>
      </nav>
      <nav>
        <h6 className="footer-title text-xl">Explore</h6>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Enterprise</a>
        <a className="link link-hover">Security</a>
        <a className="link link-hover">Pricing</a>
      </nav>
    </footer>
  );
};

export default Footer;
