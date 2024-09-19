export const OpenerGoals = ({
  backgroundColor = "rgba(196, 226, 172, .9)",
  position = "bottom left",
  unitLabel = "Unit 5",
  unitTitle = "Animal Habitats",
  offset = "1%",
  goalTextColor = "#000000",
}) => {
  // Define styles based on position
  let marginStyles = "";
  let labelPositionStyle = "left: 2%;";
  let tablePositionStyles = "bottom: 0; left: 0;";

  switch (position) {
    case "bottom right":
      marginStyles = `margin-right: ${offset};margin-bottom: calc(${offset} + (1.363 * clamp(1.6rem, var(--lo-font-size) * 0.808, 50rem)) + 0.8rem);`;
      tablePositionStyles = "bottom: 0; right: 0;";
      break;
    case "top right":
      marginStyles = `margin-right: ${offset}; margin-top: ${offset};`;
      tablePositionStyles = "top: 0; right: 0;";
      break;
    case "top left":
      marginStyles = `margin-left: ${offset}; margin-top: ${offset};`;
      labelPositionStyle = "right: 2%;";
      tablePositionStyles = "top: 0; left: 0;";
      break;
    default: // "bottom left"
      marginStyles = `margin-left: ${offset}; margin-bottom: calc(${offset} + (1.363 * clamp(1.6rem, var(--lo-font-size) * 0.808, 50rem)) + 0.8rem);`;
      break;
  }

  return `
    <div style="position: relative;">
      <figure>
        <img alt="" caption="" data-author="{}" id="300943" longdesc="" src="//cen-author-prod-assets.avallain.net/S3_300943_OW2e_dyl_AmE_L3_u05_opener_p078_v_widescreen.jpg?filename=OW2e_dyl_AmE_L3_u05_opener_p078 v_widescreen.jpg&amp;etag=6682ccb3ffea9d3180fb9ee98fa23107" style="width: 100%; height: auto;" title="OW2e_dyl_AmE_L3_u05_opener_p078 v_widescreen.jpg" />
        <figcaption>
          <p style="p.footnote">Silverback gorilla, Democratic Republic of the Congo</p>
        </figcaption>
      </figure>
      <div style="position: absolute; top: 2%; ${labelPositionStyle}">
        <span style="font-size: calc(var(--lo-font-size) * 1.2) !important; font-weight: 600; color: #f1c40f;">
          ${unitLabel}<br />
          <span style="font-size: calc(var(--lo-font-size) * 1.6) !important; font-weight: 800; color: #ffffff;">
            ${unitTitle}
          </span>
        </span>
      </div>
      <table class="table-default" style="${goalTextColor ? `color: ${goalTextColor};` : ""}padding: 15px; border-radius: 20px; display: inline-block; position: absolute; ${tablePositionStyles} background-color: ${backgroundColor}; ${marginStyles}">
        <tbody>
          <tr>
            <td>
              <strong>In this unit, I will ...</strong>
              <ul>
                <li><strong>name animal habitats.</strong></li>
                <li><strong>say what animals look like.</strong></li>
                <li><strong>talk about animal homes.</strong></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
};
