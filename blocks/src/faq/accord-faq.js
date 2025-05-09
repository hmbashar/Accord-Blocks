document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".accord-faq").forEach((faqBlock) => {
		const header = faqBlock.querySelector(".accord-faq-header");
		const answer = faqBlock.querySelector(".accord-faq-answer");

		if (!answer) return;

		// 🔥 NEW: Set initial height if open by default
		if (faqBlock.classList.contains("is-open")) {
			answer.style.maxHeight = answer.scrollHeight + "px";
		}

		if (header) {
			header.addEventListener("click", () => {
				const isAccordion = faqBlock.dataset.accordion === "true";

				if (isAccordion) {
					//const parent = faqBlock.parentElement;
					// Get the closest parent group (or fallback to parentElement)
					const parent = faqBlock.closest(".accord-faq-group") || faqBlock.parentElement;

					parent.querySelectorAll(".accord-faq").forEach((item) => {
						if (item !== faqBlock) {
							item.classList.remove("is-open");
							const otherAnswer = item.querySelector(".accord-faq-answer");
							if (otherAnswer) {
								otherAnswer.style.maxHeight = null;
							}
						}
					});
				}

				faqBlock.classList.toggle("is-open");

				if (faqBlock.classList.contains("is-open")) {
					// Set dynamic height based on scrollHeight
					answer.style.maxHeight = answer.scrollHeight + "px";
				} else {
					// Collapse smoothly
					answer.style.maxHeight = null;
				}
			});
		}
	});
});
