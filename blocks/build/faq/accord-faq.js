/******/ (() => { // webpackBootstrap
/*!*******************************!*\
  !*** ./src/faq/accord-faq.js ***!
  \*******************************/
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accord-faq').forEach(faqBlock => {
    const question = faqBlock.querySelector('.accord-faq-question');
    if (question) {
      question.addEventListener('click', () => {
        // If accordion style: close other FAQs in the same container
        const parent = faqBlock.parentElement;
        parent.querySelectorAll('.accord-faq').forEach(item => {
          if (item !== faqBlock) {
            item.classList.remove('is-open');
          }
        });

        // Toggle current FAQ
        faqBlock.classList.toggle('is-open');
      });
    }
  });
});
/******/ })()
;
//# sourceMappingURL=accord-faq.js.map