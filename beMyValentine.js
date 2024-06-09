        const yesButton = document.getElementById('yes-button'); 
        const noButton = document.getElementById('no-button'); 
        const happyImage = document.getElementById('happy-image'); 
        const message = document.getElementById('message');
        const popupMessage = document.getElementById('popup-message');
        let messageIndex=0;
        const messages = [
                "Sorry 😔",
                "Try Again! 🔄",
                "Wrong Answer 🙁",
                "Last Chance ⚠️",
                "Need helpline? 📞",
                "Phone A Friend 🙂",
                "Audience Poll 📊",
                "Audience says click YES 👍",
                "Don't click me ❌",
                "Just say yes ✔️",
                "I'm going to crash now 💥",
                "Buh Bye! 👋"
            ];
        noButton.addEventListener('click', () => {
         if (messageIndex < messages.length) {
            noButton.style.width = 'auto';
            noButton.style.minWidth = '0px'; 
            noButton.style.maxWidth = 'none';
            const currentFontSize = window.getComputedStyle(yesButton).fontSize;
            const newFontSize = parseFloat(currentFontSize) + 12;
            yesButton.style.fontSize = `${newFontSize}px`;
            yesButton.style.padding = `${parseFloat(currentFontSize) + 10}px ${parseFloat(currentFontSize) + 20}px`;
            const randomMessage = messages[messageIndex];
            noButton.textContent = randomMessage;
            const messageFontSize = "16px";
            noButton.innerHTML = `<span style="font-size: ${messageFontSize};">${randomMessage}</span>`;
            messageIndex++;
         }else{
             noButton.style.display = 'none';
         }
        });
        
        yesButton.addEventListener('click', () => {
            const imageUrl = "https://media.tenor.com/345jgF_f61YAAAAi/milk-mocha.gif";
            happyImage.src = imageUrl;
            happyImage.style.display = 'block';
            happyImage.style.margin = 'auto';
            message.style.display = 'none';
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
            // Show the image container with the message
            //popupMessage.style.display = 'block';
            document.querySelector('.image-container').style.display = 'block';
   
            // Start toggling the popup message
            setInterval(() => {
            if (popupMessage.style.display === 'none') {
              popupMessage.style.display = 'block';
              setTimeout(() => {
              popupMessage.style.display = 'none';
              }, 500); // Duration in milliseconds (3000 milliseconds = 3 seconds)
            } else {
              popupMessage.style.display = 'none';
            }
          }, 1000); // Change the interval as desired
        });

        happyImage.addEventListener('click', () => {
            window.location.href = "https://wa.me/919618552772?text=I'ld love to take you out on a dinner date tonight❤️";
        });
