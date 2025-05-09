import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	RichText,
	PanelColorSettings,
} from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	TextControl,
	__experimentalUnitControl as UnitControl,
	__experimentalBorderControl as BorderControl,
} from "@wordpress/components";

const ALLOWED_BLOCKS = ["accord/faq"];
const PRESET_COLORS = [
	{ name: "Black", slug: "black", color: "#000000" },
	{ name: "White", slug: "white", color: "#FFFFFF" },
	{ name: "Gray", slug: "gray", color: "#CCCCCC" },
	{ name: "Red", slug: "red", color: "#FF4136" },
	{ name: "Blue", slug: "blue", color: "#0074D9" },
	{ name: "Green", slug: "green", color: "#2ECC40" },
];

export default function Edit({ attributes, setAttributes }) {
	const {
		accordionMode,
		groupTitle,
		groupTitleColor,
		groupTitleFontSize,
		groupTitleFontFamily,
		groupGap,
		groupBorder,
	} = attributes;

	const baseProps = useBlockProps({
		className: "accord-faq-group",
		"data-accordion": accordionMode ? "true" : "false",
	});

	const blockProps = {
		...baseProps,
		style: {
			...baseProps.style,
			rowGap: groupGap || undefined,
			borderWidth: groupBorder?.width || undefined,
			borderRadius: groupBorder?.radius || undefined,
			borderColor: groupBorder?.color || undefined,
			borderStyle: groupBorder?.style || undefined,
		},
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Group Settings", "accord-blocks")}>
					<ToggleControl
						label={__("Accordion Mode (close others)", "accord-blocks")}
						checked={accordionMode}
						onChange={(value) => setAttributes({ accordionMode: value })}
						help={__(
							"If enabled, opening one FAQ will close others in this group.",
							"accord-blocks",
						)}
					/>
				</PanelBody>
			</InspectorControls>

			<InspectorControls group="styles">
				<PanelBody
					title={__("Group Title", "accord-blocks")}
					initialOpen={false}
				>
					<PanelColorSettings
						title={__("Title Color", "accord-blocks")}
						colorSettings={[
							{
								value: groupTitleColor,
								onChange: (value) => setAttributes({ groupTitleColor: value }),
								label: __("Text Color", "accord-blocks"),
							},
						]}
					/>
					<UnitControl
						label={__("Font Size", "accord-blocks")}
						value={groupTitleFontSize}
						onChange={(value) => setAttributes({ groupTitleFontSize: value })}
						min={10}
					/>
					<TextControl
						label={__("Font Family", "accord-blocks")}
						value={groupTitleFontFamily}
						onChange={(value) => setAttributes({ groupTitleFontFamily: value })}
						placeholder="e.g., Roboto, Arial, sans-serif"
					/>
				</PanelBody>
				<PanelBody title={__("Item Gap", "accord-blocks")} initialOpen={false}>
					<UnitControl
						label={__("Gap between items", "accord-blocks")}
						value={groupGap}
						onChange={(value) => setAttributes({ groupGap: value })}
						min={0}
					/>
				</PanelBody>
				<PanelBody
					title={__("Border", "accord-blocks")}
					initialOpen={false}
				>
					<BorderControl
						label={__("Group Border", "accord-blocks")}
						value={groupBorder}
						onChange={(newBorder) => setAttributes({ groupBorder: newBorder })}
						colors={PRESET_COLORS}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<RichText
					tagName="h3"
					className="accord-faq-group-title"
					value={groupTitle}
					onChange={(value) => setAttributes({ groupTitle: value })}
					placeholder={__("Add Group Title (optional)…", "accord-blocks")}
					style={{
						color: groupTitleColor || undefined,
						fontSize: groupTitleFontSize ? groupTitleFontSize : undefined,
						fontFamily: groupTitleFontFamily || undefined,
					}}
				/>

				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={[["accord/faq"]]}
					templateLock={false}
				/>
			</div>
		</>
	);
}
