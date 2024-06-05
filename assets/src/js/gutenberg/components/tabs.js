const { __ } = wp.i18n;

import { RenderElementor } from './render-tabs/elementor';
import { RenderWidget } from './render-tabs/widget';

export const GetTab = () => {
	return [
		{
			name: 'elementor',
			title: __( 'Elementor Widget', 'aarambha-kits' ),
			className: 'aarambha-kits-elementor',
		},
		{
			name: 'widget',
			title: __( 'WP Widget', 'aarambha-kits' ),
			className: 'aarambha-kits-widget',
		},
	];
};

export const RenderTab = ( props ) => {
	if ( 'elementor' === props.tab.name ) {
		return <RenderElementor props={ props } />;
	} else if ( 'widget' === props.tab.name ) {
		return <RenderWidget props={ props } />;
	}

	return '';
};
