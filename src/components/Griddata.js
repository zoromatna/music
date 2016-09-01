import React,{components} from 'react';
import ReactDom from 'react-dom';
import {Table} from 'pui-react-table';

var columns = [
 {
   attribute: 'title',
   displayName: 'Title',
   sortable: false
 },
 {
   attribute: 'instances',
   sortable: true
 },
 {
   attribute: 'bar',
   displayName: 'Bar',
   sortable: true,
   headerProps: {
     className: 'bar-header',
     id: 'barId'
   },
   sortBy: function(value) { return -value; }
 },
 {
   attribute: 'unsortable',
   sortable: false
 }
];
var data = [
 {
   instances: '1',
   bar: 11,
   title: 'foo',
   unsortable: '14',
 },
 {
   instances: '3',
   bar: 7,
   title: 'sup',
   unsortable: '22'
 },
 {
   title: 'yee',
   instances: '2',
   bar: 8,
   unsortable: '1'
 }
];

class Griddata extends Table {
render(){
    return(
      <Table columns={columns} data={data} defaultSort='instances'/>
    );
  }
}

export default Griddata;
