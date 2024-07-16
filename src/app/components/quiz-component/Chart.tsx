import React from 'react';
import ReactDOM from 'react-dom';
import LineChart from '@/utils/Data';
import { useDispatch } from 'react-redux';
import { increse } from '@/lib/features/counter/counterSlice';
import { useAppSelector } from '@/lib/hooks';
import { increseDisplayCounter } from '@/lib/features/counter/displayCounterSlice';
const Chart: React.FC = () => {
    const dispatch=useDispatch();
    const displayCounter=useAppSelector(state=>state.diplayCounter.items);
    const handleOnclickButton = () => {
        if(displayCounter !=33){
          dispatch(increseDisplayCounter());
        }
        dispatch(increse());
      };
    return (
        <div className='flex justify-center items-center mt-32'>
            <div className='flex-col justify-center items-center'>
                <h1 className='text-3xl text-center font-bold mb-3'>The last plan you’ll ever need <br /> to get in shape</h1>
                <h3 className='text-center text-gray-400 font-semibold'>We predict you’ll be</h3>
                <h1 className='text-xl font-bold text-center text-customGreen mb-3'>60 kg by *May 20, 2025</h1>
            <div className='max-w-[530px]'>
            <LineChart  />
            </div>
            <div className="flex justify-center items-center mt-5 max-w-[410px] mb-5">
          <button
            className="max-w-[325px] bg-customGreen pt-3 pb-3 pl-[110px] pr-[110px] rounded-full text-white font-bold"
            onClick={handleOnclickButton}
          >
            OK, GOT IT!
          </button>
        </div>
            {/* <p className='text-center max-w-[500px]'>*Based on the data of users who log their progress in the app. Consult your physician first. The chart is a non-customized illustration and results may vary</p> */}
            </div>
        </div>
    );
};

// ReactDOM.render(<App />, document.getElementById('root'));
export default Chart;