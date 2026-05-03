function checkPassword() {
    const passwordInput = document.getElementById('password-input').value;
    const lottieElement = document.getElementById('lottie-lock');
    const loginContainer = document.querySelector('.glass-box'); // Assuming this is your login box class
    
    const secretWord = "jaaneman06"; 

    if (passwordInput === secretWord) {
        // 1. Play the Lottie Animation
        if (lottieElement && lottieElement.dotLottie) {
            lottieElement.dotLottie.play();
        } else {
            lottieElement.play();
        }

        // 2. Visual Polish: Fade out the login box slightly
        if (loginContainer) {
            loginContainer.style.transition = "opacity 1.5s ease";
            loginContainer.style.opacity = "0";
        }

        // 3. Redirect to the Hub after the animation finishes
        setTimeout(() => {
            window.location.href = "dashboard.html"; 
        }, 2200); 

    } else {
        // If the password is wrong - adding a little "shake" would be cool here later!
        alert("Incorrect secret word. Access Denied. Dhyaan se socho, phir try karo!");
        document.getElementById('password-input').value = ""; 
    }
}

// Keep the 'Enter' key listener
document.getElementById('password-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});



// This ensures the code only runs AFTER the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    const heartIcon = document.getElementById('heartIcon');
    const closeBtn = document.getElementById('closeBtn');
    const overlay = document.getElementById('messageOverlay');

    // 1. Open Message logic
    if (heartIcon) {
        heartIcon.addEventListener('click', () => {
            overlay.style.display = 'flex';
        });
    }

    // 2. Close Message logic
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    }

    // 3. Close if clicking outside the card
    window.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    // 4. Keep your existing Password logic here too
    // (Add your checkPassword function below if this is the same file)
});


