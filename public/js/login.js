/*eslint-disable*/
const login = async (email, password) => {
  console.log(email, password)
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password
      }
    });
    //get from json after logged in, src='https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.7/axios.min.js' using this module, this module will send data to user after log in
    if (res.data.status === 'success') {
      alert('Logged in successfully');
      window.setTimeout(()=>{
        location.assign('/')
      }, 1500);
    } 
    console.log(res);
  } catch (err) {
    console.log(err.response.data.message);
  }
};
document.querySelector('.form').addEventListener('submit', e => { 
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});
