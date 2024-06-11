<?php
 /**
  * Aarambha Kits wp base widget class
  *
  * @link       https://aarambhathemes.com/
  * @since      1.0.0
  *
  * @package    Aarambha_Kits
  * @subpackage Aarambha_Kits/includes/widgets
  * @author     Aarambha Themes <aarambhathemes@gmail.com>
  */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // If this file is called directly, abort.
}

/**
 * Aarambha Kits Widget.
 *
 * Class Base_WP_Widget
 *
 * @extends  WP_Widget
 */
abstract class Base_WP_Widget extends WP_Widget {

	/**
	 * CSS class.
	 *
	 * @var string
	 */
	public $widget_cssclass;

	/**
	 * Widget description.
	 *
	 * @var string
	 */
	public $widget_description;

	/**
	 * Widget ID.
	 *
	 * @var string|bool
	 */
	public $widget_id = false;

	/**
	 * Widget name.
	 *
	 * @var string
	 */
	public $widget_name;

	/**
	 * Settings.
	 *
	 * @var array
	 */
	public $settings = array();

	/**
	 * Widget Control Options.
	 *
	 * @var array
	 */
	public $control_options = array();

	/**
	 * Widget customize selective refresh.
	 *
	 * @var bool
	 */
	public $customize_selective_refresh = true;

	/**
	 * Constructor.
	 */
	public function __construct() {

		$widget_options = array(
			'classname'                   => $this->widget_cssclass,
			'description'                 => $this->widget_description,
			'customize_selective_refresh' => $this->customize_selective_refresh,
		);

		parent::__construct( $this->widget_id, $this->widget_name, $widget_options, $this->control_options );

	}

	/**
	 * Updates a particular instance of a widget.
	 *
	 * @param array $new_instance New instance.
	 * @param array $old_instance Old instance.
	 *
	 * @return array
	 * @see    WP_Widget->update
	 */
	public function update( $new_instance, $old_instance ) {

		$instance = $old_instance;

		if ( empty( $this->settings ) ) {
			return $instance;
		}

		// Loop settings and get values to save.
		foreach ( $this->settings as $key => $setting ) {
			if ( ! isset( $setting['type'] ) ) {
				continue;
			}

			// Format the value based on settings type.
			switch ( $setting['type'] ) {

				case 'url':
					$instance[ $key ] = isset( $new_instance[ $key ] ) ? esc_url_raw( $new_instance[ $key ] ) : $setting['default'];
					break;

				case 'textarea':
					$instance[ $key ] = wp_kses( trim( wp_unslash( $new_instance[ $key ] ) ), wp_kses_allowed_html( 'post' ) );
					break;

				case 'image':
					/**
					 * Array of valid image file types.
					 *
					 * The array includes image mime types that are included in wp_get_mime_types()
					 */
					$mimes = array(
						'jpg|jpeg|jpe' => 'image/jpeg',
						'gif'          => 'image/gif',
						'png'          => 'image/png',
						'bmp'          => 'image/bmp',
						'tiff|tif'     => 'image/tiff',
						'ico'          => 'image/x-icon',
					);

					// Return an array with file extension and mime_type.
					$file = wp_check_filetype( $new_instance[ $key ], $mimes );

					// If $new_instance[ $key ] has a valid mime_type, assign it to $instance[ $key ], otherwise, assign empty value to $instance[ $key ].
					$instance[ $key ] = $file['ext'] ? $new_instance[ $key ] : $setting['default'];
					break;

				case 'checkbox':
					$instance[ $key ] = ! empty( $new_instance[ $key ] ) ? 1 : 0;
					break;

				case 'number':
					$instance[ $key ] = is_numeric( $new_instance[ $key ] ) ? intval( $new_instance[ $key ] ) : $setting['default'];

					if ( isset( $setting['input_attrs']['min'] ) && '' !== $setting['input_attrs']['min'] ) {
						$instance[ $key ] = max( $instance[ $key ], $setting['input_attrs']['min'] );
					}

					if ( isset( $setting['input_attrs']['max'] ) && '' !== $setting['input_attrs']['max'] ) {
						$instance[ $key ] = min( $instance[ $key ], $setting['input_attrs']['max'] );
					}
					break;

				case 'radio':
				case 'select':
					$new_instance[ $key ] = sanitize_key( $new_instance[ $key ] );
					$available_choices    = $setting['choices'];

					$instance[ $key ] = array_key_exists( $new_instance[ $key ], $available_choices ) ? $new_instance[ $key ] : $setting['default'];
					break;

				case 'dropdown_categories':
					$new_instance[ $key ] = ( '-1' == $new_instance[ $key ] ) ? '0' : absint( $new_instance[ $key ] );

					$instance[ $key ] = term_exists( $new_instance[ $key ], 'category' ) ? $new_instance[ $key ] : $setting['default'];
					break;

				case 'dropdown_tags':
					$new_instance[ $key ] = absint( $new_instance[ $key ] );

					$instance[ $key ] = term_exists( $new_instance[ $key ], 'post_tag' ) ? $new_instance[ $key ] : $setting['default'];
					break;

				case 'dropdown_users':
					$new_instance[ $key ] = absint( $new_instance[ $key ] );
					$available_users      = array();
					$all_author_users     = get_users(
						array(
							'who' => 'authors',
						)
					);

					foreach ( $all_author_users as $author_user ) {
						$available_users[ $author_user->ID ] = $author_user->display_name;
					}

					$instance[ $key ] = array_key_exists( $new_instance[ $key ], $available_users ) ? $new_instance[ $key ] : $setting['default'];
					break;

				case 'checkboxes':
					$saved_data       = array();
					$instance[ $key ] = $new_instance[ $key ];

					foreach ( $instance[ $key ] as $item => $value ) {
						$saved_data[ $item ] = isset( $item ) ? 1 : 0;
					}

					$instance[ $key ] = $saved_data;
					break;

				default:
					$instance[ $key ] = isset( $new_instance[ $key ] ) ? sanitize_text_field( $new_instance[ $key ] ) : $setting['default'];
					break;

			}

			/**
			 * Sanitize the value of a setting.
			 */
			$instance[ $key ] = apply_filters( 'aarambha_kits_widget_settings_sanitize_option', $instance[ $key ], $new_instance, $key, $setting );
		}

		return $instance;

	}

