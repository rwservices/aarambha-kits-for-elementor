const { __ } = wp.i18n;

const { Fragment } = wp.element;

const proLabel =
  aarambhaKitsBuild.pro === "yes" ? "pro-addon-active" : "pro-addon-inactive";

const URL = aarambhaKitsBuild.URL;

const {
  CardBody,
  CardDivider,
  BaseControl,
  ToggleControl,
  SelectControl,
  CardMedia,
} = wp.components;

export const RenderWidget = (props) => {
  const { settings, setSetting } = props.props;
  return (
    <Fragment>
      <div
        className="columns"
        data-columns="1"
        data-columns-md="2"
        data-columns-lg="3"
      >
        <CardBody className="column">
          <BaseControl label={__("Block Author", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-widget-1"]}
              onChange={() => {
                setSetting(
                  "block-widget-1",
                  !(settings && settings["block-widget-1"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/images/block-widget-1.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className="column">
          <BaseControl label={__("Block Advertisement", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-widget-2"]}
              onChange={() => {
                setSetting(
                  "block-widget-2",
                  !(settings && settings["block-widget-2"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/images/block-widget-2.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className="column">
          <BaseControl label={__("Block Category", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-widget-3"]}
              onChange={() => {
                setSetting(
                  "block-widget-3",
                  !(settings && settings["block-widget-3"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/images/block-widget-3.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className="column">
          <BaseControl label={__("Block Featured Posts", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-widget-4"]}
              onChange={() => {
                setSetting(
                  "block-widget-4",
                  !(settings && settings["block-widget-4"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/images/block-widget-4.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className="column">
          <BaseControl label={__("Block Popular Posts", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-widget-5"]}
              onChange={() => {
                setSetting(
                  "block-widget-5",
                  !(settings && settings["block-widget-5"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/images/block-widget-5.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${proLabel}`}>
          <BaseControl label={__("Block Two Column Posts", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-widget-6"]}
              onChange={() => {
                setSetting(
                  "block-widget-6",
                  !(settings && settings["block-widget-6"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/images/block-widget-6.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${proLabel}`}>
          <BaseControl label={__("Block Tabbed Posts", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-widget-7"]}
              onChange={() => {
                setSetting(
                  "block-widget-7",
                  !(settings && settings["block-widget-7"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/images/block-widget-7.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${proLabel}`}>
          <BaseControl label={__("Block Social Networks", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-widget-8"]}
              onChange={() => {
                setSetting(
                  "block-widget-8",
                  !(settings && settings["block-widget-8"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/images/block-widget-8.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${proLabel}`}>
          <BaseControl label={__("Block Facebook Page", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-widget-9"]}
              onChange={() => {
                setSetting(
                  "block-widget-9",
                  !(settings && settings["block-widget-9"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/images/block-widget-9.png`} />
          </CardMedia>
        </CardBody>
      </div>
    </Fragment>
  );
};
