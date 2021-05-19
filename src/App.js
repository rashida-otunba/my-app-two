// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="body">
      <div className="container">
        <div className="aside">
          <div className="h1">Learn to code by watching others</div>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but
                understanding how developers think is invaluable. </p>
        </div>

        <div className="section">
          <div className="button1">
            <div className="h3">Try it free 7 days</div>
            <div className="h4">then $20/mo. thereafter</div>
          </div>
        </div>


        <div className="form">
          <div className="input-text">
            <input type="text" id="FirstName" placeholder="First Name "/>
              <label for="FirstName"></label>

              <input type="text" id="LastName" placeholder="Last Name"/>
                <label for="LastName"></label>

                <input type="email" id="EmailAddress" placeholder="Email Address"/>
                  <label for="EmailAddress"></label>

                  <input type="password" id="Password" placeholder="Password"/>
                    <label for="Password"></label>
        </div>
        
        <div className="buttonDiv">
                <div className="button2">CLAIM YOUR FREE TRIAL</div>
                </div>
                <div className="h5">By clicking the button, you are agreeing to our <span>Terms and Services</span></div>
               
        </div>
        </div>
        </div>
        </div>
        )}
    
export default App;
