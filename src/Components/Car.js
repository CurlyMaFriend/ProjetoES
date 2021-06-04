import { Redirect } from 'react-router-dom'

const Car = ({ func, car }) => {

    const getCar = () => {
        console.log("Entrou getcar")
        return (<Redirect to={'/car/' + car.id} />)
    }

    return (
        <>
            <div className="col-xs-12 col-md-6 col-lg-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                    <div className="card-header text-muted border-bottom-0">
                        {car.brand}
                    </div>
                    <div className="card-body pt-0">
                        <div className="row">
                            <div className="col-7">
                                <h2 className="lead"><b>{car.model}</b></h2>
                                <p className="text-muted text-sm"><b>About: </b> {car.color} </p>
                            </div>
                            <div className="col-5 text-center">
                                <img src={car.image} alt="user-avatar" className="rounded img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="h4 text-muted"><i className="fas fa-euro-sign"></i> {car.price.toFixed(2).toLocaleString()} </p>
                            </div>
                            {/* <ul class="ml-4 mb-0 fa-ul text-muted">
                                <li class="small"><i class="fas fa-lg fa-euro-sign"></i> Price: {preco}</li>
                            </ul> */}
                            <div className="text-right col-lg-6">
                                <a className="btn btn-sm btn-primary" href={'/car/' + car.id}>
                                    <i className="fas fa-car" /> View Details </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Car
