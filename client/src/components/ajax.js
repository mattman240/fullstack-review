import $ from 'jquery';

const ajax = {
  post: (term) => {
    console.log(term, 'inside ajax')
    $.ajax({
      url: '/repos',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({'data': term}),
      success: () => {
        console.log('data sent')
      },
      err: (err) => {
        console.error(err);
      }
    })
  }
}


export default ajax;
