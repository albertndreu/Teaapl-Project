import { useState } from "react";
import PDF from './images/icon.png';
import Doc from './images/icons8-word-32.png';


const Entypa = () => {
const handleDownload = () => {
    
   const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL + '/DOC1.doc';  // Replace with the actual file path
    downloadLink.download = 'Αίτηση εγγραφής μέλους - Απογραφικό δελτίο.doc'; // Set the desired file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
  };
  const handleDownload1 = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL + '/DOC2.doc';  // Replace with the actual file path
    downloadLink.download = 'Αίτηση μεταβολής ποσού μηνιαίας εισφοράς.doc'; // Set the desired file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

 
  const handleDownload2 = () => {
    
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL + '/DOC3.doc';  // Replace with the actual file path
    downloadLink.download = 'aitisi_epikairopoiisis_gia_eggrafi_sto_Portal.doc'; // Set the desired file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
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
            <section className="mt-10 mb-10 flex justify-center items-center min-h-screen bg-white-100">
            <table className="w-1/2 max-w-2xl mx-auto bg-white border-collapse border border-gray-300 mt-20 mb-4">
                <thead className="sticky top-16 z-10  text-xl font-bold text-customBlue p-4 text-lg leading-10  border-b-2 border-customBlue pb-2 bg-customBlue text-white">
                   <tr className="border-b">
            <th className="text-center py-2 pl-2" colSpan="2">
                ΕΝΤΥΠΑ ΑΙΤΗΣΕΩΝ
            </th>
        </tr>
                </thead>
                <tbody className="w-95 max-h-[calc(89%-0.8rem)] bg-white-50 m-2 rounded-lg overflow-auto border border-gray-300 py-2 px-4">
                    <tr className="border-b hover:bg-customBlue hover:text-white">
                        <td className="text-left ">
                            <a href="https://teaapl.gr/images/pdf/aitisi_eggrafis_melous_apografiko_deltio.pdf" target="_blank">
                            <a target="_blank" href="https://icons8.com/icon/l0vjMqIboTRs/pdf"></a><img src={PDF} className="inline-block w-6 h-6"></img><a target="_blank" href="https://icons8.com"></a>
                            </a>
                            1).Αίτηση εγγραφής μέλους - Απογραφικό δελτίο.pdf (εναλλακτικά κατεβάστε το σε μορφή <button onClick={handleDownload}>.doc<a target="_blank" className="" href="https://icons8.com/icon/117563/microsoft-word-2019"></a> <img src={Doc} className="inline-block w-6 h-6 hover:bg-customBlue"></img> <a target="_blank" href="https://icons8.com"></a> </button>)
                        </td>
                    </tr>
                    <tr className="border-b hover:bg-customBlue hover:text-white">
                        <td className="text-left ">
                            <a href="https://teaapl.gr/images/pdf/aitisi_metavolis_posou_miniaias_eisforas.pdf" target="_blank">
                            <a target="_blank" href="https://icons8.com/icon/l0vjMqIboTRs/pdf"></a><img src={PDF} className="inline-block w-6 h-6"></img><a target="_blank" href="https://icons8.com"></a>
                            </a>
                            2).Αίτηση μεταβολής ποσού μηνιαίας εισφοράς.pdf (εναλλακτικά κατεβάστε το σε μορφή <button onClick={handleDownload1}>.doc<a target="_blank" className="" href="https://icons8.com/icon/117563/microsoft-word-2019"></a> <img src={Doc} className="inline-block w-6 h-6 hover:bg-customBlue"></img> <a target="_blank" href="https://icons8.com"></a></button>)
                        </td>
                        
                    </tr>
                    <tr className="border-b hover:bg-customBlue hover:text-white">
                        <td className="text-left "> 
                            <a href="https://teaapl.gr/images/pdf/aitisi_diagrafis.pdf" target="_blank">
                            <a target="_blank" href="https://icons8.com/icon/l0vjMqIboTRs/pdf"></a><img src={PDF} className="inline-block w-6 h-6"></img><a target="_blank" href="https://icons8.com"></a>
                            </a>
                            3).Αίτηση διαγραφής Τ.Ε.Α.Α.Π.Λ.pdf
                        </td>
                    </tr>
                    <tr className="border-b hover:bg-customBlue hover:text-white">
                        <td className="text-left ">
                            <a href="https://teaapl.gr/images/pdf/aitisi_allagis_dikaiouxon.pdf" target="_blank">
                            <a target="_blank" href="https://icons8.com/icon/l0vjMqIboTRs/pdf"></a><img src={PDF} className="inline-block w-6 h-6"></img><a target="_blank" href="https://icons8.com"></a>
                            </a>
                            4).Αίτηση αλλαγής δικαιούχων.pdf<span className="text-red-500 underline">-Ηλεκτρονική Υποβολή</span>
                        </td>
                        
                    </tr>
                    <tr className="border-b hover:bg-customBlue hover:text-white">
                        <td className="text-left ">
                            <a href="https://teaapl.gr/images/pdf/aitisi_epaneggrafis_melous_pou_exei_diagrafei.pdf" target="_blank">
                            <a target="_blank" href="https://icons8.com/icon/l0vjMqIboTRs/pdf"></a><img src={PDF} className="inline-block w-6 h-6"></img><a target="_blank" href="https://icons8.com"></a>
                            </a>
                            5).Αίτηση επανεγγραφής μέλους που έχει διαγραφεί (χωρίς λήψη Ατομ. Μερίδας).pdf<span className="text-red-500 underline">-Ηλεκτρονική Υποβολή</span>
                        </td>
                    </tr>
                    <tr className="border-b hover:bg-customBlue hover:text-white">
                        <td className="text-left ">
                            <a href="https://teaapl.gr/images/paroxes/aitisi_xrimatikis_enisxisis_melous_logo_nosilias.pdf" target="_blank">
                            <a target="_blank" href="https://icons8.com/icon/l0vjMqIboTRs/pdf"></a><img src={PDF} className="inline-block w-6 h-6"></img><a target="_blank" href="https://icons8.com"></a>
                            </a>
                            6α).Αίτηση Χρηματικής ενίσχυσης μέλους (λόγω μακροχρόνιας νοσοκομειακής περίθαλψης).pdf
                        </td>
                    </tr>
                    <tr className="border-b hover:bg-customBlue hover:text-white">
                        <td className="text-left ">
                             <a href="https://teaapl.gr/images/paroxes/aitisi_xrimatikis_enisxisis_melous_logo_anapirias.pdf" target="_blank">
                            <a target="_blank" href="https://icons8.com/icon/l0vjMqIboTRs/pdf"></a><img src={PDF} className="inline-block w-6 h-6"></img><a target="_blank" href="https://icons8.com"></a>
                            </a>
                            6β).Αίτηση Χρηματικής ενίσχυσης μέλους (λόγω αναπηρίας).pdf
                        </td>
                    </tr>
                    <tr className="border-b hover:bg-customBlue hover:text-white">
                        <td className="text-left ">
                        <a href="https://teaapl.gr/images/paroxes/Aitisi-xrimatikis-enisxisis-melous-logo-thanatou.pdf" target="_blank">
                            <a target="_blank" href="https://icons8.com/icon/l0vjMqIboTRs/pdf"></a><img src={PDF} className="inline-block w-6 h-6" ></img><a target="_blank" href="https://icons8.com"></a>
                            </a>
                            6γ).Αίτηση Χρηματικής ενίσχυσης μέλους (λόγω θανάτου).pdf
                        </td>
                    </tr>
                    <tr className="border-b hover:bg-customBlue hover:text-white">
                        <td className="text-left ">
                            <a href="https://teaapl.gr/images/pdf/aitisi_enimerosis_melous.pdf"  target="_blank">
                            <a target="_blank" href="https://icons8.com/icon/l0vjMqIboTRs/pdf"></a><img src={PDF} className="inline-block w-6 h-6"></img><a target="_blank" href="https://icons8.com"></a>
                            </a> 
                            Αίτηση ενημέρωσης μέλους.pdf<span className="text-red-500 underline">-Ηλεκτρονική Υποβολή</span>
                        </td>
                    </tr>
                    <tr className="border-b hover:bg-customBlue hover:text-white">
                        <td className="text-left ">
                            <a href="https://teaapl.gr/images/pdf/odigies_simplirosis_aitisewn.pdf"  target="_blank">
                            <a target="_blank" href="https://icons8.com/icon/l0vjMqIboTRs/pdf"></a><img src={PDF} className="inline-block w-6 h-6"></img><a target="_blank" href="https://icons8.com"></a>
                            </a>
                            Οδηγίες συμπλήρωσης αιτήσεων.pdf
                        </td>
                    </tr>
                    <tr className="border-b hover:bg-customBlue hover:text-white">
                        <td className="text-left ">
                            <a target="_blank" className="" href="https://icons8.com/icon/117563/microsoft-word-2019"></a> <img src={Doc} className="inline-block w-6 h-6 hover:bg-customBlue"></img> <a target="_blank" href="https://icons8.com"></a>
                            
                            <button className="inline-block " onClick={handleDownload2}>Αίτηση επικαιροποίησης στοιχείων μέλους για την εγγραφή του στο Portal</button>
                        <span className="inline-block"> <button className="inline-block" onClick={handleDownload2}>Ασφαλισμένου .doc</button>(χρησιμοποιώντας το πλήκτρο "tab" μπορείτε να αλλάξετε στο έντυπο το πεδίο εγγραφής)</span>
                        </td>
                        
                    </tr>
                    <tr className="border-b hover:bg-customBlue hover:text-white">
                        <td className="text-left ">
                            <a href="https://teaapl.gr/images/pdf/aitisi_paramomis_sto_tameio.pdf"  target="_blank">
                            <a target="_blank" href="https://icons8.com/icon/l0vjMqIboTRs/pdf"></a><img src={PDF} className="inline-block w-6 h-6"></img><a target="_blank" href="https://icons8.com"></a>
                            </a>
                            Αίτηση παραμονής στο Ταμείο μετά την Συνταξιοδότηση.pdf
                        </td>
                        
                    </tr>
                    <tr className="border-b hover:bg-customBlue hover:text-white">
                        <td className="text-left ">
                            <a href="https://teaapl.gr/images/pdf/apografiko_deltio_epikairopoiisi_stoixeion.pdf"  target="_blank">
                            <a target="_blank" href="https://icons8.com/icon/l0vjMqIboTRs/pdf"></a><img src={PDF} className="inline-block w-6 h-6"></img><a target="_blank" href="https://icons8.com"></a>
                            </a>
                            Απογραφικό Δελτίο - Επικαιροποίηση Στοιχείων Μέλους.pdf<span className="text-red-500 underline">-Ηλεκτρονική Υποβολή</span>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
    </section>
    
            <div class="bg-[#071923] text-white text-xs p-4 text-center w-full font-poppins text-base leading-7 font-normal">© teaapl.gr 2023 | Developed by <a class="text-custom-new-blue" href="">SOFTBIZ</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="inline-block w-6 h-6 ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path></svg></div>
        </div>
     );
}
 
export default Entypa;
