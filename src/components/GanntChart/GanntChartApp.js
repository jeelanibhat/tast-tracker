import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import GSTC from "gantt-schedule-timeline-calendar";
// import GanttHeader from "gantt-elastic-header";
import dayjs from "dayjs";

const GanntChartApp = () => {
  //   useEffect(() => {
  //     activateApp();
  //   }, []);

  const rowsFromDB = [
    {
      id: "1",
      label: "Row 1",
    },
    {
      id: "2",
      label: "Row 2",
    },
  ];

  const itemsFromDB = [
    {
      id: "1",
      label: "Item 1",
      rowId: "1",
      time: {
        start: GSTC.api.date("2020-01-01").startOf("day").valueOf(),
        end: GSTC.api.date("2020-01-02").endOf("day").valueOf(),
      },
    },
    {
      id: "2",
      label: "Item 2",
      rowId: "1",
      time: {
        start: GSTC.api.date("2020-02-01").startOf("day").valueOf(),
        end: GSTC.api.date("2020-02-02").endOf("day").valueOf(),
      },
    },
    {
      id: "3",
      label: "Item 3",
      rowId: "2",
      time: {
        start: GSTC.api.date("2020-01-15").startOf("day").valueOf(),
        end: GSTC.api.date("2020-01-20").endOf("day").valueOf(),
      },
    },
  ];

  const columnsFromDB = [
    {
      id: "id",
      label: "ID",
      data: ({ row }) => GSTC.api.sourceID(row.id), // show original id (not internal GSTCID)
      sortable: ({ row }) => Number(GSTC.api.sourceID(row.id)), // sort by id converted to number
      width: 80,
      header: {
        content: "ID",
      },
    },
    {
      id: "label",
      data: "label",
      sortable: "label",
      isHTML: false,
      width: 230,
      header: {
        content: "Label",
      },
    },
  ];

  // Configuration object
  const config = {
    // for free key for your domain please visit https://gstc.neuronet.io/free-key
    // if you need commercial license please visit https://gantt-schedule-timeline-calendar.neuronet.io/pricing
    licenseKey:
      "====BEGIN LICENSE KEY====\nT4kKG7AtiKloARZOUuCaMaeYkjdCRjwPTcbQdMP4pIhhPki1IeUo/IBCJodJ6Nbpzni2IwxALbBqHMOY+kv1SX7w54a6fQ1DYuCXtFWZOXOGLH3RsppGnKgS7zJMxsm3nXLvOg5AuJot/8DAavvURmWiLzE6OKsdWSfh2OFA2uFT8pgIi+JQjmK5z4Zzv5z/0ekkxvBgp5TNz73ILaaTghmCdIUuBistszW8pM6IyDtKBBKD+E5O4K/pRP7dbYb4d+e9jST3SzMy2PGEW+ri3aVi3tRupEnfKN4cfw+eGGQ1AmQjk1JrWPH8Lo3HBw+22KOCq4aMPc4HiNcbGyRZYA==||U2FsdGVkX196zJBhRP1+QRPTvj3RuGnnKLowanYBVLK42tUK0GB1+pykKkXioRp7x5qN/JmVgT+rRrJeouqkgaWr9BPkjEa6QtPWnC4/23w=\nSWnMIzi2BgcLdkZuow2sRZytwpJvAmMyCjmbBP9lpgpgKHdiFW4O0BCKdpuqDPmQoCHLXzvjwV+SQ8JEq9iS+2aYF8O85mID0pb5mHTf9K3SbWedckHK0pUBqdr7XUujZwb75AoXH+pYKO+hzRIQMqG3S5CQEuclas+0HJXtN9QNoF37A8YGF6Um4r04rZQVxmyzCRhrZo2sYdsIq4KPoMQw57OXz+lj5MCrryreVRUhOXBjw7xquQalifbL7miMNx+QgEAYd4v3L6zWvNqMpyd7zlE5uZrZhG/HqZTZyfie4/blE/4FrMQe96SS16J3SVPQcz+Yd6NO348Hc1vDhQ==\n====END LICENSE KEY====",

    list: {
      columns: {
        data: GSTC.api.fromArray(columnsFromDB),
      },
      rows: GSTC.api.fromArray(rowsFromDB),
    },
    chart: {
      items: GSTC.api.fromArray(itemsFromDB),
    },
  };

  // Generate GSTC state from configuration object
  const state = GSTC.api.stateFromConfig(config);
  console.log("state:", state);

  // Mount the component
  const app = GSTC({
    element: document.getElementById("gstc"),
    state,
  });

  return (
    <div className="gannt-chart-app container">
      <h2>Gannt Chart React</h2>
      {/* <div id="gstc"></div> */}
    </div>
  );
};

export default GanntChartApp;
