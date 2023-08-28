import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import PDF from './images/icon.png';


const Eggrafh = () => {


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
<h1 className="text-center text-2xl underline font-bold text-customBlue mt-24">ΕΓΓΡΑΦΗ</h1>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 ml-5 mr-5">
        <div class="p-4 rounded-lg shadow-md border border-blue-400">
            <p className="text-left text-1xl ">
        <h1 className="underline text-gray-700">Α) Δικαίωμα εγγραφής στο Ταμείο έχουν όλοι:</h1>
        <ul className="list-disc pl-6 mt-3 space-y-2">    
        <li>οι εν ενεργεία αστυνομικοί,</li>
        <li>οι εν ενεργεία πυροσβέστες,</li>
        <li>οι εν ενεργεία λιμενικοί,</li>
        <li>οι υπάλληλοι των Αρχηγείων της Ελληνικής Αστυνομίας, του Πυροσβεστικού Σώματος και του Λιμενικού Σώματος και Ελληνικής Ακτοφυλακής.</li>
        </ul>
        </p>
        </div>
        <div class="p-4 rounded-lg shadow-md border border-blue-400">
            <p className="text-left text-1xl  ">
            <span className="text-gray-700 underline">Β)</span>Η ασφάλιση στο Ταμείο είναι προαιρετική και συμπεριλαμβάνει την ένταξη τόσο στον Κλάδο Εφάπαξ όσο και στον Κλάδο Αλληλεγγύης, πλην των ευρισκομένων σε κατάσταση μόνιμης Πολεμικής Διαθεσιμότητας προ της εγγραφής τους στο ταμείο οι οποίοι ασφαλίζονται αποκλειστικά και μόνο στον κλάδο εφάπαξ για όσο διάστημα βρίσκονται σε κατάσταση πολεμικής διαθεσιμότητας.
        </p>
        </div>
        <div class="p-4 rounded-lg shadow-md border border-blue-400">
            <p className="text-left text-1xl    ">
            <span className="text-gray-700 underline">Γ)</span> Για την υπαγωγή των αιτούντων στην ασφάλιση του Ταμείου αποφασίζει το ΔΣ και καθορίζεται δια αυτής και η ημερομηνία έναρξης της εγκρινόμενης ασφάλισης η οποία συμπίπτει με την ημερομηνία της έναρξης καταβολής εισφορών στο Ταμείο.
        </p>
        </div>
        <div class="p-4 rounded-lg shadow-md border border-blue-400">
            <p class="text-left text-1xl  ">
        <h1 class="underline">Δ) Το υποψήφιο μέλος υποβάλλει για την εγγραφή του στο Ταμείο <span class="text-blue-500 hover:text-blue-900"><a href="https://www.teaapl.gr/images/pdf/aitisi_eggrafis_melous_apografiko_deltio.pdf" target="_blank">σχετική αίτηση</a></span> υπογεγραμμένη:</h1>
        <ul class="list-disc pl-6 mt-3 space-y-2">
            <li>μέσω της <span class="text-blue-500 hover:text-blue-900 underline"><a href="https://www.teaapl.gr/images/pdf/aitisi_eggrafis_melous_apografiko_deltio.pdf" target="_blank">ηλεκτρονικής φόρμας εγγραφής</a></span></li>
            <li>μέσω του τοπικού αντιπροσώπου <span class="text-blue-500 hover:text-blue-900 underline"><a href="/Antiprosopoi"> (πίνακας αντιπροσώπων)</a></span></li>
            <li>με fax στο 210-5248397,</li>
            <li>με e-mail στο <span class="text-blue-500 hover:text-blue-900 underline"><a href="mailto:info@teaapl.gr">info@teaapl.gr</a></span></li>
            <li>αυτοπροσώπως στα γραφεία του ταμείου.</li>
            <li>Η υποβολή της αίτησης συνεπάγεται ανεπιφύλακτα την αποδοχή του παρόντος καταστατικού από τον αιτούντα.</li>
        </ul>
    </p>
        </div>
        <div class="p-4 col-span-2 rounded-lg shadow-md border border-blue-400 mb-5">
            <p className="text-left text-1xl ">
        <h1 className="underline text-gray-700">Ε) Λοιπά έντυπα αιτήσεων:</h1>
        <ul className="list-disc pl-6 mt-3 space-y-2">    
        <li ><a className=" underline text-blue-600 hover:text-blue-900" href="https://www.teaapl.gr/images/pdf/4)%20%CE%91%CE%AF%CF%84%CE%B7%CF%83%CE%B7%20%CE%B1%CE%BB%CE%BB%CE%B1%CE%B3%CE%AE%CF%82%20%CE%B4%CE%B9%CE%BA%CE%B1%CE%B9%CE%BF%CF%8D%CF%87%CF%89%CE%BD.pdf" target="_blank"  ><i class="fa-solid fa-link "></i>Αίτηση αλλαγής δικαιούχων<img src={PDF} className="w-8 h-8 inline "/></a><span className="text-red-600 underline">-Ηλεκτρονική Υποβολή</span></li>
        <li ><a className=" underline text-blue-600 hover:text-blue-900" href="https://www.teaapl.gr/images/pdf/5)%20%CE%91%CE%AF%CF%84%CE%B7%CF%83%CE%B7%20%CE%B5%CF%80%CE%B1%CE%BD%CE%B5%CE%B3%CE%B3%CF%81%CE%B1%CF%86%CE%AE%CF%82%20%CE%BC%CE%AD%CE%BB%CE%BF%CF%85%CF%82%20%CF%80%CE%BF%CF%85%20%CE%AD%CF%87%CE%B5%CE%B9%20%CE%B4%CE%B9%CE%B1%CE%B3%CF%81%CE%B1%CF%86%CE%B5%CE%AF%20(%CF%87%CF%89%CF%81%CE%AF%CF%82%20%CE%BB%CE%AE%CF%88%CE%B7%20%CE%91%CF%84%CE%BF%CE%BC.%20%CE%9C%CE%B5%CF%81%CE%AF%CE%B4....pdf" target="_blank"><i class="fa-solid fa-link"></i>Αίτηση επανεγγραφής μέλους που έχει διαγραφεί <img src={PDF} className="w-8 h-8 inline"></img></a><span className="text-red-600 underline">-Ηλεκτρονική Υποβολή</span></li>
        <li ><a className=" underline text-blue-600 hover:text-blue-900" href="https://www.teaapl.gr/images/pdf/6)%20%CE%91%CF%80%CE%BF%CE%B3%CF%81%CE%B1%CF%86%CE%B9%CE%BA%CF%8C%20%CE%B4%CE%B5%CE%BB%CF%84%CE%AF%CE%BF%20-%20%CE%B5%CF%80%CE%B9%CE%BA%CE%B1%CE%B9%CF%81%CE%BF%CF%80%CE%BF%CE%AF%CE%B7%CF%83%CE%B7%20%CF%83%CF%84%CE%BF%CE%B9%CF%87%CE%B5%CE%AF%CF%89%CE%BD.pdf" target="_blank"><i class="fa-solid fa-link"></i>Απογραφικό δελτίο - επικαιροποίηση στοιχείων <img src={PDF} className="w-8 h-8 inline"></img></a><span className="text-red-600 underline">-Ηλεκτρονική Υποβολή</span></li>
        <li ><a className=" underline text-blue-600 hover:text-blue-900" href="https://www.teaapl.gr/images/pdf/%CE%91%CE%AF%CF%84%CE%B7%CF%83%CE%B7%20%CE%B5%CE%BD%CE%B7%CE%BC%CE%AD%CF%81%CF%89%CF%83%CE%B7%CF%82%20%CE%BC%CE%AD%CE%BB%CE%BF%CF%85%CF%82.pdf" target="_blank"><i class="fa-solid fa-link"></i>Αίτηση ενημέρωσης μέλους <img src={PDF} className="w-8 h-8 inline"></img></a><span className="text-red-600 underline">-Ηλεκτρονική Υποβολή</span></li>
        </ul>
        </p>
        </div>
    </div>



    <div class="bg-[#071923] text-white text-xs p-4 text-center w-full font-poppins text-base leading-7 font-normal">© teaapl.gr 2023 | Developed by <a class="text-custom-new-blue" href="">SOFTBIZ</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="inline-block ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path></svg></div>
    <button class="fixed bottom-10 right-10 z-50 bg-blue-500 text-white w-12 h-12 rounded-full focus:outline-none hover:bg-blue-600" title="Back to top">↑</button>    
        </div>
     );
}
 
export default Eggrafh;
