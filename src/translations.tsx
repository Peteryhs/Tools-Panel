interface Translations {
    [key: string]: {
        [key: string]: string;
    };
}


const translations: Translations = {

    en: {
        searchPlaceholder: "Search...",
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
