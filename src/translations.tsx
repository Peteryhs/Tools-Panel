interface LanguageTranslations {
    [key: string]: string; // This allows indexing with any string

    searchPlaceholder: string;
    switchLanguage: string; // Make sure this is added
    // Other specific keys:
    pdfConversion: string;
    onlinePdfEditor: string;
    aiImageUpscaler: string;
    imageBackgroundRemover: string;
    fileSharing: string;
    qrCodeGenerator: string;
    barCodeGenerator: string;
    imageEditor: string;
    // Add any specific keys you know you'll use
}

const translations: { [key: string]: LanguageTranslations } = {
    en: {
        searchPlaceholder: "Search...",
        switchLanguage: "切换到中文",
        pdfConversion: "PDF Conversion",
        onlinePdfEditor: "Online PDF Editor",
        aiImageUpscaler: "AI Image Upscaler",
        imageBackgroundRemover: "Image Background Remover",
        fileSharing: "File Sharing",
        qrCodeGenerator: "QR Code Generator",
        barCodeGenerator: "Bar Code Generator",
        imageEditor: "Image Editor",
        // other keys...
    },
    zh: {
        searchPlaceholder: "搜索...",
        switchLanguage: "Switch to English",
        pdfConversion: "PDF转换",
        onlinePdfEditor: "在线PDF编辑器",
        aiImageUpscaler: "AI图像放大器",
        imageBackgroundRemover: "图片背景移除",
        fileSharing: "文件共享",
        qrCodeGenerator: "二维码生成器",
        barCodeGenerator: "条形码生成器",
        imageEditor: "图像编辑器",
        // other keys...
    },
};


export default translations;
