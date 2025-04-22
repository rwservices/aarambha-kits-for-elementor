<?php

/**
 * Get the Plugin Default Options.
 *
 * @link            https://aarambhathemes.com/
 * @since           1.0.0
 * @package         Aarambha_Kits
 * @author          Aarambha Themes <aarambhathemes@gmail.com>
 *
 * @return array    Default options array.
 */
if (! function_exists('aarambha_kits_default_options')) {
	function aarambha_kits_default_options()
	{
		$default_theme_options = [
			'block-element-1'  => true,
			'block-element-2'  => true,
			'block-element-3'  => true,
			'block-element-4'  => true,
			'block-element-5'  => true,
			'block-element-6'  => true,
			'block-element-7'  => true,
			'block-element-8'  => true,
			'block-element-9'  => true,
			'block-element-10' => true,
			'block-element-11' => true,
			'block-element-12' => true,
			'block-element-13' => true,
			'block-element-14' => true,
			'block-element-15' => true,
			'block-element-16' => true,
			'block-element-17' => true,
			'block-element-18' => true,
			'block-element-19' => true,
			'block-element-20' => true,
			'block-element-21' => true,
			'block-widget-1'   => true,
			'block-widget-2'   => true,
			'block-widget-3'   => true,
			'block-widget-4'   => true,
			'block-widget-5'   => true,
			'block-widget-6'   => true,
			'block-widget-7'   => true,
			'block-widget-8'   => true,
			'block-widget-9'   => true,
		];

		/**
		 * Filters the default theme options.
		 *
		 * @param array $default_theme_options Default options array.
		 */
		return apply_filters('aarambha_kits_default_options', $default_theme_options);
	}
}

/**
 * Get the Plugin Saved Options.
 *
 * @link            https://aarambhathemes.com/
 * @since           1.0.0
 * @package         Aarambha_Kits
 * @author          Aarambha Themes <aarambhathemes@gmail.com>
 *
 * @param string    $key Optional. Option key to retrieve a specific value.
 * @return mixed    Array of all options or a specific option value.
 */
if (! function_exists('aarambha_kits_get_options')) {
	function aarambha_kits_get_options($key = '')
	{
		$options = get_option('aarambha_kits_options', []);
		$default_options = aarambha_kits_default_options();

		if (! empty($key)) {
			$key = sanitize_key($key); // Sanitize the key for security.
			return isset($options[$key]) ? $options[$key] : ($default_options[$key] ?? '');
		}

		return array_merge($default_options, (array) $options);
	}
}

/**
 * Delete the Plugin Saved Options.
 *
 * @link            https://aarambhathemes.com/
 * @since           1.0.0
 * @package         Aarambha_Kits
 * @author          Aarambha Themes <aarambhathemes@gmail.com>
 *
 * @param string    $key Optional. Option key to delete a specific option.
 * @return bool     True if deletion/update was successful, false otherwise.
 */
if (! function_exists('aarambha_kits_delete_options')) {
	function aarambha_kits_delete_options($key = '')
	{
		if (! empty($key)) {
			$key = sanitize_key($key); // Sanitize the key.
			$options = get_option('aarambha_kits_options', []);
			if (isset($options[$key])) {
				unset($options[$key]);
				return update_option('aarambha_kits_options', $options);
			}
		} else {
			return delete_option('aarambha_kits_options');
		}
		return false;
	}
}

/**
 * Check Aarambha Kits Pro Version.
 *
 * @link            https://aarambhathemes.com/
 * @since           1.0.0
 * @package         Aarambha_Kits
 * @author          Aarambha Themes <aarambhathemes@gmail.com>
 *
 * @return bool     True if Pro version is active, false otherwise.
 */
if (! function_exists('aarambha_kits_pro_version')) {
	function aarambha_kits_pro_version()
	{
		return class_exists('Aarambha_Kits_Pro');
	}
}

/**
 * Get an array of terms from a taxonomy.
 *
 * @link            https://aarambhathemes.com/
 * @since           1.0.0
 * @package         Aarambha_Kits
 * @author          Aarambha Themes <aarambhathemes@gmail.com>
 *
 * @param string|array $taxonomies Taxonomy slug(s) to retrieve terms from.
 * @return array       Array of term slug => term name pairs.
 */
