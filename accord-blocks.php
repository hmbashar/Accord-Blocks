<?php
/**
 * Plugin Name: Accord Blocks – The Easiest Accordion & FAQ Blocks
 * Description: Create beautiful, responsive, and SEO-friendly accordions and FAQs with Gutenberg blocks. Features include customizable designs, rich text support, schema markup for FAQs, and smooth animations. Perfect for creating engaging content sections, product FAQs, and knowledge bases.
 * Version: 1.0.0
 * Requires at least: 6.0
 * Requires PHP: 8.0
 * Author: Md Abul Bashar
 * Author URI: http://facebook.com/hmbashar
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: accord-blocks
 * Domain Path: /languages
 *
 * @package AccordBlocks
 * @author Md Abul Bashar
 * @link http://facebook.com/hmbashar
 * @since 1.0.0
 */
namespace AccordBlocks;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

final class Accord_Blocks
{
    /**
     * Singleton instance.
     *
     * @var Accord_Blocks|null
     */
    private static $instance = null;

    /**
     * Get class instance.
     *
     * @return Accord_Blocks
     */
    public static function get_instance(): Accord_Blocks
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor (private).
     */
    private function __construct()
    {
        $this->define_constants();
        $this->init_plugin();
    }

    /**
     * Define plugin constants.
     */
    private function define_constants()
    {
        define('ACCORD_BLOCKS_VERSION', '1.0.0');
        define('ACCORD_BLOCKS_DIR', plugin_dir_path(__FILE__));
        define('ACCORD_BLOCKS_URL', plugin_dir_url(__FILE__));
    }

    /**
     * Initialize plugin functionality.
     */
    private function init_plugin()
    {
        // Include Main class
        if (!class_exists('\AccordBlocks\Inc\Main')) {
            require_once ACCORD_BLOCKS_DIR . 'Inc/Main.php';
        }

        // Initialize the Main class
        if (class_exists('\AccordBlocks\Inc\Main')) {
            \AccordBlocks\Inc\Main::get_instance();
        } else {
            add_action('admin_notices', function () {
                echo '<div class="notice notice-error"><p>';
                esc_html_e('Accord Blocks: Required class could not be loaded.', 'accord-blocks');
                echo '</p></div>';
            });
        }
    }
}

// Kick off the plugin
if (class_exists('\AccordBlocks\Accord_Blocks')) {
    \AccordBlocks\Accord_Blocks::get_instance();
}