	/**
	 * Outputs the settings update form.
	 *
	 * @param array $instance Instance.
	 *
	 * @see   WP_Widget->form
	 */
	public function form( $instance ) {

		if ( empty( $this->settings ) ) {
			return;
		}

		foreach ( $this->settings as $key => $setting ) {
			$value = isset( $instance[ $key ] )
					? $instance[ $key ]
					: ( isset( $setting['default'] ) ? $setting['default'] : '' );

			$field_type = 'text';
			if ( isset( $setting['type'] ) ) {
				$field_type = $setting['type'];
			}

			if ( ! isset( $setting['class'] ) ) {
				$setting['class'] = '';
			}

			if ( ! isset( $setting['css'] ) ) {
				$setting['css'] = '';
			}

			switch ( $field_type ) {

				case 'text':
					?>
					<p>
						<label for="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>">
							<?php echo esc_html( $setting['label'] ); ?>
						</label>

						<input type="text"
							   class="widefat <?php echo esc_attr( $setting['class'] ); ?>"
							   id="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>"
							   name="<?php echo esc_attr( $this->get_field_name( $key ) ); ?>"
							   value="<?php echo esc_attr( $value ); ?>"
						/>
					</p>
					<?php
					break;

				case 'url':
					?>
					<p>
						<label for="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>">
							<?php echo esc_html( $setting['label'] ); ?>
						</label>

						<input type="url"
							   class="widefat <?php echo esc_attr( $setting['class'] ); ?>"
							   id="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>"
							   name="<?php echo esc_attr( $this->get_field_name( $key ) ); ?>"
							   value="<?php echo esc_attr( $value ); ?>"
						/>
					</p>
					<?php
					break;

				case 'textarea':
					?>
					<p>
						<label for="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>">
							<?php echo esc_html( $setting['label'] ); ?>
						</label>

						<textarea class="widefat <?php echo esc_attr( $setting['class'] ); ?>"
								  rows="5"
								  cols="20"
								  id="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>"
								  name="<?php echo esc_attr( $this->get_field_name( $key ) ); ?>"
						><?php echo esc_textarea( $value ); ?></textarea>
					</p>
					<?php
					break;

				case 'image':
					?>
					<div class="media-uploader">
						<p>
							<label for="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>">
								<?php echo esc_html( $setting['label'] ); ?>
							</label>
						</p>

						<div class="media-uploader" id="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>">
							<div class="custom_media_preview">
								<?php if ( $value != '' ) : ?>
									<img class="custom_media_preview_default"
										 src="<?php echo esc_url( $value ); ?>"
										 style="max-width:100%;"
									/>
								<?php endif; ?>
							</div>

							<input type="text"
								   class="widefat custom_media_input"
								   id="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>"
								   name="<?php echo esc_attr( $this->get_field_name( $key ) ); ?>"
								   value="<?php echo esc_attr( $value ); ?>"
								   style="margin-top:5px;"
							/>

							<button class="custom_media_upload button button-secondary button-large"
									id="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>"
									data-choose="<?php esc_attr_e( 'Choose an image', 'aarambha-kits' ); ?>"
									data-update="<?php esc_attr_e( 'Use image', 'aarambha-kits' ); ?>"
									style="width:100%;margin-top:6px;margin-right:30px;"
							>
								<?php esc_html_e( 'Select an Image', 'aarambha-kits' ); ?>
							</button>
						</div>
					</div>
					<?php
					break;

				case 'checkbox':
					?>
					<p>
						<input class="checkbox"
							   id="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>"
							   name="<?php echo esc_attr( $this->get_field_name( $key ) ); ?>"
							   type="checkbox"
							<?php echo esc_attr( ( $value == 1 ) ? 'checked' : '' ); ?>
						/>

						<label for="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>">
							<?php echo esc_html( $setting['label'] ); ?>
						</label>
					</p>
					<?php
					break;

				case 'number':
					?>
					<p>
						<label for="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>">
							<?php echo esc_html( $setting['label'] ); ?>
						</label>

						<input class="widefat <?php echo esc_attr( $setting['class'] ); ?>"
							   id="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>"
							   name="<?php echo esc_attr( $this->get_field_name( $key ) ); ?>"
							   type="number"
							   value="<?php echo esc_attr( $value ); ?>"
							<?php if ( isset( $setting['input_attrs']['step'] ) ) { ?>
								step="<?php echo esc_attr( $setting['input_attrs']['step'] ); ?>"
							<?php } ?>
							<?php if ( isset( $setting['input_attrs']['min'] ) ) { ?>
								min="<?php echo esc_attr( $setting['input_attrs']['min'] ); ?>"
							<?php } ?>
							<?php if ( isset( $setting['input_attrs']['max'] ) ) { ?>
								max="<?php echo esc_attr( $setting['input_attrs']['max'] ); ?>"
							<?php } ?>
						/>
					</p>
					<?php
					break;

				case 'radio':
					?>
					<p>
						<label for="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>">
							<?php echo esc_html( $setting['label'] ); ?>
						</label>

						<?php
						$count = 1;
						foreach ( $setting['choices'] as $choices_key => $choices_value ) {
							if ( 1 !== $count ) {
								echo '<br />';
							}
							?>

							<input type="radio"
								   id="<?php echo esc_attr( $this->get_field_id( $choices_key ) ); ?>"
								   name="<?php echo esc_attr( $this->get_field_name( $key ) ); ?>"
								   value="<?php echo esc_attr( $choices_key ); ?>"
								<?php echo esc_attr( ( $choices_key == $value ) ? 'checked' : '' ); ?>
							/>

							<label for="<?php echo esc_attr( $this->get_field_id( $choices_key ) ); ?>">
								<?php echo esc_html( $choices_value ); ?>
							</label>
							<?php
							$count ++;
						}
						?>
					</p>
					<?php
					break;

				case 'select':
					?>
					<p>
						<label for="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>">
							<?php echo esc_html( $setting['label'] ); ?>
						</label>

						<select class="widefat <?php echo esc_attr( $setting['class'] ); ?>"
								id="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>"
								name="<?php echo esc_attr( $this->get_field_name( $key ) ); ?>"
						>
							<?php foreach ( $setting['choices'] as $choices_key => $choices_value ) { ?>
								<option value="<?php echo esc_attr( $choices_key ); ?>"
									<?php selected( $choices_key, $value ); ?>
								>
									<?php echo esc_html( $choices_value ); ?>
								</option>
							<?php } ?>
						</select>
					</p>
					<?php
					break;

				case 'custom':
					?>
					<div class="custom">
						<label for="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>">
							<?php
							echo wp_kses_post($setting['label']);
							?>
						</label>

						<?php if ( isset( $setting['image_url'] ) ) { ?>
							<div style="text-align: center;">
								<img src="<?php echo esc_url( $setting['image_url'] ); ?>" alt="" />
							</div>
						<?php } ?>
					</div>
					<?php
					break;

				case 'dropdown_categories':
					?>
					<p>
						<label for="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>">
							<?php echo esc_html( $setting['label'] ); ?>
						</label>

						<?php

						wp_dropdown_categories(
							array(
								'show_option_none' => ( isset( $setting['show_option_all'] ) ) ? esc_html( $setting['show_option_all'] ) : '',
								'name'             => $this->get_field_name( $key ),
								'selected'         => $value,
								'class'            => 'widefat postform',
							)
						);
						?>
					</p>
					<?php
					break;

				case 'dropdown_tags':
					?>
					<p>
						<label for="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>">
							<?php echo esc_html( $setting['label'] ); ?>
						</label>

						<?php
						wp_dropdown_categories(
							array(
								'show_option_none' => ( isset( $setting['show_option_all'] ) ) ? esc_html( $setting['show_option_all'] ) : '',
								'name'             => $this->get_field_name( $key ),
								'selected'         => $value,
								'taxonomy'         => 'post_tag',
								'class'            => 'widefat postform',
							)
						);
						?>
					</p>
					<?php
					break;

				case 'dropdown_users':
					?>
					<p>
						<label for="<?php echo esc_attr( $this->get_field_id( $key ) ); ?>">
							<?php echo esc_html( $setting['label'] ); ?>
						</label>

						<?php
						wp_dropdown_users(
							array(
								'show_option_none' => ( isset( $setting['show_option_all'] ) ) ? esc_html( $setting['show_option_all'] ) : '',
								'name'             => $this->get_field_name( $key ),
								'selected'         => $value,
								'orderby'          => 'name',
								'order'            => 'ASC',
								'who'              => 'authors',
								'class'            => 'widefat postform',
							)
						);
						?>
					</p>
					<?php
					break;

				case 'separator':
					?>
					<hr />
					<?php
					break;

				case 'heading':
					$css = 'text-align:center;background-color:#f1f1f1;padding:5px 0;margin-top:5px;';
					if ( ! empty( $setting['css'] ) ) {
						$css = wp_kses_post($setting['css']);
					}
					?>
					<h4 class="widefat <?php echo esc_attr( $setting['class'] ); ?>" style="<?php echo esc_attr( $css ); ?>">
						<span class="field-label"><strong><?php echo esc_html( $setting['label'] ); ?></strong></span>
					</h4>
					<?php
					break;

				// Default: run an action.
				default:
					do_action( 'aarambha_kits_widget_field_' . $setting['type'], $key, $value, $setting, $instance );
					break;
			}
		}

	}

