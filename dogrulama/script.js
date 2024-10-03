document.getElementById('codeForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Formun sayfa yenilemesini engelle
    
    const userAnswer = document.getElementById('code').value;
    const correctAnswer = "akif";  // Doğru cevap
    const hcaptchaResponse = hcaptcha.getResponse();  // hCaptcha cevabı

    // hCaptcha doğrulanmadıysa hata ver
    if (hcaptchaResponse.length === 0) {
        alert('Lütfen Güvenlik doğrulamasını tamamlayın.');
        return;
    }

    // Kullanıcı cevabını kontrol et
    if (userAnswer === correctAnswer) {
        // Formu sunucuya gönderme ya da başka bir işlevi yerine getirme
        alert('Doğru cevap ve Güvenlik Doğrulaması tamamlandı! Siteye yönlendiriliyorsunuz.');
        window.location.href = "anasayfa.html";  // Siteye yönlendir
    } else {
        document.getElementById('errorMessage').classList.remove('hidden');  // Hata mesajını göster
    }
});
