import './style.css';

async function loadSection(containerId: string, fileName: string) {
  try {
    const response = await fetch(fileName);
    if (!response.ok) throw new Error(`Failed to fetch ${fileName}`);
    const htmlContent = await response.text();
    document.getElementById(containerId)!.innerHTML = htmlContent;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('An unknown error occurred.');
    }
  }
}

// Dynamically load sections
loadSection('hero', 'hero.html');
// loadSection('about', 'about.html');
// loadSection('services', 'services.html');
// loadSection('contact', 'contact.html');
