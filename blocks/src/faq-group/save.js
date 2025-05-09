import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		accordionMode,
		groupTitle,
		groupTitleColor,
		groupTitleFontSize,
		groupTitleFontFamily,
        groupGap,
        groupBorder
	} = attributes;

    const baseProps = useBlockProps.save({
        className: 'accord-faq-group',
        'data-accordion': accordionMode ? 'true' : 'false'
    });
    
    const blockProps = {
        ...baseProps,
        style: {
            ...baseProps.style,
            rowGap: groupGap || undefined,
            borderWidth: groupBorder?.width || undefined,
            borderRadius: groupBorder?.radius || undefined,
            borderColor: groupBorder?.color || undefined,
            borderStyle: groupBorder?.style || undefined
        }
    };
    
    
    return (
        <div {...blockProps}>
            {groupTitle && (
                <RichText.Content
                    tagName="h3"
                    className="accord-faq-group-title"
                    value={groupTitle}
                    style={{
                        color: groupTitleColor || undefined,
                        fontSize: groupTitleFontSize ? groupTitleFontSize : undefined,
                        fontFamily: groupTitleFontFamily || undefined
                    }}
                />
            )}
            <InnerBlocks.Content />
        </div>
    );
}