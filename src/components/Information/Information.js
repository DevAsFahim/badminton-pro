import React, { useEffect, useState } from 'react';
import './Information.css'
import userImg from '../../image/my-image.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { addToDb, getStoredTime } from '../../utilities/fakedb';

const Information = (props) => {
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        const storedTime = localStorage.getItem('Break-time');
        setBreakTime(storedTime)
    }, [])

    const addBreakTime = (time) => {
        setBreakTime(time);
        // addToDb(time)
        localStorage.setItem('Break-time', time)
    }
    const showToast = () => {
        toast.success("Congratulations! your activity completed.", {
            position: "top-center",
        });
    }
    return (
        <div className='information'>
            <div className="user_info">
                <div className="user">
                    <img src={userImg} alt="" />
                    <div>
                        <h5>A S Fahim</h5>
                        <small className='text-muted'>Badminton player</small>
                    </div>
                </div>
                <div className="profile">
                    <p><strong>Olympic:</strong> <strong className='text-warning'>2 Gold</strong></p>
                    <p><strong>World cup:</strong> <strong className='text-warning'>3 Gold</strong></p>
                    <p><strong>Sudirman cup:</strong> <strong className='text-muted'>2 Silver</strong></p>
                </div>
            </div>
            <div>
                <h5>Add a Break</h5>
                <div className="break_time">
                    <span onClick={()=> addBreakTime(10)}>10m</span>
                    <span onClick={()=> addBreakTime(20)}>20m</span>
                    <span onClick={()=> addBreakTime(40)}>40m</span>
                    <span onClick={()=> addBreakTime(60)}>60m</span>
                </div>
            </div>
            <div className="exercise_time">
                <h5 className=''>Exercise Details</h5>
                <p><strong>Exercise time:</strong> <span><b>{props.exerciseTime}</b> <small className="text-muted">minutes</small></span> </p>
                <p><strong>Break time:</strong> <span><b>{breakTime}</b> <small className="text-muted">minutes</small></span> </p>
            </div>
            <button onClick={showToast} className='btn btn-warning w-100 mt-5'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Information;