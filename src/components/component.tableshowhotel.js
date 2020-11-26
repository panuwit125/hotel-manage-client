import React from "react";
import { Table} from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name_hotel',
    key: 'name_hotel',
    //render: text => <a>{text}</a>,
  },
  {
    title: 'Price',
    dataIndex: 'price_hotel',
    key: 'price_hotel',
  },
  {
    title: 'Location',
    dataIndex: 'province_hotel',
    key: 'province_hotel',
  },
  {
    title: 'Country',
    dataIndex: 'country_hotel',
    key: 'country_hotel',
  }
];


export default function StickyHeadTable({data}) {
  console.log(data)

  return (
      <Table columns={columns} dataSource={data} />
  );
}
