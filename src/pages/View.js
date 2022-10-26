import { useState } from 'react';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import Cart from '../components/Cart';
import Boxes from '../components/products/Boxes';
import Products from '../components/products/products';
import Modal from '../components/ui/Modal';
import './view.css'


export default function View(){

    const [open,setOpen] = useState(false)

    const step1Content = <Boxes/>
    const step2Content = <Products/>
    const step3Content = <Cart/>

    function onFormSubmit() {
        setOpen(true)
      }

      

    return(
        <div className=''>
            <div className=''>
            <StepProgressBar
                startingStep={0}
                secondaryBtnClass ={`btnStyle`}
                primaryBtnClass ={`btnStyle primary-btn `}
                stepClass ={`step`}
                progressClass={`progress`}
                onSubmit={onFormSubmit}
                steps={[
                {
                    label: 'Step 1',
                    subtitle: '10%',
                    name: 'step 1',
                    content: step1Content
                },
                {
                    label: 'Step 2',
                    subtitle: '50%',
                    name: 'step 2',
                    content: step2Content,
                    // validator: step2Validator
                },
                {
                    label: 'Step 3',
                    subtitle: '100%',
                    name: 'step 3',
                    content: step3Content,
                    // validator: step3Validator
                }
                ]}
            />;
            </div>
            <Modal open={open} setOpen={setOpen}/>
        </div>
    )
}