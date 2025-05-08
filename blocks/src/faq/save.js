import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { question, answer, openByDefault, accordionMode } = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: `accord-faq ${openByDefault ? "is-open" : ""}`,
				"data-accordion": accordionMode ? "true" : "false",
			})}
		>
			<div className="accord-faq-header">
				<RichText.Content
					tagName="h4"
					className="accord-faq-question"
					value={question}
				/>
				<span className="accord-faq-icon">▼</span>
			</div>
			<RichText.Content
				tagName="p"
				className="accord-faq-answer"
				value={answer}
			/>
		</div>
	);
}
