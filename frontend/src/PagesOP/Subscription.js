import { useDispatch, useSelector } from 'react-redux';
import { setsubscriptioninfo } from '../brewStore/AppState';
import { useNavigate } from 'react-router-dom';

export const Subscription = () => {
    const dispatchappStore = useDispatch();
    const getPersonalData = useSelector((state) => state.appstate.login_info);
    const navigate = useNavigate();

    function handleOnClick(name) {
        if (getPersonalData.isloggedin) {
            const setSlot = name === "silver" ? 3 : name === "gold" ? 5 : 7
            dispatchappStore(setsubscriptioninfo({
                showsubscription: true,
                plan: name,
                slot: setSlot,
            }))
        } else {
            navigate("/profile")
        }

    }
    return (
        <div className="container" style={{ padding: "10px 0 100px 0" }}>
            <div className="my-account-content account-edit">
                <div className="row d-flex justify-content-center m-3">
                    <div className="col-md-3 m-2" style={{ border: "1px solid black" }}>
                        <div className="m-2" style={{ textAlign: "center", fontSize: "50px", fontWeight: "600px" }}>
                            ₹ Silver
                        </div>
                        <div className=" text-center" style={{ height: "100px" }}>
                            Availability : 3 slot <br></br>
                        </div>
                        <div className="text-center">
                            <button
                                onClick={() => handleOnClick("silver")}
                                className="text-center tf-btn btn-fill animate-hover-btn m-3">
                                Subscrible
                            </button>
                        </div>

                    </div>
                    <div className="col-md-3 m-2" style={{ border: "1px solid black" }}>
                        <div className="m-2" style={{ textAlign: "center", fontSize: "50px", fontWeight: "600px" }}>
                            ₹ Gold
                        </div>
                        <div className=" text-center" style={{ height: "100px" }}>
                            Availability : 5 slot <br></br>
                        </div>
                        <div className="text-center">
                            <button
                                onClick={() => handleOnClick("gold")}
                                className="text-center tf-btn btn-fill animate-hover-btn m-3">
                                Subscrible
                            </button>
                        </div>

                    </div>
                    <div className="col-md-3 m-2" style={{ border: "1px solid black" }}>
                        <div className="m-2" style={{ textAlign: "center", fontSize: "49Px", fontWeight: "600px" }}>
                            ₹ platinum
                        </div>
                        <div className=" text-center" style={{ height: "100px" }}>
                            Availability : 7 slot <br></br>
                        </div>
                        <div className="text-center">
                            <button
                                onClick={() => handleOnClick("platinum")}
                                className="text-center tf-btn btn-fill animate-hover-btn m-3">
                                Subscrible
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
