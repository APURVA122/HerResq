
        const translations = {
            "en": {
                "title": "Ambu-Call by HerResq",
                "languageLabel": "Choose Your Language:",
                "bookButton": "Book an Ambulance"
            },
            "hi": {
                "title": "अंबू-काल हेररेस्क द्वारा",
                "languageLabel": "अपनी भाषा चुनें:",
                "bookButton": "एंबुलेंस बुक करें"
            },
            "ta": {
                "title": "அம்பு-கால் ஹெர்ரெஸ்க் மூலம்",
                "languageLabel": "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்:",
                "bookButton": "அம்புலன்சை முன்பதிவு செய்யவும்"
            },
            "te": {
                "title": "అంబు-కాల్లు హెర్రెస్క్ ద్వారా",
                "languageLabel": "మీ భాషను ఎంచుకోండి:",
                "bookButton": "అంబులెన్స్ బుక్ చేయండి"
            },
            "bn": {
                "title": "অ্যাম্বু-কলে হেররেস্ক দ্বারা",
                "languageLabel": "আপনার ভাষা চয়ন করুন:",
                "bookButton": "এম্বুলেন্স বুক করুন"
            }
        };

        function changeLanguage() {
            const lang = document.getElementById("language").value;
            document.getElementById("title").innerText = translations[lang].title;
            document.getElementById("languageLabel").innerText = translations[lang].languageLabel;
            document.getElementById("bookButton").innerText = translations[lang].bookButton;
        }

        function bookAmbulance() {
            window.location.href = "Book.html";
        }
        function setLanguage() {
            let selectedLanguage = document.getElementById("languageSelect").value;
            localStorage.setItem("language", selectedLanguage);  // Store the selected language
        }
    
        // Check if a language is already set and apply it when the page loads
        window.onload = function () {
            let storedLanguage = localStorage.getItem("language") || "en";
            document.getElementById("languageSelect").value = storedLanguage;
        };