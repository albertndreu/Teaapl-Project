import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Pleonekthmata = () => {
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
    <div className="bg-white p-6 rounded-lg shadow-md  mt-20 " >
        <h1 className="text-center text-2xl underline  text-customBlue mb-10">
            ΠΛΕΟΝΕΚΤΗΜΑΤΑ
        </h1>
        <p className="text-left text-lg  px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500 mb-5">
            Δημιουργήθηκε και λειτουργεί <span className="underline">αυτοδιαχειριζόμενο</span> Ταμείο Επαγγελματικής Ασφάλισης ως ΝΠΙΔ (ΦΕΚ Αρ.Φ.𝟏𝟗𝟎𝟑τΒ/𝟒.𝟗.𝟐𝟎𝟎𝟗 όπως τροπ. με την Αρ. Φ.𝟓𝟏𝟎𝟐𝟎/𝟕𝟑𝟑𝟒/𝟏𝟓𝟕/𝟎𝟒.𝟎𝟒.𝟐𝟎𝟏𝟑) για τους υπηρετούντες στα Σώματα Ασφαλείας, σύμφωνα με τις διατάξεις του Ν.𝟑𝟎𝟐𝟗/𝟐𝟎𝟎𝟐 και εποπτεύεται από το Υπουργείο Απασχόλησης και Κοινωνικής Προστασίας, λειτουργώντας συμπληρωματικά στην υποχρεωτική ασφάλιση, εξασφαλίζοντας:
        </p>
        
    

    
<div className="mx-auto bg-white shadow-md rounded-lg  p-4 grid lg:grid-cols-2 lg:gap-8 mb-10  ">
    
<div className="bg-white rounded-lg  p-8 max-w-2xl" >

<h2 className="text-left text-2xl underline  text-customBlue mb-10 ml-5">Μέσω του κλάδου αλληλεγγύης</h2>
<p className="text-left text-1xl   text-gray-700 mb-10 ">
    <ul className="list-disc pl-6 mt-3 space-y-2">
        <li className="bg-white p-6 rounded-lg shadow-md mt-10 hover:text-white hover:bg-customBlue shadow-lg transition delay-50 duration-300 ease-in-out hover:scale-105 transform">Την ασφάλεια ότι σε περίπτωση ατυχήματος που θα μου προκαλέσει μόνιμη ολική ανικανότητα θα λάβω βοήθημα ύψους 10.000€ και σε περίπτωση θανάτου η οικογένειά μου θα λάβει βοήθημα ύψους 15.000€. </li>
        <li className="bg-white p-6 rounded-lg shadow-md mt-10 hover:text-white hover:bg-customBlue shadow-lg transition delay-50 duration-300 ease-in-out hover:scale-105 transform">Ότι εάν νοσηλευθώ σε νοσοκομείο ή κλινική για διάστημα άνω των 9 ημερών θα λάβω βοήθημα 20€ για κάθε επόμενη μέρα. </li>
        <li className="bg-white p-6 rounded-lg shadow-md mt-10 hover:text-white hover:bg-customBlue shadow-lg transition delay-50 duration-300 ease-in-out hover:scale-105 transform">Την ανάπτυξη σχέσης αλληλεγγύης και αλληλοβοήθειας, μεταξύ των συναδέλφων μου.</li>
    </ul>
</p>

</div>
<div className="bg-white rounded-lg  p-8 mb-10 lg:mb-0 max-w-2xl" >

    
<p className="text-left text-1xl   text-gray-700">
    <h2 className="text-left text-2xl underline  text-customBlue ml-5">Μέσω του κλάδου εφ’ άπαξ </h2>
    <ul className="list-disc pl-6 mt-3 space-y-2">
        <li className="bg-white p-6 rounded-lg shadow-md mt-10 hover:text-white hover:bg-customBlue shadow-lg transition delay-50 duration-300 ease-in-out hover:scale-105 transform">Αποταμίευση καθώς ενώ δυσκολεύομαι να αποταμιεύσω μόνος μου, μέσω του Ταμείου, <span className="underline">επιλέγοντας ο ίδιος το ποσό της μηνιαίας εισφοράς μου</span>, που παρακρατείται από το μισθό μου, μπορώ να επιτύχω την δημιουργία σημαντικού κεφαλαίου.</li>
        <li className="bg-white p-6 rounded-lg shadow-md mt-10 hover:text-white hover:bg-customBlue shadow-lg transition delay-50 duration-300 ease-in-out hover:scale-105 transform">Τη δυνατότητα να μπορώ λάβω εφ' άπαξ είτε μετά τα 20 έτη ασφάλισης είτε με την συμπλήρωση του 50ου έτους της ηλικίας μου με χρόνο ασφάλισης στο Ταμείο 10 έτη είτε με την συμπλήρωση του 55ου έτους της ηλικίας μου με χρόνο ασφάλισης στο Ταμείο 5 έτη είτε και σε περίπτωση αποστρατείας με 1 έτος ασφάλισης στο Ταμείο.</li>
        <li className="bg-white p-6 rounded-lg shadow-md mt-10 hover:text-white hover:bg-customBlue shadow-lg transition delay-50 duration-300 ease-in-out hover:scale-105 transform">Με τη θεσμική λειτουργία του Ταμείου, την ακεραιότητα της διαχείρισης, καθώς το κεφάλαιό μου επενδύεται από επαγγελματίες στο μικτό αμοιβαίο κεφάλαιο που δημιούργησε το ίδιο το Ταμείο, θωρακίζοντας τις αποταμιεύσεις μου.</li>
        <li className="bg-white p-6 rounded-lg shadow-md mt-10 hover:text-white hover:bg-customBlue shadow-lg transition delay-50 duration-300 ease-in-out hover:scale-105 transform">Μείωση του φόρου που καταβάλλω διότι οι ετήσιες εισφορές μου εκπίπτουν του φορολογητέου εισοδήματός μου.</li>
        <li className="bg-white p-6 rounded-lg shadow-md mt-10 hover:text-white hover:bg-customBlue shadow-lg transition delay-50 duration-300 ease-in-out hover:scale-105 transform">Αφορολόγητες παροχές εφ’ άπαξ. </li>
        <li className="bg-white p-6 rounded-lg shadow-md mt-10 hover:text-white hover:bg-customBlue shadow-lg transition delay-50 duration-300 ease-in-out hover:scale-105 transform">Δυνατότητα επιπλέον ασφαλιστικής κάλυψης, μέσα στην αβεβαιότητα και στην αναμόρφωση του ασφαλιστικού συστήματος.</li>
        <li className="bg-white p-6 rounded-lg shadow-md mt-10 hover:text-white hover:bg-customBlue shadow-lg transition delay-50 duration-300 ease-in-out hover:scale-105 transform">Δωρεάν παροχές και προνόμια υγείας σε ιδιωτικές κλινικές και ιδιώτες ιατρούς.</li>
    </ul>
</p>
</div>

</div>

<p className="text-lg px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500 mb-5" data-aos="zoom-in" data-aos-duration="2500"  data-aos-once="true"><span className="underline">Μπορώ να συμμετάσχω στην διοίκηση του Ταμείου</span> καθώς κάθε μέλος έχει το δικαίωμα του εκλέγειν και του εκλέγεσθαι.</p>

<br></br>
    </div>

    {/*<div className="bg-white p-6 rounded-lg shadow-md  mt-20 " >
        <h1 className="text-center text-2xl underline  text-customBlue mb-10">
            ΠΛΕΟΝΕΚΤΗΜΑΤΑ
        </h1>
        <p className="text-left text-lg  px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500 mb-5">
            Δημιουργήθηκε και λειτουργεί <span className="underline">αυτοδιαχειριζόμενο</span> Ταμείο Επαγγελματικής Ασφάλισης ως ΝΠΙΔ (ΦΕΚ Αρ.Φ.𝟏𝟗𝟎𝟑τΒ/𝟒.𝟗.𝟐𝟎𝟎𝟗 όπως τροπ. με την Αρ. Φ.𝟓𝟏𝟎𝟐𝟎/𝟕𝟑𝟑𝟒/𝟏𝟓𝟕/𝟎𝟒.𝟎𝟒.𝟐𝟎𝟏𝟑) για τους υπηρετούντες στα Σώματα Ασφαλείας, σύμφωνα με τις διατάξεις του Ν.𝟑𝟎𝟐𝟗/𝟐𝟎𝟎𝟐 και εποπτεύεται από το Υπουργείο Απασχόλησης και Κοινωνικής Προστασίας, λειτουργώντας συμπληρωματικά στην υποχρεωτική ασφάλιση, εξασφαλίζοντας:
        </p>
        
    

<h2 className="text-center text-2xl underline  text-customBlue mb-5 mt-10">Μέσω του κλάδου εφ’ άπαξ :</h2>
<div className="timeline">
    <div className="container left-container">
        <div className="text-box">
            
            <p className="text-left">Αποταμίευση καθώς ενώ δυσκολεύομαι να αποταμιεύσω μόνος μου, μέσω του Ταμείου, επιλέγοντας ο ίδιος το ποσό της μηνιαίας εισφοράς μου, που παρακρατείται από το μισθό μου, μπορώ να επιτύχω την δημιουργία σημαντικού κεφαλαίου.</p>
        </div>
    </div>
    <div className="container right-container">
        <div className="text-box">
            
            <p className="text-left">Τη δυνατότητα να μπορώ λάβω εφ' άπαξ είτε μετά τα 20 έτη ασφάλισης είτε με την συμπλήρωση του 50ου έτους της ηλικίας μου με χρόνο ασφάλισης στο Ταμείο 10 έτη είτε με την συμπλήρωση του 55ου έτους της ηλικίας μου με χρόνο ασφάλισης στο Ταμείο 5 έτη είτε και σε περίπτωση αποστρατείας με 1 έτος ασφάλισης στο Ταμείο.</p>
        </div>
    </div>
    <div className="container left-container">
        <div className="text-box">
            
            <p className="text-left">Με τη θεσμική λειτουργία του Ταμείου, την ακεραιότητα της διαχείρισης, καθώς το κεφάλαιό μου επενδύεται από επαγγελματίες στο μικτό αμοιβαίο κεφάλαιο που δημιούργησε το ίδιο το Ταμείο, θωρακίζοντας τις αποταμιεύσεις μου.</p>
        </div>
    </div>
    <div className="container right-container">
        <div className="text-box">
            
            <p className="text-left">Μείωση του φόρου που καταβάλλω διότι οι ετήσιες εισφορές μου εκπίπτουν του φορολογητέου εισοδήματός μου.</p>
        </div>
    </div>
    <div className="container left-container">
        <div className="text-box">
            
            <p className="text-left">Αφορολόγητες παροχές εφ’ άπαξ. </p>
        </div>
    </div>
    <div className="container right-container">
        <div className="text-box">
            
            <p className="text-left">Δυνατότητα επιπλέον ασφαλιστικής κάλυψης, μέσα στην αβεβαιότητα και στην αναμόρφωση του ασφαλιστικού συστήματος.</p>
        </div>
    </div>
    <div className="container left-container">
        <div className="text-box">
            
            <p className="text-left">Δωρεάν παροχές και προνόμια υγείας σε ιδιωτικές κλινικές και ιδιώτες ιατρούς.</p>
        </div>
    </div>
</div>

<h2 className="text-center text-2xl underline  text-customBlue mb-5">Μέσω του κλάδου αλληλεγγύης:</h2>
<div className="timeline">
    <div className="container left-container">
        <div className="text-box">
            
            <p className="text-left">Την ασφάλεια ότι σε περίπτωση ατυχήματος που θα μου προκαλέσει μόνιμη ολική ανικανότητα θα λάβω βοήθημα ύψους 10.000€ και σε περίπτωση θανάτου η οικογένειά μου θα λάβει βοήθημα ύψους 15.000€. </p>
        </div>
    </div>
    <div className="container right-container">
        <div className="text-box">
            
            <p className="text-left">Ότι εάν νοσηλευθώ σε νοσοκομείο ή κλινική για διάστημα άνω των 9 ημερών θα λάβω βοήθημα 20€ για κάθε επόμενη μέρα. </p>
        </div>
    </div>
    <div className="container left-container">
        <div className="text-box">
            
            <p className="text-left">Την ανάπτυξη σχέσης αλληλεγγύης και αλληλοβοήθειας, μεταξύ των συναδέλφων μου.</p>
        </div>
    </div>
    </div>
<p className="text-lg   px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500 mb-5" data-aos="zoom-in" data-aos-duration="2500"  data-aos-once="true"><span className="underline">Μπορώ να συμμετάσχω στην διοίκηση του Ταμείου</span> καθώς κάθε μέλος έχει το δικαίωμα του εκλέγειν και του εκλέγεσθαι.</p>

<br></br>
    </div>*/}

    <div class="bg-[#071923] text-white text-xs p-4 text-center w-full font-poppins text-base leading-7 font-normal">© teaapl.gr 2023 | Developed by <a class="text-custom-new-blue" href="">SOFTBIZ</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="inline-block ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path></svg></div>
    <button class="fixed bottom-10 right-10 z-50 bg-blue-500 text-white w-12 h-12 rounded-full focus:outline-none hover:bg-blue-600" title="Back to top">↑</button>    
        </div>
     );
}
 
export default Pleonekthmata;