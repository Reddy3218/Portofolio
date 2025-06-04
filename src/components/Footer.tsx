const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-gray-800 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {currentYear} Harsha Reddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;