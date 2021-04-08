import React from 'react';
import './BoxComp.css';

const convertDate = date => {
  const d = new Date(date);
  const dateStr = d.toLocaleDateString();
  const timeStr = d.toLocaleTimeString({}, {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  });

  return `${dateStr} ${timeStr}`;
}

function BoxComp({ data }) {
  return (
    <div className="data-elements">
      <div>Name: {data.name}</div>
      <div>Email: {data.email}</div>
      <div>Status: {data.status}</div>
      <div>Date: {convertDate(data.created_at)}</div>
    </div>
  );
}

export default BoxComp
