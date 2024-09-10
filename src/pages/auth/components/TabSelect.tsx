import { StepTypeFunctionIF } from '../Interface/SignInInterface';
import './TabSelect.scss';

export default function TabSelect({
  StepType,
  setStepType
}: StepTypeFunctionIF) {
  return (
    <>
      <div className='row-tab-item-select-login'>
        <button onClick={() => setStepType({
          ...StepType,
          tabActive: 'phone'
        })}
          className={`w-1/2 border rounded-full ${StepType?.tabActive === 'phone' ? 'border-[#5F4DD7] text-[#5F4DD7]' : 'border-[transparent] text-[#0E0A29]'}`}>Phone</button>
        <button onClick={() => setStepType({
          ...StepType,
          tabActive: 'email'
        })}
          className={`w-1/2 border rounded-full ${StepType?.tabActive === 'email' ? 'border-[#5F4DD7] text-[#5F4DD7]' : 'border-[transparent] text-[#0E0A29]'}`}>Email</button>
      </div>
    </>
  )
}