if (! function_exists('aarambha_kits_get_terms')) {
	function aarambha_kits_get_terms($taxonomies)
	{
		$items = [];

		$terms = get_terms([
			'taxonomy'   => (array) $taxonomies, // Ensure taxonomies is an array.
			'hide_empty' => true,
		]);

		if (! is_wp_error($terms) && ! empty($terms)) {
			foreach ($terms as $term) {
				$items[$term->slug] = esc_html($term->name);
			}
		}

		return $items;
	}
}

/**
 * Return custom WP query arguments.
 *
 * @link            https://aarambhathemes.com/
 * @since           1.0.0
 * @package         Aarambha_Kits
 * @author          Aarambha Themes <aarambhathemes@gmail.com>
 *
 * @param array     $settings   Query settings.
 * @param int       $paged      Current page number.
 * @param string    $post_type  Post type to query (default: 'post').
 * @return array    Query arguments.
 */
if (! function_exists('aarambha_kits_query_agrs')) {
	function aarambha_kits_query_agrs($settings, $paged, $post_type = 'post')
	{
		$args = [
			'paged'               => absint($paged),
			'posts_per_page'      => 4,
			'post_status'         => 'publish',
			'no_found_rows'       => true, // Corrected typo: 'no_rows_found' to 'no_found_rows'.
			'ignore_sticky_posts' => true,
		];

		$new_args = [
			'post_type' => sanitize_text_field($post_type),
		];

		// Posts Per Page
		if (! empty($settings['base_posts_limit'])) {
			$new_args['posts_per_page'] = absint($settings['base_posts_limit']);
		}

		// Order By
		if (! empty($settings['base_orderby'])) {
			$new_args['orderby'] = sanitize_key($settings['base_orderby']);
		}

		// Order
		if (! empty($settings['base_order'])) {
			$new_args['order'] = strtoupper(sanitize_key($settings['base_order'])); // Ensure ASC/DESC.
		}

		// Offset
		if (! empty($settings['base_posts_offset']) && $settings['base_posts_offset'] > 0) {
			$offset        = absint($settings['base_posts_offset']);
			$post_per_page = ! empty($settings['base_posts_limit']) ? absint($settings['base_posts_limit']) : 4;
			$new_args['offset'] = $offset + (($paged - 1) * $post_per_page);
		}

		// Exclude Posts
		$excluded_posts = [];
		if (! empty($settings['base_exclude_ids'])) {
			$excluded_posts = array_merge($excluded_posts, wp_parse_id_list($settings['base_exclude_ids']));
		}
		if (! empty($excluded_posts)) {
			$new_args['post__not_in'] = $excluded_posts;
		}

		// Taxonomy Queries
		$new_args['tax_query'] = [];
		if (! empty($settings['base_tax_category_post_filter'])) {
			$new_args['tax_query'][] = [
				'taxonomy' => 'category',
				'field'    => 'slug',
				'terms'    => array_map('sanitize_text_field', (array) $settings['base_tax_category_post_filter']),
			];
		}
		if (! empty($settings['base_tax_post_tag_post_filter'])) {
			$new_args['tax_query'][] = [
				'taxonomy' => 'post_tag',
				'field'    => 'slug',
				'terms'    => array_map('sanitize_text_field', (array) $settings['base_tax_post_tag_post_filter']),
			];
		}

		// Remove empty tax_query
		if (empty($new_args['tax_query'])) {
			unset($new_args['tax_query']);
		}

		return wp_parse_args($new_args, $args);
	}
}

/**
 * Displays an optional post thumbnail.
 *
 * @link            https://aarambhathemes.com/
 * @since           1.0.0
 * @package         Aarambha_Kits
 * @author          Aarambha Themes <aarambhathemes@gmail.com>
 *
 * @param string    $size      Image size (default: 'full').
 * @param string    $ratio     Image ratio (default: '16x9').
 * @param string    $md_ratio  Medium screen ratio (optional).
 * @param string    $lg_ratio  Large screen ratio (optional).
 */
if (! function_exists('aarambha_kits_post_thumbnail')) {
	function aarambha_kits_post_thumbnail($size = 'full', $ratio = '16x9', $md_ratio = null, $lg_ratio = null)
	{
		if (post_password_required() || is_attachment()) {
			return;
		}

		$md_ratio = $md_ratio ?? $ratio;
		$lg_ratio = $lg_ratio ?? $ratio;

		$ratio_attrs = sprintf(
			'data-ratio="%s" data-md-ratio="%s" data-lg-ratio="%s"',
			esc_attr($ratio),
			esc_attr($md_ratio),
			esc_attr($lg_ratio)
		);

?>
		<figure class="post-featured-image" <?php echo $ratio_attrs; ?>>
			<a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
				<?php if (has_post_thumbnail()) : ?>
					<?php
					the_post_thumbnail($size, [
						'alt' => the_title_attribute(['echo' => false]),
					]);
					?>
				<?php else : ?>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="
						alt="<?php esc_attr_e('Placeholder Image', 'aarambha-kits'); ?>" />
				<?php endif; ?>
			</a>
		</figure>
	<?php
	}
}

