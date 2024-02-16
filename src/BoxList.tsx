

interface Box {
    id: number;
    text: string;
    link: string;
}

// BoxList.tsx
import React, { useState } from 'react';
import Box from './Box';
import translations from './translations';
import { LanguageTranslations } from './translations';


const BoxList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [language, setLanguage] = useState('en');
    const [easterEggActive, setEasterEggActive] = useState(false);

    const boxes = [
        { id: 1, text: 'pdfConversion', link: 'https://www.ilovepdf.com/' },
        { id: 2, text: 'onlinePdfEditor', link: 'https://www.sejda.com/pdf-editor' },
        { id: 3, text: 'aiImageUpscaler', link: 'https://www.upscale.media/?ref=pixelbin.io' },
        { id: 4, text: 'imageBackgroundRemover', link: 'https://www.remove.bg' },
        { id: 5, text: 'fileSharing', link: 'https://send.tresorit.com/' },
        { id: 6, text: 'qrCodeGenerator', link: 'https://www.qr-code-generator.com/' },
        { id: 7, text: 'barCodeGenerator', link: 'https://barcode.tec-it.com/en' },
        { id: 8, text: 'imageEditor', link: 'https://pixlr.com/' },
    ];

    const handleBoxClick = (box: Box) => {
        // Logic for handling box click
        if (box.text === 'easterEgg') {
            setEasterEggActive(true);
            setTimeout(() => setEasterEggActive(false), 2000); // Animation duration
        } else {
            window.location.href = box.link;
        }
    };

    const filteredBoxes = boxes.filter(box => {
        // Translate box text based on current language
        const translatedText = translations[language][box.text] ? translations[language][box.text] : box.text;
        // Compare lowercase translated text with lowercase search term
        return translatedText.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ position: 'absolute', top: '30px', left: '30px', display: 'flex', alignItems: 'center' }}>
                <button onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')} style={{ marginRight: '10px' }}>
                    {translations[language].switchLanguage || (language === 'en' ? '切换到中文' : 'Switch to English')}
                </button>

                <input
                    className="search-animate"
                    type="text"
                    placeholder={translations[language].searchPlaceholder}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ padding: '10px', width: '300px', fontSize: '16px' }}
                />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '120px' }}>
                {filteredBoxes.map((box: Box) => (
                    <div onClick={() => handleBoxClick(box)} key={box.id} className={`box-hover ${box.text === 'easterEgg' && easterEggActive ? 'easter-egg' : ''}`}>
                        <Box text={(translations[language] as LanguageTranslations)[box.text] || box.text} link={box.link} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BoxList;