/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

// Styles
import '../sass/main.scss';
import '../css/dashboard.css';


// Images.
import '../images/logo.gif';
import '../images/page-post.png';
import '../images/start-designing.png';
import '../images/widget-designing.png';
import '../images/banner-772x250.png';
import '../images/banner-1544x500.png';
import '../images/icon-128x128.png';
import '../images/icon-256x256.png';
import '../images/screenshot-1.png';
import '../images/screenshot-2.png';
import '../images/screenshot-3.png';
import '../images/screenshot-4.png';
import '../images/screenshot-5.png';

/*Code goes here
 * Output : build/index.js
 * */

const { __ } = wp.i18n;

const { render, useState } = wp.element;

const { isEqual } = lodash;

const { apiFetch } = wp;

const {
	TabPanel,
	Notice,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardDivider,
	CardFooter,
	Spinner,
} = wp.components;

import { GetTab, RenderTab } from './gutenberg/components/tabs';

import {
	useComponentDidMount,
	useComponentDidUpdate,
	useComponentWillUnmount,
} from './gutenberg/utils/components';

const AddSettings = () => {
	const [ allSetting, setInitialSetting ] = useState( {} ),
		[ isSaving, setIsSaving ] = useState( false ),
		[ hasNotice, setNotice ] = useState( false ),
		[ hasError, setError ] = useState( false ),
		[ needSave, setNeedSave ] = useState( false );

	const SettingNotice = () => (
		<Notice
			onRemove={ () => setNotice( false ) }
			status={ hasError ? 'error' : 'success' }
		>
			<p>
				{ hasError && __( 'An error occurred.', 'aarambha-kits' ) }
				{ ! hasError && __( 'Saved Successfully.', 'aarambha-kits' ) }
			</p>
		</Notice>
	);

	async function getSettings() {
		let data = await apiFetch( {
			path:
				aarambhaKitsBuild.rest.namespace +
				aarambhaKitsBuild.rest.version +
				'/get_settings',
		} );
		if ( data ) {
			setInitialSetting( data );
		} else {
			setInitialSetting( {} );
		}
	}

	async function setSettings() {
		setIsSaving( true );
		let data = await apiFetch( {
			path:
				aarambhaKitsBuild.rest.namespace +
				aarambhaKitsBuild.rest.version +
				'/set_settings',
			method: 'POST',
			data: {
				settings: allSetting,
			},
		} );
		if ( isEqual( allSetting, data ) ) {
			setError( false );
			setIsSaving( false );
			setNeedSave( false );
			setInitialSetting( data );
		} else {
			setIsSaving( false );
			setError( true );
			setNeedSave( true );
		}
		setNotice( true );
	}

	const setStateSettings = ( key, val ) => {
		let newSetting = Object.assign( {}, allSetting );
		newSetting[ key ] = val;
		setInitialSetting( newSetting );
		setNeedSave( true );
	};

	useComponentDidMount( () => {
		getSettings();
	} );

	useComponentDidUpdate( () => {
		/*Nothing for now*/
	} );

	useComponentWillUnmount( () => {
		/*Nothing for now*/
	} );

	if ( ! Object.keys( allSetting ).length ) {
		return <Spinner />;
	}
	return (
		<Card>
			<CardHeader style={ { overflow: 'hidden', height: '70px' } }>
				<h1>{ __( 'Aarambha Kits Settings', 'aarambha-kits' ) }</h1>
				{ hasNotice && ! isSaving && <SettingNotice /> }
			</CardHeader>
			<CardBody>
				<TabPanel
					className="aarambha-kits"
					activeClass="aarambha-kits-tab-active"
					tabs={ GetTab() }
				>
					{ ( tab ) => (
						<RenderTab
							tab={ tab }
							settings={ allSetting }
							setSetting={ setStateSettings }
						/>
					) }
				</TabPanel>
			</CardBody>
			<CardDivider />
			<CardFooter>
				<Button
					className="button"
					onClick={ () => setSettings() }
					isPrimary
					disabled={ isSaving || ! needSave }
				>
					{ needSave
						? __( 'Save Settings', 'aarambha-kits' )
						: __( 'Saved', 'aarambha-kits' ) }
					{ isSaving ? <Spinner /> : '' }
				</Button>
			</CardFooter>
		</Card>
	);
};
document.addEventListener( 'DOMContentLoaded', () => {
	if (
		'undefined' !==
			typeof document.getElementById( aarambhaKitsBuild.root_id ) &&
		null !== document.getElementById( aarambhaKitsBuild.root_id )
	) {
		render(
			<AddSettings />,
			document.getElementById( aarambhaKitsBuild.root_id )
		);
	}
} );

