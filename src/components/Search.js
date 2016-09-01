import React,{Component} from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import $ from "jquery";
import Elas from 'elasticsearch';
import Pagination from "react-js-pagination";
import Griddle from 'griddle-react';


var client = new Elas.Client({
    host: 'localhost:9200',

});

var fakeData =  [
  {
    "id": 1,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 2,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 3,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 4,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 5,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 6,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 7,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 8,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 9,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 10,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 11,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 12,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 13,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  }
];

class Search extends Component {
  constructor() {
    super();
    document.search = this;
    this.state={
      valueSearch:'',
      checkRock: true,
      numberSong:0,
      timeSearch: 0,
      data:[],
      urlData:'http://localhost:9200/customer/music/_search',
      params:'',
      lastData:[],
      test:'',
      xxx:[],
      timkiem:['title','single','author'],
      begin:0,
      maxPag:0,
      activePage:1
    };
  }

  getSearch=(evt)=>{
    this.setState({
      valueSearch: evt.target.value
    });
  }

  check=()=>{
    this.setState({
      checkRock: !this.state.checkRock
    });
    console.log(this.state.checkRock);
  }

  plus=()=>{

    if (this.state.begin <= this.state.maxPag-3) {
      this.setState({begin:this.state.begin + 3});

      this.loadAjax();
    }

  }

  minus=()=>{
    if (this.state.begin >= 3) {
      this.setState({begin: this.state.begin -3});
      this.loadAjax();

    }
  }

  loadAjax=()=>{
      console.log('---------------------------------------Begin:',this.state.begin);
    var datas=[];
    var minidata=[];
    client.search({
      index: 'customer',
      type: 'song',
      body: {
        from:this.state.begin,
        size:3,
        query: {
          multi_match: {
          query:'hun',
          fields:this.state.timkiem,
          fuzziness:1.5,
          slop:2
        }
          },
          highlight: {
      			pre_tags:["<span style='background-color: red'>"],
      			post_tags:["</span>"],
      			fields : {
      				single : {},
              title:{},
              author:{}
      			}
		}
        }
    }).then(function (resp) {

        var  hit= resp.hits.hits;
        var max = resp.hits.total;
        var time = resp.took/1000;
        var colour=[];
        for (var i = 0; i < hit.length; i++) {
          if (hit[i]['highlight']['title']) {
            hit[i]['_source']['title'] = hit[i]['highlight']['title'];
          }
          if (hit[i]['highlight']['single']) {
            hit[i]['_source']['single'] = hit[i]['highlight']['single'];
          }
          if (hit[i]['highlight']['author']) {
            hit[i]['_source']['author'] = hit[i]['highlight']['author'];
          }
          // hit[i]['_source']['title'] = hit[i]['highlight']['title'];
          datas.push(hit[i]['_source']);
          colour.push(hit[i]['highlight']['title']);

        }

        document.search.setState({data : hit, test:datas, maxPag: max});
        document.search.setState({numberSong:datas.length, timeSearch:time});

    }, function (err) {
        console.trace('aaaaaaaaa----------------------',err.message);
        });

  }
checkAjax=()=>{
    console.log('++++++++++++++++++++++++++++++++++++++',this.state.data);
}

handlePageChange=(pageNumber)=> {
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',pageNumber,this.state.begin);

  this.setState({
    activePage: pageNumber,
    begin: (pageNumber-1)*3
  },()=>{this.loadAjax();});

}

  render(){

  return(

      <div>
        <FormGroup>
          <FormControl value={this.state.valueSearch} onChange={this.getSearch} type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button   type="submit">Search</Button>

          <div>
            Found {this.state.maxPag} songs in {this.state.timeSearch} second
          </div>

        <div>
          {this.state.valueSearch}
        </div>
          <div>
            <Button  onClick={()=>this.loadAjax()} className="digital"></Button>
            <Button  onClick={()=>this.checkAjax()} className="digital"></Button>
          </div>
          <div>
            {this.state.data.length}
          </div>
          <button onClick={()=>this.minus()}>Minus</button>
          <button onClick={()=>this.plus()}>Plus</button>
              {/* <div dangerouslySetInnerHTML={{__html:this.state.test}} /> */}


      {/*}  <Griddle results={this.state.test} /> */}
        <div>
          {this.state.data.map((person, index) => (
              <p><div dangerouslySetInnerHTML={{__html:person._source.title}} /> from <div dangerouslySetInnerHTML={{__html:person._source.single}} /> to <div dangerouslySetInnerHTML={{__html:person._source.author}} />!</p>
          ))}

        </div>
        <Pagination
          activePage={this.state.activePage}
          totalItemsCount={this.state.maxPag}
          itemsCountPerPage={3}
          onChange={this.handlePageChange.bind(this)}
        />

      </div>
    );
  }
}

export default Search;
