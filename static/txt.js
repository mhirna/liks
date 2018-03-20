bottom: '0',
color: #aaa,
left: '0',
line-height: '34px',
padding-left: '10px',
padding-right: '10px',
position: absolute,
right: 0,
top: 0,
max-width: 100%,
overflow: hidden,
text-overflow: ellipsis,
white-space: nowrap,
}


fetch('http://10.10.120.131:5000/props', {
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: '*omit', // include, same-origin, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      // mode: 'no-cors', // no-cors, cors, *same-origin
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      redirect: 'follow', // *manual, follow, error
      referrer: 'no-referrer', // *client, no-referrer
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
      var result = new Array();
      for (var el in response) {
          result.push({value:response[el][0], label:response[el][0]});
          console.log(response[el][0]);
      }
      console.log(result);
      return result;})
