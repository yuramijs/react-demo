import axios from 'axios';
import * as af from 'async-file';


//TODO remove localhost
const graphQueryResp = query => axios({
  method: 'post',
  url: 'http://localhost:3000/graphql',
  headers: {'Content-Type': 'application/json'},
  data: JSON.stringify({query: `{ ${query} }`})
});
const sendData = async (link, data, definition) => await axios.post(link, data, definition);
const getData = (link, data) => axios.post(link, data);
const attach = (link, id, name) => sendData(link, {id, name});
const createArrays = item => {
  const newArray = [];
  newArray.push(item);
  return newArray;
};
const checkFolder = async (path) => {
  const existDir = await af.exists(path);
  const createFolder = () => af.mkdir(path);

  if (!existDir) createFolder();
};
const handleInputChange = (event, that) => {
  const {value, name} = event.target;

  that.setState(() => ({
    [name]: value
  }));
};
const changeFormatTime = (moment, date) => moment(date).format('MMMM D, Y');
const getFormValues = that => {
  const form = {};
  for (const name in that.refs) {
    form[name] = that.refs[name].value;
  }
  return form;
};
const unionInArray = (first, second) => first.map((item, index) => [first[index], second[index]]);


export {
  sendData,
  getData,
  attach,
  checkFolder,
  handleInputChange,
  changeFormatTime,
  getFormValues,
  graphQueryResp,
  createArrays,
  unionInArray
};