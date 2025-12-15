import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import PDFDownload from '@site/src/components/PDFDownload';
import styles from './styles.module.css';

export default function FooterWrapper(props) {
  return (
    <>
      <div className={styles.pdfDownloadContainer}>
        <PDFDownload />
      </div>
      <Footer {...props} />
    </>
  );
}
