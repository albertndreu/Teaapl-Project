import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';





const Dioikisoi = () => {
    const [isParagraphVisible, setIsParagraphVisible] = useState(false);
    const [isParagraphVisible1, setIsParagraphVisible1] = useState(false);
    const [isParagraphVisible2, setIsParagraphVisible2] = useState(false);
    const [isParagraphVisible3, setIsParagraphVisible3] = useState(false);
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    
    
    const ReadMore = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };
  const ReadMore1 = () => {
    setIsParagraphVisible1(!isParagraphVisible1);
  };
  const ReadMore2 = () => {
    setIsParagraphVisible2(!isParagraphVisible2);
  };
  const ReadMore3 = () => {
    setIsParagraphVisible3(!isParagraphVisible3);
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
    <section>
        <h1 className="absolute left-80 top-20 text-3xl font-bold text-customBlue border-b-2 border-customBlue pb-2">ΔΙΟΙΚΗΣΗ:</h1>
       <div className="flex flex-col items-center mt-20">
    <div className="employee">
        <h2 className="name">Γουσιας Θεόδωρος</h2>
        <p className="additional-text">Πρόεδρος</p>
    </div>
    <div className="employee">
        <h2 className="name">Τσαγανος Ιωάννης</h2>
        <p className="additional-text">Αντιπρόεδρος</p>
        <button onClick={ReadMore} className="py-2 px-4 bg-blue-500 text-white rounded">Read More</button>

        {isParagraphVisible && (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" >
          <div className="bg-white rounded-lg shadow-md p-8 mt-20 w-100 max-w-md" data-aos="zoom-in" data-aos-duration="1000">
            <button onClick={(ReadMore)} className="py-1 px-3  text-customBlue rounded absolute top-0 right-0">X</button>
            <h1 className="name">Τσαγανος Ιωάννης</h1>
            <p className="additional-text">Αντιπρόεδρος</p>
        <p className="">
          Γεννήθηκε στη Θεσσαλονίκη το έτος 1980.
Αποφοίτησε από το Γενικό Λύκειο Νέας Τρίγλιας Χαλκιδικής το έτος 1997.
Κατατάχθηκε στο Σώμα της ΕΛ.ΑΣ. το έτος 1998 και αποφοίτησε από τη Σχολή Αστυφυλάκων το έτος 2000.
Είναι πτυχιούχος Οικονομικών Επιστημών του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης του Τμήματος Νομικών Οικονομικών και Πολιτικών Επιστημών.
Κάτοχος πτυχίου καλής γνώσης Αγγλικής γλώσσας επιπέδου Certificate of Competency in English του University oF Michigan.
Κάτοχος άδειας λογιστή – φοροτεχνικού και άδειας ασκήσεως οικονομολογικού επαγγέλματος.
Έχει υπηρετήσει σε διάφορες Υπηρεσίες της Διεύθυνσης Αστυνομίας Χαλκιδικής και από το έτος 2007 έχει οριστεί Διαχειριστής Χρηματικού – Υλικού (Δημόσιος Υπόλογος) της Διεύθυνσης Αστυνομίας Χαλκιδικής.
Είναι έγγαμος και πατέρας τριών (3) τέκνων.
        </p> 
        </div> 
        </div> 
      )
      }
    </div>
    <div className="employee">
        <h2 className="name">Αρζιμανογλου Μιχαήλ</h2>
        <p className="additional-text">Γεν. Γραμματέας</p>
        <button onClick={ReadMore1} className="py-2 px-4 bg-blue-500 text-white rounded">Read More</button>
        {isParagraphVisible1 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" >
          <div className="bg-white rounded-lg shadow-md p-8 mt-20 w-100 max-w-md" data-aos="zoom-in" data-aos-duration="1000">
            <button onClick={(ReadMore1)} className="py-1 px-3  text-customBlue rounded absolute top-0 right-0">X</button>
            <h1 className="name">Αρζιμανογλου Μιχαήλ</h1>
            <p className="additional-text">Γεν. Γραμματέας</p>
        <p className="">
          Γεννήθηκε στoν Κορυδαλλό Αττικής το1979.
Αποφοίτησε από σχολή Αστυφυλάκων το 1998, από τη Σχολή διοίκησης και Οικονομίας Τμ. Λογιστικής του ΤΕΙ Πειραιά το 2011.
Είναι κάτοχος πιστοποιητικού γνώσης χειρισμού Η/Υ και μεταξύ άλλων έχει συμμετάσχει σε σεμινάρια του Εθνικού Κέντρου Δημόσιας Διοίκησης τόσο σε θεματικές ενότητες Οικονομικού περιεχομένου όσο και δικτύων Ηλεκτρονικών υπολογιστών.
Γνωρίζει την Αγγλική γλώσσα σε επίπεδο B2 (Lower)
Από το 2009 ως σήμερα υπηρετεί ως λογιστής στο Τ.Ε.Α.Π.Α.Σ.Α.
Είναι έγγαμος και πατέρας δύο παιδιών.
        </p> 
        </div> 
        </div> 
      )
      }
    </div>
    <div className="employee">
        <h2 className="name">Λιτσιος Απόστολος</h2>
        <p className="additional-text">Οργαν. Γραμματέας</p>
        <button onClick={ReadMore2} className="py-2 px-4 bg-blue-500 text-white rounded">Read More</button>
        {isParagraphVisible2 && (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" >
          <div className="bg-white rounded-lg shadow-md p-8 mt-20 w-100 max-w-md" data-aos="zoom-in" data-aos-duration="1000">
            <button onClick={(ReadMore2)} className="py-1 px-3  text-customBlue rounded absolute top-0 right-0">X</button>
            <h1 className="name">Λιτσιος Απόστολος</h1>
            <p className="additional-text">Οργαν. Γραμματέας</p>
        <p className="">
          Γεννήθηκε στην Κοζάνη το έτος 1968.
Είναι απόφοιτος Λυκείου.
Κάτοχος πιστοποιητικού γνώσης χειρισμού Η/Υ (CAMBRIDGE).
Προσλήφθηκε στην Ελληνική Αστυνομία τον Ιούνιο του 1993 και έχει υπηρετήσει σε υπηρεσίες της Αθήνας, της Καστοριάς και της Κοζάνης.
Παρακολούθησε αρκετά σεμινάρια, υπηρεσιακά και μη και μεταξύ αυτών τα εξειδικευμένα: «Επενδύσεις για μη Οικονομικούς» και «Εκτίμηση Κινδύνου – Στρατηγική ανάλυση»
Σήμερα ανήκει στη δύναμη της Τροχαίας Κοζάνης και είναι αποσπασμένος στο Τ.Π.Π.Π.
Είναι έγγαμος και πατέρας τεσσάρων παιδιών.
        </p> 
        </div> 
        </div> 
      )
      }
    </div>
    <div className="employee">
        <h2 className="name">Συρσυρης Φώτιος</h2>
        <p className="additional-text">Διαχειριστής</p>
    </div>
    <div className="employee">
        <h2 className="name">Αθανασιου Παναγιώτης</h2>
        <p className="additional-text">Μέλος</p>
        <button onClick={ReadMore3} className="py-2 px-4 bg-blue-500 text-white rounded">Read More</button>
        {isParagraphVisible3 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" >
          <div className="bg-white rounded-lg shadow-md p-8 mt-20 w-100 max-w-md" data-aos="zoom-in" data-aos-duration="1000">
            <button onClick={(ReadMore3)} className="py-1 px-3  text-customBlue rounded absolute top-0 right-0">X</button>
            <h1 className="name">Αθανασιου Παναγιώτης</h1>
            <p className="additional-text">Μέλος</p>
        <p className="">
          Γεννήθηκε στην Αθήνα το έτος 1979.
Είναι απόφοιτος της Σχολής Αστυφυλάκων, στην οποία εισήχθη με το σύστημα των Πανελλαδικών Εξετάσεων το έτος 1998.
Έχει υπηρετήσει σε μάχιμες υπηρεσίες των Νομών Αττικής και Θεσπρωτίας.
Από το έτος 2014 υπηρετεί στο Επιτελείο της Διεύθυνσης Αστυνομίας Θεσπρωτίας.
Έχει παρακολουθήσει πλήθος εκπαιδεύσεων και σεμιναρίων, τόσο μέσω των Σχολών Μετεκπαίδευσης και Επιμόρφωσης της Ελληνικής Αστυνομίας, όσο και Δημόσιων - Ιδιωτικών Φορέων, σε οικονομικά - κοινωνικά θέματα, μεταξύ των οποίων «Επενδύσεις για μη Οικονομικούς» και «Εκτίμηση Κινδύνου – Στρατηγική ανάλυση».
        </p> 
        </div> 
        </div> 
      )
      }
    </div>
    <div className="employee">
        <h2 className="name">Βλαχοπουλος Κωνσταντίνος</h2>
        <p className="additional-text">Μέλος </p>
    </div>
    <p>
      <br></br>
    </p>
        </div>
