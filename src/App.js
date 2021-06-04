import Header from './Components/Header'
import Footer from './Components/Footer'
import Cars from './Components/Cars'
import CarPage from './Components/CarPage'
import FormReserve from './Components/FormReserve'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

function App() {

  const ServiceID = 'anotherDealership'
  const VinTemplate = 'template_84xvj4a'
  const DeliveryTemplate = 'template_lprm3qq'
  const UserID = 'user_hgQ4MwqiC0g3v0cgJ8tvG'

  const onReserve = (name, email, address, code, city, id) => {

    toast.info('Reserva enviada', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => funcVin(id, email, name, address, city, code)
    });

  }

  const funcVin = async (id, email, name, address, city, code) => {
    await getVin(id, email, name, address, city, code)
  }

  const getVin = async (id, email, name, address, city, code) => {
    // axios.post(`https://p4bpnjfcvj.execute-api.us-east-1.amazonaws.com/dev/reserve`)
    const body = { "id": id }
    axios.post(`https://p4bpnjfcvj.execute-api.us-east-1.amazonaws.com/dev/reserve`, body, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => {
        console.log(res.data)
        enviaEmail(res.data.body, email, name, address, city, code, id)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const enviaEmail = async (vin, email, name, address, city, code, id) => {
    console.log(vin, email, name, address, city, code)

    var templateParams = {
      to_name: name,
      to_vin: vin,
      to_city: city,
      to_code: code,
      to_address: address,
      to_email: email,
    };

    emailjs.send(ServiceID, VinTemplate, templateParams, UserID)
      .then((result) => {
        console.log(result.text);
        getFinalPreps(vin, email, name, address, city, code, id)
      }, (error) => {
        console.log(error.text);
      });
  }

  const enviaEmailFinal = async (vin, plate, email, name, address, city, code) => {

    var templateParams = {
      to_name: name,
      to_vin: vin,
      to_plate: plate,
      to_city: city,
      to_code: code,
      to_address: address,
      to_email: email,
      to_codeqr: "http://api.qrserver.com/v1/create-qr-code/?data=" + vin,
    };

    console.log(templateParams)

    emailjs.send(ServiceID, DeliveryTemplate, templateParams, UserID)
      .then((result) => {
        console.log(result.text);
        window.location.replace("/");
      }, (error) => {
        console.log(error.text);
      });
  }

  const timeout = (delay) => {
    return new Promise(res => setTimeout(res, delay));
  }

  const getFinalPreps = async (vin, email, name, address, city, code, id) => {
    const body = { "VIN": vin }
    axios.post(`https://d10apyn6dl.execute-api.us-east-1.amazonaws.com/dev/plate`, body, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => {
        console.log(res.data)
        finalPreps(vin, email, name, address, city, code, id)
      })
      .catch(err => {
        console.log(err)
      })

  }

  const finalPreps = async (vin, email, name, address, city, code, id) => {
    await timeout(5000)
    axios.get(`https://d10apyn6dl.execute-api.us-east-1.amazonaws.com/dev/plate?VIN=${vin}`)
      .then(res => {
        console.log(res.data)
        enviaEmailFinal(vin, res.data.body, email, name, address, city, code)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="wrapper">
      <Header />
      <Router>
        <div>
          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">
            <Route path='/' exact render={() => (
              <>
                <Cars />
              </>
            )} />
            <Route path='/cars' exact render={(props) => (
              <>
                <Cars />
              </>
            )} />
            <Route path='/car/:id' exact render={(props) => (
              <>
                <CarPage id={props.match.params.id} />
              </>
            )} />
            <Route path='/car/reservation/:id' exact render={(props) => (
              <>
                <FormReserve id={props.match.params.id} onReserve={onReserve} />
              </>
            )} />
            {/* /.content */}
          </div>
          {/* /.content-wrapper */}</div>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
