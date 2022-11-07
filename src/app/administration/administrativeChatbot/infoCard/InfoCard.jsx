import { Typography } from "@material-ui/core";
import { RadioButtonChecked } from "@material-ui/icons";
import { useStyles } from "./InfoCard.styles";
import elisaMessage from "./elisaMessage.json";

export const InfoCard = (props) => {
  const style = useStyles();
  return (
    <div className={style.mainDiv}>
      <div className={style.heading}>
        <Typography className={style.message}>Ask Elisa</Typography>
      </div>
      <div className={style.info}>
        {props.type === "english" ? (
          <div className={style.infos}>
            {elisaMessage.englishInfo.map((data) => (
              <div className={style.separateInfo}>
                <RadioButtonChecked />
                <Typography>{data.info}</Typography>
              </div>
            ))}
          </div>
        ) : props.type === "tamil" ? (
          <div className={style.infos}>
            {elisaMessage.tamilInfo.map((data) => (
              <div className={style.separateInfo}>
                <RadioButtonChecked />
                <Typography>{data.info}</Typography>
              </div>
            ))}
          </div>
        ) : (
          <div className={style.infos}>
            {elisaMessage.codeMixInfo.map((data) => (
              <div className={style.separateInfo}>
                <RadioButtonChecked />
                <Typography>{data.info}</Typography>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