	/**
	 * Output the html at the start of a widget.
	 *
	 * @param array $args Arguments.
	 */
	public function widget_start( $args ) {
		echo wp_kses_post($args['before_widget']);
	}

	/**
	 * Output the html at the end of a widget.
	 *
	 * @param array $args Arguments.
	 */
	public function widget_end( $args ) {
		echo wp_kses_post($args['after_widget']);
	}

	/**
	 * Displays the widget title within the widgets.
	 *
	 * @param string $title    The widget title.
	 * @param string $type     The display posts from the widget setting.
	 * @param int    $category The category id of the widget setting.
	 */
	public function widget_title( $title ) {

		// Return if $title is empty.
		if ( ! $title ) {
			return;
		}

		// Display the title.
		if ( ! empty( $title ) ) {
			echo '<h2>' . esc_html( $title ) . '</h2>';
		}

	}

	/**
	 * Displays the widget description within the widgets.
	 *
	 * @param string $text The widget description.
	 */
	public function widget_description( $text ) {

		// Return if $text is empty.
		if ( ! $text ) {
			return;
		}

		echo '<p>' . wp_kses_post( $text ) . '</p>';

	}

	/**
	 * Displays the post title within the widgets.
	 */
	public function the_title() {
		?>
		<h3 class="entry-title">
			<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
				<?php the_title(); ?>
			</a>
		</h3>
		<?php
	}
}
