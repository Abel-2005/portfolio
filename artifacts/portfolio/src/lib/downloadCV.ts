export const generateAndDownloadCV = async (_elementRef?: React.RefObject<HTMLElement | null>) => {
  try {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}Abel_B_Varughese_CV.pdf`;
    link.download = 'Abel_B_Varughese_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch (error) {
    console.error('Error downloading CV:', error);
    return false;
  }
};
