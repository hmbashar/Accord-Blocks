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
	)
);