/**
 * Display or return the category names for Elementor widgets.
 *
 * @link            https://aarambhathemes.com/
 * @since           1.0.0
 * @package         Aarambha_Kits
 * @author          Aarambha Themes <aarambhathemes@gmail.com>
 *
 * @param bool      $display Whether to display (true) or return (false) the output.
 * @return string   Category HTML if $display is false.
 */
if (! function_exists('aarambha_kits_post_category')) {
	function aarambha_kits_post_category($display = true)
	{
		$categories = get_the_category();
		if (empty($categories)) {
			return '';
		}

		$output = '<div class="entry-categories d-flex flex-wrap">';
		foreach ($categories as $category) {
			$output .= sprintf(
				'<a class="post-category cat-item-%d" href="%s" rel="category tag">%s</a>',
				absint($category->term_id),
				esc_url(get_category_link($category->term_id)),
				esc_html($category->name)
			);
		}
		$output .= '</div>';

		if ($display) {
			echo wp_kses_post($output);
		}

		return $output;
	}
}

/**
 * Display the post meta HTML content.
 *
 * @link            https://aarambhathemes.com/
 * @since           1.0.0
 * @package         Aarambha_Kits
 * @author          Aarambha Themes <aarambhathemes@gmail.com>
 *
 * @param array     $post_meta Array of post meta settings.
 */
if (! function_exists('aarambha_kits_post_meta')) {
	function aarambha_kits_post_meta($post_meta = null)
	{
		if (empty($post_meta) || ! is_array($post_meta)) {
			return;
		}

		ksort($post_meta);
	?>
		<div class="aarambha-kits-entry-meta d-flex flex-wrap align-items-center">
			<?php
			foreach ($post_meta as $meta) {
				switch ($meta['type']) {
					case 'tag':
						if ('post' === get_post_type()) {
							$tags_list = get_the_tag_list('', esc_html_x(', ', 'list item separator', 'aarambha-kits'));
							if ($tags_list) {
								printf('<div class="tag-list">%s</div>', wp_kses_post($tags_list));
							}
						}
						break;

					case 'author':
						$author_avatar = get_avatar(get_the_author_meta('user_email'), apply_filters('aarambha_kits_meta_avatar_size', 20));
						$byline = sprintf(
							'<span class="author vcard">%s</span>',
							esc_html(get_the_author())
						);
						printf(
							'<div class="byline"><a class="url fn n d-flex align-items-center" href="%s">%s %s</a></div>',
							esc_url(get_author_posts_url(get_the_author_meta('ID'))),
							wp_kses_post($author_avatar),
							wp_kses_post($byline)
						);
						break;

					case 'date':
						$time_string = '<time class="entry-date post-meta-item published updated" datetime="%1$s">%2$s</time>';
						if (get_the_time('U') !== get_the_modified_time('U')) {
							$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
						}
						$time_string = sprintf(
							$time_string,
							esc_attr(get_the_date(DATE_W3C)),
							esc_html(get_the_date()),
							esc_attr(get_the_modified_date(DATE_W3C)),
							esc_html(get_the_modified_date())
						);
						printf(
							'<div class="post-date"><a href="%s" rel="bookmark">%s</a></div>',
							esc_url(get_month_link(get_the_time('Y'), get_the_time('m'))),
							$time_string
						);
						break;

					case 'comment':
						if (! post_password_required() && (comments_open() || get_comments_number())) {
							echo '<div class="comments-link">';
							comments_popup_link(
								sprintf(
									/* translators: %s: Post title. */
									__('Leave a comment<span class="screen-reader-text"> on %s</span>', 'aarambha-kits'),
									get_the_title()
								)
							);
							echo '</div>';
						}
						break;

					case 'post-views':
						if (class_exists('Aarambha_Kits_Post_Views')) {
							echo '<div class="post-views">';
							echo wp_kses_post(Aarambha_Kits_Post_Views::get_instance()->post_views_display(get_the_ID()));
							echo '</div>';
						}
						break;

					case 'read-time':
						echo '<div class="post-read-time">';
						aarambha_kits_read_time();
						echo '</div>';
						break;
				}
			}
			?>
		</div><!-- .aarambha-kits-entry-meta -->
<?php
	}
}

