import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { question, answer, openByDefault, accordionMode } = attributes;

	const blockProps = useBlockProps({
		className: `accord-faq ${openByDefault ? "is-open" : ""}`,
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("FAQ Settings", "accord-blocks")}>
					<ToggleControl
						label={__("Open by default", "accord-blocks")}
						checked={openByDefault}
						onChange={(value) => setAttributes({ openByDefault: value })}
					/>
					<ToggleControl
						label={__("Accordion Mode (close others)", "accord-blocks")}
						checked={accordionMode}
						onChange={(value) => setAttributes({ accordionMode: value })}
						help={__(
							"If enabled, opening one FAQ will close others in the same group.",
							"accord-blocks",
						)}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="accord-faq-header">
					<RichText
						tagName="h4"
						className="accord-faq-question"
						value={question}
						onChange={(value) => setAttributes({ question: value })}
						placeholder={__("Add your question…", "accord-blocks")}
					/>
					<span className="accord-faq-icon">▼</span>
				</div>
				<RichText
					tagName="p"
					className="accord-faq-answer"
					value={answer}
					onChange={(value) => setAttributes({ answer: value })}
					placeholder={__("Add your answer…", "accord-blocks")}
				/>
			</div>
		</>
	);
}
