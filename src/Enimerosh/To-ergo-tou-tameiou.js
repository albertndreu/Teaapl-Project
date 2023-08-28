import { useState } from "react";
import Anesti from './images/anesti_small.jpg';
import Vasdekis from './images/vasdekis_small.jpg';
import Giannarakis from './images/gianarakis_small.jpg';
import Skiadas from './images/skiadas_small.jpg';
import Tsakalis from './images/tsakalis_small.jpg';
import Dwrea from './images/dwrea.jpg';
import Eustathiou from './images/eustathiou.jpg';
import Giakoumi from './images/giakoumi.jpg';
import Kapageridi from './images/kapageridi.jpg';
import Karampelia from './images/karampelia.jpg';
import Mitropoulou from './images/mitropoulou.jpg';
import Mpomponis from './images/mpomponis.jpg';
import Oikonomidou from './images/oikonimidou.jpg';
import Savva from './images/savva.jpg';
import Dimotakis from './images/dimotakis.jpg';






const Ergo = () => {
    const handleDownload = () => {
    
    const fileContent = '...'; // Replace with your file content
    const blob = new Blob([fileContent], { type: 'application/vnd.oasis.opendocument.spreadsheet' });

    // Create a URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a link element and simulate a click event
    const link = document.createElement('a');
    link.href = url;
    link.download = 'epistolh.DOC'; // Set the desired file name
    link.click();

    // Clean up the URL and link
    URL.revokeObjectURL(url);
    link.remove();
    
  };

    return ( 
        <div>
            <header>
        <nav class="bg-white shadow fixed top-0 left-0 w-full z-50">
        <div class="py-3 flex justify-between items-center">
        <div class="flex justify-start"><div class="md:block hidden">
        <div class="flex items-center px-4">
        <img src="https://www.teaapl.gr/images/xlogo_teaapl_2018.jpg.pagespeed.ic.4sMWqzqwYm.webp" alt="logo" class="h-12 w-auto filter blend-multiply"/>
        </div>
        </div>
        <div class="fixed top-6 left-6 z-50 md:hidden">
        <img src="/teaapl/static/media/logo_teaap.ace609877bf295c98695.webp" alt="Logo" class="w-16 h-16 rounded-full shadow-lg animate-bounce"/>
        </div>
        </div>
        <div class="flex justify-end"><div class="md:hidden mr-4 relative w-7 h-7">
        <button>
        <div class="absolute left-0 top-1/4 transform w-6 h-0.5 bg-black ">
        </div>
        <div class="absolute left-0 top-1/2 transform w-6 h-0.5 bg-black ">
        </div>
        <div class="absolute left-0 bottom-1/4 transform w-6 h-0.5 bg-black ">
        </div>
        </button>
        </div>
        <div class="hidden md:flex items-center ml-4">
        <div class="hidden md:flex items-center ml-4"><a href="#" class="mx-3 py-2 text-sm font-medium text-gray-700 uppercase hover:text-blue-500">ΑΡΧΙΚΗ</a>
        <div class="relative group mx-3 py-2"><a href="#" class="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500">ΤΟ ΤΑΜΕΙΟ<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 transform transition-transform duration-300 "><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
        <div class="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10"><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΙΣΤΟΡΙΚΟ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΣΚΟΠΟΣ-ΚΛΑΔΟΙ ΑΣΦΑΛΙΣΗΣ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΔΙΟΙΚΗΣΗ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΚΑΤΑΣΤΑΤΙΚΟ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΕΣΩΤΕΡΙΚΟΣ ΚΑΝΟΝΙΣΜΟΣ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΕΝΗΜΕΡΩΤΙΚΑ ΦΥΛΛΑΔΙΑ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΝΟΜΟΘΕΣΙΑ</a><a href="#" class="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΑΝΤΙΠΡΟΣΩΠΟΙ ΑΝΑ ΝΟΜΟ</a></div>
        </div>
        <div class="relative group mx-3 py-2"><a href="#" class="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500">ΣΥΜΜΕΤΟΧΗ<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 transform transition-transform duration-300 "><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
        <div class="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10"><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΠΛΕΟΝΕΚΤΗΜΑΤΑ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΕΓΓΡΑΦΗ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΕΙΣΦΟΡΕΣ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΠΑΡΟΧΕΣ</a><a href="#" class="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΔΙΑΓΡΑΦΗ</a></div>
        </div>
        <div class="relative group mx-3 py-2"><a href="#" class="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500">ΟΙΚΟΝΟΜΙΚΑ ΣΤΟΙΧΕΙΑ<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 transform transition-transform duration-300 "><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
        <div class="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10"><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΕΠΕΝΔΥΣΕΙΣ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΑΜΟΙΒΑΙΟ ΚΕΦΑΛΑΙΟ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΚΑΝΟΝΙΣΜΟΣ ΕΠΕΝΔΥΣΕΩΝ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΕΠΕΝΔΥΤΙΚΗ ΕΠΙΤΡΟΠΗ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΙΣΟΛΟΓΙΣΜΟΙ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΑΝΑΛΟΓΙΣΤΙΚΕΣ ΜΕΛΕΤΕΣ</a><a href="#" class="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΠΡΟΥΠΟΛΟΓΙΣΜΟΙ</a></div>
        </div>
        <div class="relative group mx-3 py-2"><a href="#" class="flex items-center text-sm font-medium text-gray-700 uppercase hover:text-blue-500">ΕΝΗΜΕΡΩΣΗ<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 transform transition-transform duration-300 "><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
        <div class="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg z-10"><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΑΝΑΚΟΙΝΩΣΕΙΣ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΓΕΝΙΚΕΣ ΣΥΝΕΛΕΥΣΕΙΣ</a><a href="#" class="block px-4 py-2 border-b text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ</a><a href="#" class="block px-4 py-2 text-xs font-light text-gray-700 hover:text-blue-500 hover:bg-gray-100">ΤΟ ΕΡΓΟ ΤΟΥ ΤΑΜΕΙΟΥ</a></div>
        </div>
        <a href="#" class="mx-3 py-2 text-sm font-medium text-gray-700 uppercase hover:text-blue-500">ΕΠΙΚΟΙΝΩΝΙΑ</a></div>
        </div>
        <div class="hidden md:flex items-center ml-4">
            <div class="group relative cursor-pointer">
                <div class="absolute z-10 hidden group-hover:block w-auto px-2 py-1 mt-3 text-sm font-normal leading-tight text-white rounded-md shadow-xl bg-blue-700 -left-1/2 transform -translate-x-1/2 -bottom-12 whitespace-nowrap">
                    <div><p class="font-bold">Βερανζέρου 30 (4ος οροφος)</p><p>Αθήνα 10432</p></div></div>
                    <div class="flex items-center px-4 cursor-pointer">
                        <img src="/teaapl/static/media/earth.c2f7a0c47f02ecb67b6c.gif" alt="location" class="h-6 w-auto"/></div>
                        </div>
                        <div class="group relative cursor-pointer">
                            <div class="absolute z-10 hidden group-hover:block w-auto px-2 py-1 mt-3 text-sm font-normal leading-tight text-white rounded-md shadow-xl bg-blue-700 -left-1/2 transform -translate-x-1/2 -bottom-12 whitespace-nowrap">
                                <div><p class="font-bold">2105202638</p><p>info@teaapl.gr</p></div>
                                </div>
                                <div class="flex items-center px-4 cursor-pointer">
                                    <img src="/teaapl/static/media/phone.92799eed16279fb10f6b.gif" alt="location" class="h-6 w-auto"/></div>
                                    </div>
                                    <div class="group relative cursor-pointer">
                                        <div class="absolute z-10 hidden group-hover:block w-auto px-2 py-1 mt-3 text-sm font-normal leading-tight text-white rounded-md shadow-xl bg-blue-700 -left-1/2 transform -translate-x-1/2 -bottom-12 whitespace-nowrap">
                                            <div><p class="font-bold">08:30-14:30</p><p>Δευτέρα - Παρασκευή</p></div>
                                            </div>
                                            <div class="flex items-center px-4 cursor-pointer">
                                                <img src="/teaapl/static/media/clock.2600347a01f7de8ff705.gif" alt="location" class="h-6 w-auto filter multiply"/></div>
                                                </div>
                                                <div class="flex items-center px-4">
                                                    <button class="focus:outline-none">
                                                        <img src="/teaapl/static/media/search.5ebf5e493fb068fcb892.gif" alt="location" class="h-6 w-auto"/></button>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </nav>
    </header>
<h1 className="text-center text-3xl underline font-bold text-customBlue mt-24 ">Το έργο του Ταμείου</h1>
    <div className="mx-auto bg-white  rounded-lg  p-4 grid lg:grid-cols-5 lg:gap-8 mb-10 mt-10 ml-10">
        <div className="border">
        <a href="https://teaapl.gr/images/epistoles/%CE%91%CE%9D%CE%95%CE%A3%CE%A4%CE%97%20%CE%91%CE%A1%CE%93%CE%A5%CE%A1%CE%A9.jpg" target="_blank"><p className="text-left text-customBlue underline text-1xl font-semibold ">ΑΝΕΣΤΗ ΑΡΓΥΡΩ</p><img src={Anesti}></img></a>
        </div>
        <div className="border">
        <a href="https://teaapl.gr/images/epistoles/%CE%92%CE%91%CE%A3%CE%94%CE%95%CE%9A%CE%97%CE%A3%20%CE%93%CE%95%CE%A9%CE%A1%CE%93%CE%99%CE%9F%CE%A3.jpg" target="_blank"><p className="text-left text-customBlue underline text-1xl font-semibold">ΒΑΣΔΕΚΗΣ ΓΕΩΡΓΙΟΣ</p><img src={Vasdekis}></img></a>
        </div>
        <div className="border">
        <a href="https://teaapl.gr/images/epistoles/%CE%93%CE%99%CE%91%CE%9D%CE%9D%CE%91%CE%A1%CE%91%CE%9A%CE%97%CE%A3%20%CE%9D%CE%99%CE%9A%CE%9F%CE%A3.jpg" target="_blank"><p className="text-left text-customBlue underline text-1xl font-semibold">ΓΙΑΝΝΑΡΑΚΗΣ ΝΙΚΟΣ</p><img src={Giannarakis}></img></a>
        </div>
        <div className="border">
        <a href="https://teaapl.gr/images/epistoles/%CE%A3%CE%9A%CE%99%CE%91%CE%94%CE%91%CE%A3%20%CE%9A%CE%A9%CE%9D%CE%A3%CE%A4%CE%91%CE%9D%CE%A4%CE%99%CE%9D%CE%9F%CE%A3.jpg" target="_blank"><p className="text-left text-customBlue underline text-1xl font-semibold">ΣΚΙΑΔΑΣ ΚΩΝΣΤΑΝΤΙΝΟΣ</p><img src={Skiadas}></img></a>
        </div>
        <div className="border">
        <a href="https://teaapl.gr/images/epistoles/%CE%A4%CE%A3%CE%91%CE%9A%CE%91%CE%9B%CE%97%CE%A3%20%CE%A0%CE%91%CE%9D%CE%91%CE%93%CE%99%CE%A9%CE%A4%CE%97%CE%A3.jpg" target="_blank"><p className="text-left text-customBlue underline text-1xl font-semibold">ΤΣΑΚΑΛΗΣ ΠΑΝΑΓΙΩΤΗΣ</p><img src={Tsakalis}></img></a>
        </div>
        <div className="border">
        <a href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%93%CE%99%CE%91%20%CE%94%CE%A9%CE%A1%CE%95%CE%91%20%CE%A3%CE%A4%CE%9F%20%CE%A4%CE%91%CE%9C%CE%95%CE%99%CE%9F.JPG" target="_blank"><p className="text-left text-customBlue underline text-1xl font-semibold">ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΓΙΑ ΔΩΡΕΑ ΣΤΟ ΤΑΜΕΙΟ</p><img src={Dwrea}></img></a>
        </div>
        <div className="border">
        <a href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%95%CE%A5%CE%A3%CE%A4%CE%91%CE%98%CE%99%CE%9F%CE%A5%20%CE%99%CE%A9%CE%91%CE%9D%CE%9D%CE%97.JPG" target="_blank"><p className="text-left text-customBlue underline text-1xl font-semibold">ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΕΥΣΤΑΘΙΟΥ ΙΩΑΝΝΗ</p><img src={Eustathiou}></img></a>
        </div>
        <div className="border">
        <a href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%93%CE%99%CE%91%CE%9A%CE%9F%CE%A5%CE%9C%CE%97.JPG" target="_blank"><p className="text-left text-customBlue underline text-1xl font-semibold">ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΓΙΑΚΟΥΜΗ</p><img src={Giakoumi}></img></a>
        </div>
        <div className="border">
        <a href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%9A%CE%91%CE%A0%CE%91%CE%93%CE%95%CE%A1%CE%99%CE%94%CE%97.JPG" target="_blank"><p className="text-left text-customBlue underline text-1xl font-semibold">ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΚΑΠΑΓΕΡΙΔΗ</p><img src={Kapageridi}></img></a>
        </div>
        <div className="border">
        <button onClick={handleDownload}><p className="text-left text-customBlue underline text-1xl font-semibold">ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ (10-02-2015) ΓΙΑ ΚΑΡΑΜΠΕΛΙΑ</p><img src={Karampelia}></img></button>
        </div>
        <div className="border">
        <a href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%9C%CE%97%CE%A4%CE%A1%CE%9F%CE%A0%CE%9F%CE%A5%CE%9B%CE%9F%CE%A5.JPG" target="_blank"><p className="text-left text-customBlue underline text-1xl font-semibold">ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΜΗΤΡΟΠΟΥΛΟΥ</p><img src={Mitropoulou}></img></a>
        </div>
        <div className="border">
        <a href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%9C%CE%A0%CE%9F%CE%9C%CE%A0%CE%9F%CE%9D%CE%97%CE%A3.JPG" target="_blank"><p className="text-left text-customBlue underline text-1xl font-semibold">ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΜΠΟΜΠΟΝΗΣ</p><img src={Mpomponis}></img></a>
        </div>
        <div className="border">
        <a href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%9F%CE%99%CE%9A%CE%9F%CE%9D%CE%9F%CE%9C%CE%99%CE%94%CE%9F%CE%A5.JPG" target="_blank"><p className="text-left text-customBlue underline text-1xl font-semibold">ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΟΙΚΟΝΟΜΙΔΟΥ</p><img src={Oikonomidou}></img></a>
        </div>
        <div className="border">
        <a href="https://teaapl.gr/images/epistoles/%CE%95%CE%A5%CE%A7%CE%91%CE%A1%CE%99%CE%A3%CE%A4%CE%97%CE%A1%CE%99%CE%91%20%CE%95%CE%A0%CE%99%CE%A3%CE%A4%CE%9F%CE%9B%CE%97%20%CE%A3%CE%91%CE%92%CE%92%CE%91.JPG" target="_blank"><p className="text-left text-customBlue underline text-1xl font-semibold">ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΣΑΒΒΑ</p><img src={Savva}></img></a>
        </div>
        <div className="border">
        <a href="https://teaapl.gr/images/epistoles/EYXARISTIRIA-KARTA-DHMOTAKH.jpg" target="_blank"><p className="text-left text-customBlue underline text-1xl font-semibold">ΕΥΧΑΡΙΣΤΗΡΙΑ ΚΑΡΤΑ ΔΗΜΟΤΑΚΗ</p><img src={Dimotakis}></img></a>
        </div>
    </div>


    <div class="bg-[#071923] text-white text-xs p-4 text-center w-full font-poppins text-base leading-7 font-normal">© teaapl.gr 2023 | Developed by <a class="text-custom-new-blue" href="">SOFTBIZ</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="inline-block ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path></svg></div>
    <button class="fixed bottom-10 right-10 z-50 bg-blue-500 text-white w-12 h-12 rounded-full focus:outline-none hover:bg-blue-600" title="Back to top">↑</button>    
        </div>
     );
}
 
export default Ergo;