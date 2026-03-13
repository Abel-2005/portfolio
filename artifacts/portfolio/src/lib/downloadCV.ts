import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { PORTFOLIO_DATA } from './data';

export const generateAndDownloadCV = async (elementRef: React.RefObject<HTMLElement | null>) => {
  if (!elementRef.current) return;

  try {
    const canvas = await html2canvas(elementRef.current, {
      scale: 2, // Higher resolution
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    
    // Download the PDF
    const filename = `${PORTFOLIO_DATA.personal.name.replace(/\s+/g, '_')}_CV.pdf`;
    pdf.save(filename);
    
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
};