/**
 * Display content with character or word limitation.
 *
 * @link            https://aarambhathemes.com/
 * @since           1.0.0
 * @package         Aarambha_Kits
 * @author          Aarambha Themes <aarambhathemes@gmail.com>
 *
 * @param int       $length       Content length limit.
 * @param string    $content_type Content type ('characters' or 'words').
 * @param string    $end          Suffix to append (optional).
 */
if (! function_exists('aarambha_kits_content_limit')) {
	function aarambha_kits_content_limit($length = 150, $content_type = 'characters', $end = '')
	{
		global $post;

		$length = absint($length);
		$content_type = in_array($content_type, ['characters', 'words']) ? $content_type : 'characters';

		if (! empty($post->post_excerpt)) {
			$content = apply_filters('the_excerpt', $post->post_excerpt);
		} else {
			$content = apply_filters('the_content', $post->post_content);
			$content = preg_replace('@\[caption[^\]]*?\].*?\[\/caption]@si', '', $content);
			$content = preg_replace('@<script[^>]*?>.*?</script>@si', '', $content);
			$content = preg_replace('@<style[^>]*?>.*?</style>@si', '', $content);
			$content = strip_shortcodes($content);
			$content = strip_tags($content);
		}

		if ($content_type === 'characters') {
			$content = substr($content, 0, $length);
			$content = substr($content, 0, strrpos($content, ' '));
			$content = trim(preg_replace('/\s+/', ' ', $content));
			$content .= $end;
		} else {
			$content = wp_trim_words($content, $length, $end);
		}

		echo wpautop(wp_kses_post($content));
	}
}

/**
 * Display reading time for the post content.
 *
 * @link https://aarambhathemes.com/
 * @since 1.0.0
 * @package Aarambha_Kits
 * @author Aarambha Themes <aarambhathemes@gmail.com>
 */
if (! function_exists('aarambha_kits_read_time')) {
	function aarambha_kits_read_time()
	{
		global $post;

		$content = $post->post_content;
		$word_count = str_word_count(strip_tags($content));
		$image_count = substr_count($content, '<img');
		$minutes = floor($word_count / 200);
		$seconds = floor((
			$word_count % 200) / (200 / 60));
		$image_time = ($image_count * 10) / 60;
		$total_time = round($minutes +
			$image_time);
		$estimate = $total_time >= 1
			? sprintf('%d %s, %d %s', $total_time, esc_html__('Min', 'aarambha-kits'), $seconds, esc_html__(
				'Sec',
				'aarambha-kits'
			))
			: sprintf('%d %s', $seconds, esc_html__('Sec', 'aarambha-kits'));

		printf('<span class="calculated-time">%s %s</span>', esc_html($estimate), esc_html__(
			'Read',
			'aarambha-kits'
		));
	}
}

/**
 * Remove elements from a multidimensional array based on key and values.
 *
 * @link https://aarambhathemes.com/
 * @since 1.0.0
 * @package Aarambha_Kits
 * @author Aarambha Themes <aarambhathemes@gmail.com>
 *
 * @param array $array Multidimensional array.
 * @param string $key Array key to check.
 * @param array $values Values to remove.
 * @return array Filtered array.
 */
if (! function_exists('aarambha_kits_remove_element')) {
	function aarambha_kits_remove_element($array, $key, $values)
	{
		if (! is_array($array) || empty($key) || ! is_array($values)) {
			return $array;
		}

		return array_filter($array, function ($sub_array) use ($key, $values) {
			return ! isset($sub_array[$key]) || ! in_array($sub_array[$key], $values, true);
		});
	}
}

/**
 * Sanitize checkbox input.
 *
 * @link https://aarambhathemes.com/
 * @since 1.0.1
 * @package Aarambha_Kits
 * @author Aarambha Themes <aarambhathemes@gmail.com>
 *
 * @param mixed $checked Checkbox value.
 * @return bool Sanitized boolean value.
 */
if (! function_exists('aarambha_kits_sanitize_checkbox')) {
	function aarambha_kits_sanitize_checkbox($checked)
	{
		return filter_var($checked, FILTER_VALIDATE_BOOLEAN);
	}
}
