// دالة الطلب المباشر عبر واتساب
function orderNow(productName) {
    // رقم واتساب العميل (من الصور)
    const phoneNumber = "905342512071"; 
    
    const message = `مرحباً ROWIDA TEX،\nأود الاستفسار عن المنتج التالي:\n- ${productName}\n\nهل هو متوفر؟ وما هو السعر؟`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}