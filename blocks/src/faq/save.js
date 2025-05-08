import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { question, answer, openByDefault } = attributes;

    return (
        <div {...useBlockProps.save({
            className: `accord-faq ${openByDefault ? 'is-open' : ''}`
        })}>
            <RichText.Content tagName="h4" className="accord-faq-question" value={question} />
            <RichText.Content tagName="div" className="accord-faq-answer" value={answer} />
        </div>
    );
}