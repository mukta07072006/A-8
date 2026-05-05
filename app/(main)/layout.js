
import SuncartNavbar from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";


export default function mainLayout({ children }) {
  return (
   <>
   <SuncartNavbar/>
   {children}
   <Footer/>
   </>
  );
}
