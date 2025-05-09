<?php
// This file is generated. Do not modify it manually.
return array(
	'faq' => array(
		'apiVersion' => 3,
		'name' => 'accord/faq',
		'title' => 'FAQ Block',
		'category' => 'widgets',
		'icon' => 'editor-help',
		'description' => 'A simple FAQ block with accordion functionality.',
		'attributes' => array(
			'question' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.accord-faq-question'
			),
			'answer' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.accord-faq-answer'
			),
			'openByDefault' => array(
				'type' => 'boolean',
				'default' => false
			),
			'accordionMode' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'supports' => array(
			'color' => array(
				'background' => true,
				'text' => true
			),
			'typography' => true
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'script' => 'file:./accord-faq.js'
	),
	'faq-group' => array(
		'apiVersion' => 3,
		'name' => 'accord/faq-group',
		'title' => 'FAQ Group',
		'category' => 'design',
		'icon' => 'list-view',
		'description' => 'Group multiple FAQ blocks together.',
		'attributes' => array(
			'accordionMode' => array(
				'type' => 'boolean',
				'default' => true
			),
			'groupTitle' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.accord-faq-group-title'
			),
			'groupTitleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'groupTitleFontSize' => array(
				'type' => 'string',
				'default' => ''
			),
			'groupTitleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'groupGap' => array(
				'type' => 'string',
				'default' => '15px'
			),
			'groupBorder' => array(
				'type' => 'object',
				'default' => array(
					'width' => '',
					'radius' => '',
					'color' => '',
					'style' => ''
				)
			)
		),
		'supports' => array(
			'anchor' => false,
			'multiple' => true,
			'color' => array(
				'background' => true
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'border' => array(
				'radius' => true,
				'width' => true,
				'color' => true,
				'style' => true
			),
			'layout' => array(
				'type' => 'default'
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css'
	)
);
