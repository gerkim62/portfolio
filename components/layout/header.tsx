"use client";


// const Header = () => {
//   const { scrollDirection } = useScrollDirection();
//   const [visible, setVisible] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     if (scrollDirection === "DOWN") {
//       setVisible(false);
//     } else if (scrollDirection === "UP") {
//       setVisible(true);
//     }
//   }, [scrollDirection]);

//   const navItems = [
//     { name: "About", href: "#about" },
//     { name: "Projects", href: "#projects" },
//     { name: "Skills", href: "#skills" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <header
//       className={`sticky z-50 transition-all duration-500 ease-in-out border-b bg-white dark:bg-gray-800
//       ${visible ? "top-0" : "-top-16"}
//       `}
//     >
//       <nav className="container mx-auto px-4 py-2.5">
//         <div className="flex flex-wrap justify-between items-center">
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/api/placeholder/40/40"
//               className="mr-3 h-10 w-10 rounded-full"
//               alt="Your Logo"
//               width={40}
//               height={40}
//             />
//             <span className="self-center text-xl font-semibold whitespace-nowrap text-purple-900 dark:text-white">
//               YourName
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-purple-700 hover:text-purple-500 transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Button
//               variant="ghost"
//               className="p-2 text-purple-700 hover:text-purple-500"
//             >
//               <Code className="w-6 h-6" />
//             </Button>
//           </div>

//           {/* Mobile Navigation */}
//           <div className="md:hidden">
//             <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               <Menu className="w-6 h-6 text-purple-700" />
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="block py-2 text-purple-700 hover:text-purple-500 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };


import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-purple-600">YourName</span>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;