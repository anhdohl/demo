import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CountryList from '@/lib/countryPhoneCodes.json';
import { totalTime } from '@/lib/utils';
import dayjs from 'dayjs';
import { CountryListIF, StepTypeFunctionIF } from '../Interface/SignInInterface';
import { useEffect } from 'react';

export default function StepPhone1({
  ParamsForm,
  setParamsForm,
  StepType,
  setStepType
}: StepTypeFunctionIF) {

  useEffect(() => {
    if (setParamsForm && ParamsForm && Object.values(CountryList)?.[0]) {
    const value = Object.values(CountryList)?.[0]?.code
      setParamsForm({
        ...ParamsForm,
        code: value
      })
    }
  }, [])

  const handleChangeCountry = (value: string) => {
    if (setParamsForm && ParamsForm) {
      setParamsForm({
        ...ParamsForm,
        code: value
      })
    }
  }

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
        phone: event.target.value
      })
    }
  }

  let countryDetail = null
  if (ParamsForm?.code) {
    const CountryListMatch: { [key: string]: CountryListIF } = CountryList
    const codeString = ParamsForm?.code as string
    countryDetail = CountryListMatch[codeString]
  }
  return (
    <div>
      <div>
        <div className='flex flex-col gap-4 sm:flex-row'>
          <Select value={ParamsForm?.code} onValueChange={(value) => handleChangeCountry(value)}>
            <SelectTrigger className='w-36 justify-center pl-0'>
              <SelectValue>{countryDetail?.flag} {countryDetail?.dial_code}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {
                Object.values(CountryList) && Object.values(CountryList).length > 0 ? Object.values(CountryList).map((item: CountryListIF, key) => {
                  return (
                    <SelectItem value={item?.code} key={key}>{item?.flag} {item?.dial_code} - {item?.name}</SelectItem>
                  )
                }) : null
              }
            </SelectContent>
          </Select>
          <Input placeholder='Phone number' type='text' onChange={handleChangeValue} />
        </div>
      </div>
      <div className='mt-6'>
        <button onClick={() => handleSubmitEmail()} className="w-full text-[#ffffff] bg-[#5F4DD7] rounded-2xl h-12">
          Continue
        </button>
      </div>
      <div>
      </div>
    </div >
  )
}
