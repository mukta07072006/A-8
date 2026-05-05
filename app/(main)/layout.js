
import SuncartNavbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";


export default function mainLayout({ children }) {
  return (
   <>
   <SuncartNavbar/>
   {children}
   <Footer/>
   </>
  );
}
