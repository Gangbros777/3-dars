
alert("Xozir sizda random raqamlar chiqadi:)");
let randomNumber = Math.round(Math.random() * 100);
alert(`Random number: ${randomNumber}`);
let answer = confirm("Biz random raqamni 2ga ko'paytirmoqchimiz va u random raqamni 2ga bo'lmoqchimiz");
alert(`Biz ${randomNumber} sonini ikkiga ko'paytirdik shunda ${randomNumber*2} soni hosil bo'ldi. Random raqamni  2ga bo'lganimizda ${randomNumber/2} soni hosil bo'ldi`)