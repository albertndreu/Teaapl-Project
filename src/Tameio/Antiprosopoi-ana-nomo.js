import { useState } from "react";


const Antiprosopoi = () => {
const [isFired, setIsFired] = useState(false);
    const handleDownload = () => {
    
    const fileContent = '...'; // Replace with your file content
    const blob = new Blob([fileContent], { type: 'application/vnd.oasis.opendocument.spreadsheet' });

    // Create a URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a link element and simulate a click event
    const link = document.createElement('a');
    link.href = url;
    link.download = 'antiprosopoi.ods'; // Set the desired file name
    link.click();

    // Clean up the URL and link
    URL.revokeObjectURL(url);
    link.remove();
    setIsFired(true);
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
        <main className="table">
            <section className="table_header">
                <h1 className="text-2xl text-gray-700 border-4 border-black p-4 m-0">ΑΝΤΙΠΡΟΣΩΠΟΙ ΑΝΑ ΝΟΜΟ</h1>
            </section>
            <section className="table_body">
                
                <table className="w-full border-collapse">
                    <thead className="sticky top-16 z-10 bg-gray-200">
                        <tr className="hover:bg-customBlue hover:text-white">
                            <th class=" p-5">Α/Α</th>
                            <th class=" p-5 ">ΝΟΜΟΣ</th>
                            <th class=" p-5">ΑΝΤΙΠΡΟΣΩΠΟΣ</th>
                            <th class=" p-5">ΤΗΛΕΦΩΝΟ</th>
                            <th class=" p-5">ΕMAIL</th>
                        </tr>
                        </thead>
                    <tbody className="w-95 max-h-[calc(89%-0.8rem)] bg-white-50 m-2 rounded-lg overflow-auto border border-gray-300 py-2 px-4 ">
                        <tr className="hover:bg-customBlue hover:text-white">
                            <td>1</td>
                            <td><p>ATTIKH</p></td>
                            <td><p>ΚΕΡΑΜΙΩΤΗ ΜΑΡΙΑ</p></td>
                            <td><a href="tel:+306972276440">6972276440</a></td>
                            <td>
                            <span id="cloak038fe1dd0b011b871d9840d6154d8208"><a href="mailto:mariaker2010@hotmail.com">mariaker2010@hotmail.com</a></span>
                             </td>
                        </tr>
                        <tr className="hover:bg-customBlue hover:text-white">
<td>2</td>
<td>ΑΙΤΩΛΟΑΚΑΡΝΑΝΙΑ</td>
<td>ΚΑΛΑΝΤΖΗΣ ΠΑΝΑΓΙΩΤΗΣ</td>
<td><a href="tel:+306947770030">6947770030</a></td>
<td><span id="cloak3ad3ae1b1267e242457c13db2535b45c"><a href="mailto:pankalan@gmail.com">pankalan@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>3</td>
<td>ΑΡΓΟΛΙΔΑ</td>
<td>ΚΑΤΣΙΓΙΑΝΝΗΣ ΑΘΑΝΑΣΙΟΣ</td>
<td><a href="tel:+306906758838">6906758838</a></td>
<td><span id="cloak0b58b61d67df6da1d9709265495fde67"><a href="mailto:sakis1964@gmail.com">sakis1964@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>4</td>
<td>ΑΡΚΑΔΙΑ</td>
<td>ΚΑΣΙΜΟΣ ΣΩΤΗΡΙΟΣ</td>
<td><a href="tel:+306932761200">6932761200</a></td>
<td><span id="cloaka4bf1da42bfdef628bd147275df60765"><a href="mailto:sotirkas@gmail.com">sotirkas@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>5</td>
<td>ΑΡΤΑ</td>
<td>ΓΟΥΣΙΑΣ ΘΕΟΔΩΡΟΣ</td>
<td><a href="tel:+306947827456">6947827456</a></td>
<td><span id="cloak8aaa4345dbfc71d486e2286491e9fe67"><a href="mailto:theogousias@gmail.com">theogousias@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>6</td>
<td>ΑΧΑΪΑ</td>
<td>ΠΕΤΤΑ ΙΩΑΝΝΑ</td>
<td><a href="tel:+306984622016">6984622016</a></td>
<td><span id="cloak27ce99dafcdfdf9a41a06765f52c02ab"><a href="mailto:gianpet2002@gmail.com">gianpet2002@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>7</td>
<td>ΒΟΙΩΤΙΑ</td>
<td>ΤΖΙΤΖΩΚΟΣ ΙΩΑΝΝΗΣ</td>
<td><a href="tel:+306947184057">6947184057</a></td>
<td><span id="cloakdb9382d4f3df65678ae74166586ac1fe"><a href="mailto:tzitzokosgiannis@gmail.com">tzitzokosgiannis@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>8</td>
<td>ΓΡΕΒΕΝΑ</td>
<td>ΣΤΑΜΟΣ ΧΡΥΣΟΒΑΛΑΝΤΗΣ</td>
<td><a href="tel:+306981297687">6981297687</a></td>
<td><span id="cloak1ce15c4c2a1bafa6aa91e9bb5888288d"><a href="mailto:valantissta85@gmail.com">valantissta85@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>9</td>
<td>ΔΡΑΜΑ</td>
<td>ΠΑΝΑΓΙΩΤΗΣ ΔΗΜΗΤΡΙΟΣ</td>
<td><a href="tel:+306977592977">6977592977</a></td>
<td><span id="cloak40073e8f891628ffc8ba1f6af2f6e982"><a href="mailto:dipan0077@gmail.com">dipan0077@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>10</td>
<td>ΔΩΔΕΚΑΝΗΣΑ</td>
<td>ΡΟΥΣΑΚΗ ΑΝΑΣΤΑΣΙΑ</td>
<td><a href="tel:+306944343994">6944343994</a></td>
<td><span id="cloakbbe5e96a24f1bcbcbd5b6070c4cb9cb0"><a href="mailto:anstsrsk@gmail.com">anstsrsk@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>11</td>
<td>ΕΒΡΟΣ</td>
<td>ΔΟΥΛΓΕΡΑΚΗΣ ΑΘΑΝΑΣΙΟΣ</td>
<td><a href="tel:+306942424356">6942424356</a></td>
<td><span id="cloak5eea21465286acab8cb5cd52325b7349"><a href="mailto:thanasis1969@gmail.com">thanasis1969@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>12</td>
<td>ΕΥΒΟΙΑ</td>
<td>ΝΤΙΝΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ</td>
<td><a href="tel:+306981584349">6981584349</a></td>
<td><span id="cloak051a6d476dc5e5d542a0fd9deae6444a"><a href="mailto:kostashal@hotmail.gr">kostashal@hotmail.gr</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>13</td>
<td>ΕΥΡΥΤΑΝΙΑ</td>
<td>ΤΣΙΑΡΑΣ ΚΩΝΣΤΑΝΤΙΝΟΣ</td>
<td><a href="tel:+306973733048">6973733048</a></td>
<td><span id="cloak7e8bc4b37971ae63c21be77abcacae1e"><a href="mailto:k.tsiaras@astynomia.gr">k.tsiaras@astynomia.gr</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>14</td>
<td>ΖΑΚΥΝΘΟΣ</td>
<td>ΑΝΔΡΙΟΠΟΥΛΟΣ ΧΑΡΑΛΑΜΠΟΣ</td>
<td><a href="tel:+306977121566">6977121566</a></td>
<td><span id="cloakb538a177f64f77587f2736e63f8d3d1a"><a href="mailto:xandr15@yahoo.gr">xandr15@yahoo.gr</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>15</td>
<td>ΗΛΕΙΑ</td>
<td><span className="text-#ff0000"><strong>ΧΩΡΙΣ ΑΝΤΙΠΡΟΣΩΠΟ</strong></span></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>16</td>
<td>ΗΜΑΘΙΑ</td>
<td>ΚΟΣΤΟΓΛΙΔΟΥ ΧΑΡΙΣ</td>
<td><a href="tel:+306986387616">6986387616</a></td>
<td><span id="cloake6ec20016772fe3ac3f80635b1bacfc4"><a href="mailto:kostharis7@gmail.com">kostharis7@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>17</td>
<td>ΗΡΑΚΛΕΙΟ</td>
<td>ΔΑΣΚΑΛΑΚΗΣ ΣΤΥΛΙΑΝΟΣ</td>
<td><a href="tel:+306932669828">6932669828</a></td>
<td><span id="cloak32108cf121e6a36b51444b8623b90631"><a href="mailto:steliosdoors@hotmail.com">steliosdoors@hotmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>18</td>
<td>ΘΕΣΣΑΛΟΝΙΚΗ</td>
<td>ΚΑΜΟΥΡΑΣ ΚΛΕΑΡΧΟΣ</td>
<td><a href="tel:+306974811777">6974811777</a></td>
<td><span id="cloak5b24539686a91bc40bbd5d637d9f8a19"><a href="mailto:klearchoskam@gmail.com">klearchoskam@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>19</td>
<td>ΘΕΣΠΡΩΤΙΑ</td>
<td>ΑΘΑΝΑΣΙΟΥ ΠΑΝΑΓΙΩΤHΣ</td>
<td><a href="tel:+306936151519">6936151519</a></td>
<td><span id="cloak4d8d9aec80c4b653045a2ec0abc92089"><a href="mailto:sioupanagiotis@gmail.com">sioupanagiotis@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>20</td>
<td>ΙΩΑΝΝΙΝΑ</td>
<td>ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ ΑΡΙΣΤΟΤΕΛΗΣ</td>
<td><a href="tel:+306944363925">6944363925</a></td>
<td><span id="cloak72afc5a26465dc006623c7bac75f1a73"><a href="mailto:telisioa@gmail.com">telisioa@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>21</td>
<td>ΚΑΒΑΛΑ</td>
<td>ΚΑΤΣΟΥΛΗΣ ΒΑΣΙΛΕΙΟΣ</td>
<td><a href="tel:+306972070362">6972070362</a></td>
<td><span id="cloak56f5ad9a05b5502e524b3bdfd79e1729"><a href="mailto:vasiliskatsoulis@yahoo.gr">vasiliskatsoulis@yahoo.gr</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>22</td>
<td>ΚΑΡΔΙΤΣΑ</td>
<td>ΣΩΤΗΡΟΠΟΥΛΟΣ ΤΗΛΕΜΑΧΟΣ</td>
<td><a href="tel:+306944425566">6944425566</a></td>
<td><span id="cloakdc250323d1ee8cc85f203eae23cc3dbc"><a href="mailto:tilsot@gmail.com">tilsot@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>23</td>
<td>ΚΑΣΤΟΡΙΑ</td>
<td>ΚΑΡΑΓΙΑΝΝΗΣ ΑΝΤΩΝΙΟΣ</td>
<td><a href="tel:+306974918572">6974918572</a></td>
<td><span id="cloakca1d04d7bfad25e892ae3e5287d38398"><a href="mailto:antkaragian@gmail.com">antkaragian@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>24</td>
<td>ΚΕΡΚΥΡΑ</td>
<td>ΜΠΑΛΑΟΥΡΑΣ ΑΧΙΛΛΕΑΣ</td>
<td><a href="tel:+306973315307">6973315307</a></td>
<td><span id="cloak4a4fabc1c220167cf1ebda7a19778b58"><a href="mailto:achilleascfu@yahoo.com">achilleascfu@yahoo.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>25</td>
<td>ΚΕΦΑΛΛΗΝΙΑ</td>
<td><span className="text-#ff0000"><strong>ΧΩΡΙΣ ΑΝΤΙΠΡΟΣΩΠΟ</strong></span></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>26</td>
<td>ΚΙΛΚΙΣ</td>
<td>ΤΑΡΝΑΡΑΣ KΩΝΣΤΑΝΤΙΝΟΣ</td>
<td><a href="tel:+306974922054"></a>6974922054</td>
<td><span id="cloak5efd1c23f379845e01ae0d3778d71da3"><a href="mailto:tarnaras19783@gmail.com">tarnaras19783@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>27</td>
<td>ΚΟΖΑΝΗ</td>
<td>ΛΙΤΣΙΟΣ ΑΠΟΣΤΟΛΟΣ</td>
<td><a href="tel:+306948531700">6948531700</a></td>
<td><span id="cloak85e5d1d41d4174e4383279268162e713"><a href="mailto:po@gmail.com">po@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>28</td>
<td>ΚΟΡΙΝΘΟΣ</td>
<td>ΛΙΑΚΟΣ ΒΑΣΙΛΕΙΟΣ</td>
<td><a href="tel:+306909603823">6909603823</a></td>
<td><span id="cloakd84962faf5b9359f1eb577b6b0129d60"><a href="mailto:v.liakos@astynomia.gr">v.liakos@astynomia.gr</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>29</td>
<td>ΚΥΚΛΑΔΕΣ</td>
<td>ΒΑΣΙΛΑΚΗΣ ΙΩΑΝΝΗΣ</td>
<td><a href="tel:+306955470262">6936152706</a></td>
<td><span id="cloak0b54e8ec9ea0b6d84c56435e01598504"><a href="mailto:gianvasilakis@yahoo.gr">gianvasilakis@yahoo.gr</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>30</td>
<td>ΛΑΚΩΝΙΑ</td>
<td>KOYBOYΣΗΣ ΔΗΜΗΤΡΙΟΣ</td>
<td><a href="tel:+306947565936">6947565936</a></td>
<td><span id="cloakeea6e6bef5fb8aa6e72003bc2f794ea7"><a href="mailto:dkouvousis@gmail.com">dkouvousis@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>31</td>
<td>ΛΑΡΙΣΑ</td>
<td>ΚΑΛΑΜΠΟΥΚΑΣ ΑΧΙΛΛΕΥΣ-ΒΑΛΑΝΤΗΣ</td>
<td><a href="tel:+306972074101">6972074101 </a><a href="tel:+2102410683109">& 2410683109</a></td>
<td><span id="cloak9cff5ea4397b23091aea608065a2a464"><a href="mailto:akalamboukas@gmail.com">akalamboukas@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>32</td>
<td>ΛΑΣΙΘΙ</td>
<td>ΦΡΑΓΚΑΚΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ</td>
<td><a href="tel:+306977788173">6977788173</a></td>
<td><span id="cloak2da929070bc603a29c3a4343b4645a7e"><a href="mailto:kfragkak@hotmail.com">kfragkak@hotmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>33</td>
<td>ΛΕΣΒΟΣ</td>
<td>ΚΑΝΙΜΑΣ ΠΟΛΥΧΡΟΝΗΣ</td>
<td><a href="tel:+306976702090">6976702090</a></td>
<td><span id="cloakdb0fb79720a1f4d8687f59a5fb26b283"><a href="mailto:mrpolkan@yahoo.gr">mrpolkan@yahoo.gr</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>34</td>
<td>ΛΕΥΚΑΔΑ</td>
<td>ΦΛΙΤΟΥΡΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ</td>
<td><a href="tel:+306972224013">6972224013</a></td>
<td><span id="cloak5efdc1bdd4e44268f86c3c94b0c8a737"><a href="mailto:flitouris256024@yahoo.gr">flitouris256024@yahoo.gr</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>35</td>
<td>ΜΑΓΝΗΣΙΑ</td>
<td>ΚΑΡΚΑΛΗΣ ΣΤΕΦΑΝΟΣ</td>
<td><a href="tel:+306937080150">6937080150</a></td>
<td><span id="cloak2b440e5ad7f0a34abd2460587138585c"><a href="mailto:stef.karkalis@yahoo.gr">stef.karkalis@yahoo.gr</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>36</td>
<td>ΜΕΣΣΗΝΙΑ</td>
<td>ΑΝΤΩΝΟΠΟΥΛΟΣ ΝΙΚΟΛΑΟΣ</td>
<td><a href="tel:+306947725482">6947725482</a></td>
<td><span id="cloak6a32fe4b70d7d30e8ee8e632b7862c15"><a href="mailto:nik_ant1980@yahoo.gr">nik_ant1980@yahoo.gr</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>37</td>
<td>ΞΑΝΘΗ</td>
<td>ΔΕΤΣΑΡΙΔΗΣ ΔΗΜΗΤΡΙΟΣ</td>
<td><a href="tel:+306974261769">6974261769</a></td>
<td><span id="cloakf220948415cba3b6ff98a29dc8a2d76e"><a href="mailto:dimitrisdetsaridis@hotmail.gr">dimitrisdetsaridis@hotmail.gr</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>38</td>
<td>ΠΕΛΛΑ</td>
<td>ΠΟΛΑΤΙΔΗΣ ΗΛΙΑΣ</td>
<td><a href="tel:+306980291094">6980291094</a></td>
<td><span id="cloak544d67d7f639b8277fa14df81872683f"><a href="mailto:polat.ilias@gmail.com">polat.ilias@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>39</td>
<td>ΠΙΕΡΙΑ</td>
<td>ΓΡΑΜΜΕΝΟΣ ΑΝΤΩΝΙΟΣ</td>
<td><a href="tel:+306974312190">6974312190</a></td>
<td><span id="cloak2cd0948dcd878ca576280745f50f68b9"><a href="mailto:antoniosgrammenos@gmail.com">antoniosgrammenos@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>40</td>
<td>ΠΡΕΒΕΖΑ</td>
<td>ΝΑΣΤΟΥΛΗΣ ΕΜΜΑΝΟΥΗΛ</td>
<td><a href="tel:+306949194546">6949194546</a></td>
<td><span id="cloak25772063f78fb95b55787b86ca0de892"><a href="mailto:manwnas1977@gmail.com">manwnas1977@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>41</td>
<td>ΡΕΘΥΜΝΟ</td>
<td><span className="text-#ff0000"><strong>ΧΩΡΙΣ ΑΝΤΙΠΡΟΣΩΠΟ</strong></span></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>42</td>
<td>ΡΟΔΟΠΗ</td>
<td>ΒΑΛΕΡΑΣ ΧΡΗΣΤΟΣ</td>
<td><a href="tel:+306980289457">6980289457</a></td>
<td><span id="cloaka403ae4eaf72a1055182a7bc710c9a49"><a href="mailto:val84kri@hotmail.com">val84kri@hotmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>43</td>
<td>ΣΑΜΟΣ</td>
<td><span className="text-#ff0000"><strong>ΧΩΡΙΣ ΑΝΤΙΠΡΟΣΩΠΟ</strong></span></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>44</td>
<td>ΣΕΡΡΕΣ</td>
<td>ΣΑΡΑΚΑΤΣΑΝΟΥ ΕΛΕΥΘΕΡΙΑ</td>
<td><a href="tel:+306972604159">6972604159</a></td>
<td><span id="cloak9743ba06bd3822b2c42a6e07a8cde75d"><a href="mailto:el.sarakatsanou@hotmail.gr">el.sarakatsanou@hotmail.gr</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>45</td>
<td>ΤΡΙΚΑΛΑ</td>
<td>ΔΡΑΓΟΥΤΣΟΣ ΒΑΣΙΛΕΙΟΣ</td>
<td><a href="tel:+306955470262">6955470262</a></td>
<td><span id="cloak88e954f9a89a9cb4d97fc97f4b7bea22"><a href="mailto:dragvas@yahoo.gr">dragvas@yahoo.gr</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>46</td>
<td>ΦΘΙΩΤΙΔΑ</td>
<td>ΣΥΛΕΟΥΝΗΣ ΚΩΝ/ΝΟΣ</td>
<td><a href="tel:+306974064656">6974064656</a></td>
<td><span id="cloak9ce1e6c729e591dd8e57a5677cb7e534"><a href="mailto:konsyleounis@gmail.com">konsyleounis@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>47</td>
<td>ΦΛΩΡΙΝΑ</td>
<td>ΚΥΡΚΟΠΟΥΛΟΣ ΠΕΡΙΚΛΗΣ</td>
<td><a href="tel:+306984630610">6984630610</a></td>
<td><span id="cloakeba15414225b1351b9220586f8642a1a"><a href="mailto:kirkopoulosp@gmail.com">kirkopoulosp@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>48</td>
<td>ΦΩΚΙΔΑ</td>
<td>ΖΩΜΕΝΟΣ ΑΝΑΡΓΥΡΟΣ</td>
<td><a href="tel:+306948288773">6948288773</a></td>
<td><span id="cloakccf13f3135145e3fdd705fd004fe297a"><a href="mailto:ariszom27@gmail.com">ariszom27@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>49</td>
<td>ΧΑΛΚΙΔΙΚΗ</td>
<td>ΚΤΕΝΑ ΧΑΡΙΚΛΕΙΑ</td>
<td><a href="tel:+306971810819">6971810819</a></td>
<td><span id="cloak901a22589948bef1fe3832a2276e20b8"><a href="mailto:ktenaxara1@gmail.com">ktenaxara1@gmail.com</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>50</td>
<td>ΧΑΝΙΑ</td>
<td>ΛΕΒΕΝΤΑΚΗΣ ΔΗΜΗΤΡΙΟΣ</td>
<td><a href="tel:+306972221831">6972221831</a></td>
<td><span id="cloak0eeb1eec2034051dc6eaaf5d62df2ad0"><a href="mailto:dimleventakis@yahoo.gr">dimleventakis@yahoo.gr</a></span></td>
</tr>
<tr className="hover:bg-customBlue hover:text-white">
<td>51</td>
<td>ΧΙΟΣ</td>
<td>ΛΑΣΚΑΡΙΔΗΣ ΖΑΦΕΙΡΙΟΣ</td>
<td><a href="tel:+306977730484">6977730484</a></td>
<td><span id="cloaka96acba2f494a52ba90d192e3145111e"><a href="mailto:zaflask@gmail.com">zaflask@gmail.com</a></span></td>
</tr>
                    </tbody>
                </table>
            </section>

 <div className="my-8 text-center">
      {isFired ? (
        <div className="inline-block text-white font-bold py-5 px-6 rounded-full focus:outline-none focus:shadow-outline" style={{ width: "fit-content",backgroundColor: "#0582ca" }}>
          <i className="fa-solid fa-circle-check"></i>
          Completed
        </div>
      ) : (
        <button
  onClick={handleDownload}
  className="relative bg-transparent text-black font-bold py-5 px-6 rounded-full focus:outline-none focus:shadow-outline overflow-hidden "
>
  <span className="fill-effect"></span>
  <i class="fa-solid fa-download"></i>
  <span className="z-10 relative hover:text-white">Download File</span>
</button>



      )}
    </div>


        </main>
        <div class="bg-[#071923] text-white text-xs p-4 text-center w-full font-poppins text-base leading-7 font-normal">© teaapl.gr 2023 | Developed by <a class="text-custom-new-blue" href="">SOFTBIZ</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="inline-block ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path></svg></div>
        <button class="fixed bottom-10 right-10 z-50 bg-blue-500 text-white w-12 h-12 rounded-full focus:outline-none hover:bg-blue-600" title="Back to top">↑</button>
        </div>
    )

}
 
export default Antiprosopoi;