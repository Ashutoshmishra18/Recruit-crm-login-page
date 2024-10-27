// Toggle Settings Section
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === "none" ? "block" : "none";
  }
  
  // Simulated Login
  function login(event) {
    event.preventDefault();
    alert("Logged in successfully! Redirecting to Admin Settings...");
  }
  
  // Import Candidate
  function importCandidate() {
    const feedback = document.getElementById("feedback");
    feedback.innerText = "Importing candidate...";
  
    setTimeout(() => {
      feedback.innerText = "Candidate successfully imported!";
    }, 2000);
  }
// Function to handle LinkedIn Sign-Up
function signUpWithLinkedIn() {
    const linkedinUrl = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=r_liteprofile%20r_emailaddress';
    window.open(linkedinUrl, '_blank');
  }

  // Function to handle Google Sign-Up
  function signUpWithGoogle() {
    const googleUrl = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile';
    window.open(googleUrl, '_blank');
  }

  // Placeholder login function
  function login(event) {
    event.preventDefault();
    alert("Logging in...");
  }  