<div className="flex flex-col items-center">
  <table>
    <thead className="text-3xl font-bold text-customBlue p-4 text-lg leading-7  border-b-2 border-customBlue pb-2 cursor-pointer ">
      <tr>ΕΞΕΛΕΓΚΤΙΚΗ ΕΠΙΤΡΟΠΗ:</tr>
    </thead>
    <thead className="bg-gray-200">
      <th className="p-5">Θέση</th>
      <th className="p-5">Ονοματεπώνυμο</th>
    </thead>
<tbody className="border border-gray-300">
<tr>
<td>Πρόεδρος</td>
<td>Μαυρογιωργος Σωκράτης</td>
</tr>
<tr>
<td>Μέλος</td>
<td>Μινογιαννης Κοσμάς</td>
</tr>
<tr>
<td>Μέλος</td>
<td>Παπουλιας Μιχαήλ</td>
</tr>
</tbody>
</table>
</div>
        </section>

    <div class="bg-[#071923] text-white text-xs p-4 text-center w-full font-poppins text-base leading-7 font-normal">© teaapl.gr 2023 | Developed by <a class="text-custom-new-blue" href="">SOFTBIZ</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="inline-block ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path></svg></div>
        <button class="fixed bottom-10 right-10 z-50 bg-blue-500 text-white w-12 h-12 rounded-full focus:outline-none hover:bg-blue-600" title="Back to top">↑</button>
        </div>
     );
 

}
 
export default Dioikisoi;