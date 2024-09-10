import { Input } from '@/components/ui/input';
import { totalTime } from '@/lib/utils';
import dayjs from 'dayjs';
import { StepTypeFunctionIF } from '../Interface/SignInInterface';

export default function StepEmail1({
  StepType,
  setStepType,
  ParamsForm,
  setParamsForm,
}: StepTypeFunctionIF) {
  const handleSubmitEmail = () => {
    const valueTime = dayjs().add(totalTime, 'seconds').valueOf()
    localStorage.setItem('time_count', valueTime.toString() as string)
    setStepType({
      ...StepType,
      step: 2
    })
  }

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setParamsForm && ParamsForm) {
      setParamsForm({
        ...ParamsForm,
        email: event.target.value
      })
    }
  }

  return (
    <div>
      <div>
        <Input placeholder='Enter your email' type='text' onChange={(event) => handleChangeValue(event)} />
      </div>
      <div className='mt-6'>
        <button onClick={() => handleSubmitEmail()} className="w-full text-[#ffffff] bg-[#5F4DD7] rounded-2xl h-12">
          Continue
        </button>
      </div>
      <div>
      </div>
    </div>
  )
}
