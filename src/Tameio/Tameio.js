import React, { useEffect  } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tameio = () => {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
    <article>
    <section className="bg-white-100 py-32 flex items-center">
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-customBlue mb-6 -mt-6" data-aos="fade-down" data-aos-duration="2500">ΙΣΤΟΡΙΚΟ </h2>
        <p className="text-lg leading-7 text-gray-700 " data-aos="fade-down" data-aos-duration="2500">
Ξεκίνησε το 1994 ως λογαριασμός αλληλοβοήθειας μελών της Διεθνούς Ένωσης Αστυνομικών (γνωστός στους παλαιότερους συναδέρφους ως Λ.Α.Μ.Δ.Ε.Α.) προκειμένου να παρέχει αλληλεγγύη στα μέλη της καταβάλλοντας οικονομική ενίσχυση στις οικογένειες τους σε περιπτώσεις θανάτου ή μόνιμης ολικής αναπηρίας ή μακροχρόνιας νοσηλείας, κατά τη διάρκεια της θητείας τους στο Σώμα της Ελληνικής Αστυνομίας.
</p>
<p className="text-lg leading-7 text-gray-700" data-aos="fade-down" data-aos-duration="2500">
Αρχικά μέλη μπορούσαν να είναι μόνο τα εγγεγραμμένα μέλη της Διεθνούς Ένωσης Αστυνομικών (Ι.Ρ.Α.) που το επιθυμούσαν.
</p>
<p className="text-lg leading-7 text-gray-700" data-aos="fade-down" data-aos-duration="2500">
Το Δεκέμβριο του 2009 εντάσσεται στο καθεστώς των επαγγελματικών ταμείων, βάσει του Ν. 3029/2002, δίνοντας τη δυνατότητα στα μέλη του να επιλέξουν τη συνέχιση τη σχέσης με το Ταμείο στη νέα του μορφή μεταφέροντας την ατομικής τους μερίδα (Καταστατικό του Ταμείου στο ΦΕΚ με Αρ. φύλλου 1903/Β/4-9-2009, τροποποίηση ΦΕΚ Αρ. φύλλου 786/Β/4-4-2013).
</p>
<p className="text-lg leading-7 text-gray-700" data-aos="fade-down" data-aos-duration="2500">
Επί της ουσίας από το Δεκέμβριο του 2009 λειτουργεί ως Ταμείο Επαγγελματικής Ασφάλισης, στο οποίο έχει δικαίωμα εγγραφής το εν ενεργεία προσωπικό της Ελληνικής Αστυνομίας και το πολιτικό προσωπικό που εργάζεται στο Αρχηγείο της, χωρίς την υποχρέωση να είναι εγγεγραμμένα μέλη της Δ.Ε.Α. Στην πορεία του μέχρι σήμερα, διευρύνεται δίνοντας τη δυνατότητα να ενταχθούν και πυροσβέστες, Λιμενικοί καθώς και το πολιτικό προσωπικό που εργάζεται στα Αρχηγεία Πυροσβεστικού και λιμενικού Σώματος.
        </p>
        </div>
    </section>
    <div class="bg-[#071923] text-white text-xs p-4 text-center w-full font-poppins text-base leading-7 font-normal">© teaapl.gr 2023 | Developed by <a class="text-custom-new-blue" href="">SOFTBIZ</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="inline-block ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path></svg></div>
    </article>
    </div>
     );
}

export default Tameio;