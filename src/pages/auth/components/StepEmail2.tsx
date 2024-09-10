import { Input } from '@/components/ui/input';
import { totalTime } from '@/lib/utils';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { StepTypeFunctionIF } from '../Interface/SignInInterface';

export default function StepEmail2({
  ParamsForm,
  setParamsForm,
  handleSubmitFormEmail
}: StepTypeFunctionIF) {
  const [TimeCountNow, setTimeCountNow] = useState(dayjs().valueOf())
  const [TimeCount, setTimeCount] = useState(0)
  const [EnableSubmit, setEnableSubmit] = useState(false)

  useEffect(() => {
    const timeCount = localStorage.getItem('time_count')
    if (timeCount) {
      setTimeCount(parseFloat(timeCount as string))
    }
  }, [])

  useEffect(() => {
    const clear = setInterval(() => {
      const TimeCountNowInterval = dayjs().valueOf()
      setTimeCountNow(TimeCountNowInterval)
    }, 1000)
    return () => clearInterval(clear)
  }, [])

  useEffect(() => {
    const firstDate = dayjs(TimeCountNow)
    const lastDate = dayjs(TimeCount)
    duration = lastDate.diff(firstDate, 'seconds');

    if (duration < 1) {
      setEnableSubmit(false)
    } else {
      setEnableSubmit(true)
    }
  }, [TimeCountNow, TimeCount])

  const handleSubmitEmail = () => {
    if (handleSubmitFormEmail) {
      handleSubmitFormEmail()
    }
    // setStepType({
    //   ...StepType,
    //   step: 1
    // })
  }

  const handleReSendCode = () => {
    const valueTime = dayjs().add(totalTime, 'seconds').valueOf()
    localStorage.setItem('time_count', valueTime.toString() as string)
    setTimeCount(valueTime)
  }

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setParamsForm && ParamsForm) {
      setParamsForm({
        ...ParamsForm,
        code: event.target.value
      })
    }
  }

  let duration = null
  if (TimeCount && TimeCountNow) {
    const firstDate = dayjs(TimeCountNow)
    const lastDate = dayjs(TimeCount)
    duration = lastDate.diff(firstDate, 'seconds');
  }

  return (
    <div>
      <div>
        <Input placeholder='' type='text' onChange={handleChangeValue} />
      </div>
      {
        duration && duration > 0 ? <>
          <div className='text-[#737089] mt-1'>
            Resend code in <span className='text-[#000000] font-bold'>{duration ? `${duration}s` : '--'}</span>
          </div>
        </> : <>
          <div className='text-[#5F4DD7] mt-1 font-medium cursor-pointer' onClick={() => handleReSendCode()}>
            Resend code
          </div>
        </>
      }

      <div className='mt-6'>
        <button onClick={() => {
          EnableSubmit && handleSubmitEmail()
        }} className={`w-full rounded-2xl h-12 ${EnableSubmit ? 'text-[#ffffff] bg-[#5F4DD7] cursor-pointer' : 'text-[#737089] bg-[#EEEEF1] cursor-not-allowed'}`}>
          Continue
        </button>
      </div>
      <div>
      </div>
    </div>
  )
}
