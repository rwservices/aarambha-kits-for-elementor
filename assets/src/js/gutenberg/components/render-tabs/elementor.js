const { __ } = wp.i18n;

const { Fragment } = wp.element;

const proLabel =
  aarambhaKitsBuild.pro === "yes" ? "pro-addon-active" : "pro-addon-inactive";

const freeLabel =
  aarambhaKitsBuild.pro === "yes" ? "pro-addon-active" : "free-addon-active";

const { CardBody, BaseControl, ToggleControl, CardMedia } = wp.components;

const URL = aarambhaKitsBuild.URL;

export const RenderElementor = (props) => {
  const { settings, setSetting } = props.props;
  return (
    <Fragment>
      <div
        className="columns"
        data-columns="1"
        data-columns-md="2"
        data-columns-lg="3"
      >
        <CardBody className={`column ${freeLabel}`}>
          <BaseControl label={__("Block Heading", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-1"]}
              onChange={() => {
                setSetting(
                  "block-element-1",
                  !(settings && settings["block-element-1"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-1.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${freeLabel}`}>
          <BaseControl label={__("Block News Ticker", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-2"]}
              onChange={() => {
                setSetting(
                  "block-element-2",
                  !(settings && settings["block-element-2"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-2.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${freeLabel}`}>
          <BaseControl label={__("Block Hero Slider", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-6"]}
              onChange={() => {
                setSetting(
                  "block-element-6",
                  !(settings && settings["block-element-6"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-6.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${freeLabel}`}>
          <BaseControl label={__("Block Featured Posts", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-3"]}
              onChange={() => {
                setSetting(
                  "block-element-3",
                  !(settings && settings["block-element-3"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-3.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${freeLabel}`}>
          <BaseControl label={__("Block Posts Slider", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-4"]}
              onChange={() => {
                setSetting(
                  "block-element-4",
                  !(settings && settings["block-element-4"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-4.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${freeLabel}`}>
          <BaseControl label={__("Block Posts 1", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-7"]}
              onChange={() => {
                setSetting(
                  "block-element-7",
                  !(settings && settings["block-element-7"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-7.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${freeLabel}`}>
          <BaseControl label={__("Block Posts 2", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-8"]}
              onChange={() => {
                setSetting(
                  "block-element-8",
                  !(settings && settings["block-element-8"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-8.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${freeLabel}`}>
          <BaseControl label={__("Block Posts 3", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-9"]}
              onChange={() => {
                setSetting(
                  "block-element-9",
                  !(settings && settings["block-element-9"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-9.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${freeLabel}`}>
          <BaseControl label={__("Block Posts 4", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-10"]}
              onChange={() => {
                setSetting(
                  "block-element-10",
                  !(settings && settings["block-element-10"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-10.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${freeLabel}`}>
          <BaseControl label={__("Block Posts 5", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-11"]}
              onChange={() => {
                setSetting(
                  "block-element-11",
                  !(settings && settings["block-element-11"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-11.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${freeLabel}`}>
          <BaseControl label={__("Block CTA", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-15"]}
              onChange={() => {
                setSetting(
                  "block-element-15",
                  !(settings && settings["block-element-15"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-15.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${freeLabel}`}>
          <BaseControl label={__("Block Service", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-16"]}
              onChange={() => {
                setSetting(
                  "block-element-16",
                  !(settings && settings["block-element-16"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-16.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${proLabel}`}>
          <BaseControl label={__("Block CountDown", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-12"]}
              onChange={() => {
                setSetting(
                  "block-element-12",
                  !(settings && settings["block-element-12"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-12.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${proLabel}`}>
          <BaseControl label={__("Block Counter", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-13"]}
              onChange={() => {
                setSetting(
                  "block-element-13",
                  !(settings && settings["block-element-13"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-13.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${proLabel}`}>
          <BaseControl label={__("Block Categories", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-14"]}
              onChange={() => {
                setSetting(
                  "block-element-14",
                  !(settings && settings["block-element-14"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-14.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${proLabel}`}>
          <BaseControl label={__("Block Video", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-17"]}
              onChange={() => {
                setSetting(
                  "block-element-17",
                  !(settings && settings["block-element-17"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-17.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${proLabel}`}>
          <BaseControl label={__("Block Instagram", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-18"]}
              onChange={() => {
                setSetting(
                  "block-element-18",
                  !(settings && settings["block-element-18"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-18.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${proLabel}`}>
          <BaseControl label={__("Block Advanced Tab", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-19"]}
              onChange={() => {
                setSetting(
                  "block-element-19",
                  !(settings && settings["block-element-19"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-19.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${proLabel}`}>
          <BaseControl label={__("Block Animated Heading", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-20"]}
              onChange={() => {
                setSetting(
                  "block-element-20",
                  !(settings && settings["block-element-20"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-20.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${proLabel}`}>
          <BaseControl label={__("Block Products", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-21"]}
              onChange={() => {
                setSetting(
                  "block-element-21",
                  !(settings && settings["block-element-21"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-8.png`} />
          </CardMedia>
        </CardBody>

        <CardBody className={`column ${proLabel}`}>
          <BaseControl label={__("Block Tabbed Posts", "aarambha-kits")}>
            <ToggleControl
              label={__("Check to enable", "aarambha-kits")}
              checked={settings && settings["block-element-5"]}
              onChange={() => {
                setSetting(
                  "block-element-5",
                  !(settings && settings["block-element-5"])
                );
              }}
            />
          </BaseControl>
          <CardMedia>
            <img src={`${URL}/assets/build/images/block-element-5.png`} />
          </CardMedia>
        </CardBody>
      </div>
    </Fragment>
  );
};
