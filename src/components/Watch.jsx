import React, { useState, useEffect } from "react";

function Watch(props) {
  const { name } = props.data;
  const { timezone } = props.data;
  const { setWatches } = props;

  const [updated, setUpdated] = useState(new Date());
  let timeoutId;

  const handleDelete = (evt) => {
    evt.preventDefault();
    setWatches((prevWatches) => prevWatches.filter((o) => o.name !== name));
  };

  const setTime = () => {
    setUpdated(new Date());
  };

  const formatTime = (date) => {
    let hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds();
    const offset = hours + Number(timezone);
    if (offset >= 24) {
      hours = offset - 24;
    } else if (offset < 0) {
      hours = offset + 24;
    } else {
      hours = offset;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(setTime, []);

  useEffect(() => {
    timeoutId = setTimeout(setTime, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [updated]);

  return (
    <div>
      <div className="time-header-wrapper">
        <h4 className="city-name">{name}</h4>
        <button className="delete-button" onClick={handleDelete}>
          х
        </button>
      </div>
      <p className="timezone">Часовой пояс: {timezone}</p>
      <p className="time">{formatTime(updated)}</p>
    </div>
  );
}

export default Watch;
