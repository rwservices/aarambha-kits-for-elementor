<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://aarambhathemes.com/
 * @since      1.0.0
 *
 * @package    Aarambha_Kits
 * @subpackage Aarambha_Kits/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Aarambha_Kits
 * @subpackage Aarambha_Kits/public
 * @author     Aarambha Themes <aarambhathemes@gmail.com>
 */
class Aarambha_Kits_Public
{

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string $plugin_name       The name of the plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct($plugin_name, $version)
	{

		$this->plugin_name = $plugin_name;
		$this->version     = $version;
	}


	/**
	 * Register the CSS/JavaScript Resources for the admin area.
	 *
	 * Use Condition to Load it Only When it is Necessary
	 *
	 * @since    1.0.0
	 */
	public function enqueue_resources()
	{

		// Enqueue Scripts
		wp_enqueue_script('swiper', AARAMBHA_KITS_URL . 'assets/build/library/swiper/swiper-bundle.js', array('jquery'), '12.1.4');
		wp_script_add_data('swiper', 'strategy', 'defer');

		wp_enqueue_script('newsTicker', AARAMBHA_KITS_URL . 'assets/library/jquery-newsTicker/jquery.newsTicker.js', array('jquery'), '1.0.11');
		wp_script_add_data('newsTicker', 'strategy', 'defer');

		wp_enqueue_script('aarambha-kits-public', AARAMBHA_KITS_URL . 'assets/build/js/public.js', array('jquery'), AARAMBHA_KITS_VERSION);
		wp_script_add_data('aarambha-kits-public', 'strategy', 'defer');

		wp_enqueue_script('aarambha-kits-widget', AARAMBHA_KITS_URL . 'assets/build/js/widget.js', array('swiper', 'newsTicker'), AARAMBHA_KITS_VERSION);
		wp_script_add_data('aarambha-kits-widget', 'strategy', 'defer');

		// Enqueue Styles
		wp_enqueue_style('swiper', AARAMBHA_KITS_URL . 'assets/build/library/swiper/swiper-bundle.css', false, '12.1.4');
		wp_enqueue_style('aarambha-kits-public', AARAMBHA_KITS_URL . 'assets/build/css/public.css', false, AARAMBHA_KITS_VERSION);
		wp_enqueue_style('aarambha-kits-widget', AARAMBHA_KITS_URL . 'assets/build/css/widget.css', array('swiper'), AARAMBHA_KITS_VERSION);

		// Inline style
		wp_add_inline_style('aarambha-kits-public', Aarambha_Kits_Inline_Style::css_output('front-end'));
	}
}
